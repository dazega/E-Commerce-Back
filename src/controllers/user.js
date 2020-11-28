import mongoose from 'mongoose';
import User from '../models/user';

export const registerUser = async (req, res) => {
  const user = req.body;
  try{
    const newUser = new User(user);

    const result = await newUser.save();

    res.status(200).json(newUser);
  }catch(error){
    res.status(500).json(error.message);
  }
}
