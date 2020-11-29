import mongoose from 'mongoose';
import User from '../models/user';
import bcrypt from 'bcrypt'; //Bcrypt for the hash of the password

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

    res.json(newUser);
  }catch(error){
    res.json(error.message);
  }
}
