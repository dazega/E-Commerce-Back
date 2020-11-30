import mongoose from 'mongoose';
import User from '../models/user';
import bcrypt from 'bcrypt'; //Bcrypt for the hash of the password
import jwt from 'jsonwebtoken';

import config from '../config/config';

//SALT ROUNDS for the random hash
const BCRYPT_SALT_ROUNDS = 12;

export const registerUser = async (req, res) => {
  const user = req.body;
  try{
    const userExist = await User.findOne({email: user.email});
    if(userExist)
      return res.status(400).json({message: 'User exist'});

    //hashing the password
    const hashPassword = await bcrypt.hash(user.password, BCRYPT_SALT_ROUNDS);
    const newUser = new User({...user, password: hashPassword});

    const result = await newUser.save();

    res.json({newUser});
  }catch(error){
    res.json(error.message);
  }
}

export const loginUser = async (req, res) => {
  const user = req.body;
  try{
    const userDB = await User.findOne({email: user.email});

    if(!userDB)
      return res.status(404).json({ message: 'Usuario no encontrado' });

    const isSamePassword = await bcrypt.compare(user.password, userDB.password);

    if (!isSamePassword)
      return res.status(404).json({ message: 'Contraseña incorrecta' });

    const payload = {
      id: userDB._id,
      email: userDB.email,
      username: `${userDB.name} ${userDB.lastName}`,
      rol: ''
    };
    const token = await jwt.sign(payload, config.SECRET_KEY, {
      expiresIn: '1h'
    });
      
    res.status(200).json({token});
  }catch(error){
    console.log('Estot tiene el error', error);
    res.status(404).json(error.message);
  }
}
