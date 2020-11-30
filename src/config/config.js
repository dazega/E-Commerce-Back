import dotenv from 'dotenv';

dotenv.config();

const config = {
  PORT: process.env.PORT,
  MONGO_URL: process.env.MONGODB_URL,
  DATABASE: process.env.DATABASE,
  SECRET_KEY: process.env.SECRET_KEY
}

export default config;