import express, { json, urlencoded } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

//Config
import config from './config/config';

//Routes
import userRoutes from './routes/user';
import productRoutes from './routes/product';

const app = express();

app.use(json({limit: '30mb', extended: true}));
app.use(urlencoded({limit: '30mb', extended: true}));
app.use(cors());

//Definition of routes
app.use('/user', userRoutes);
app.use('/product', productRoutes);


mongoose.connect(`${config.MONGO_URL}/${config.DATABASE}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=>{
    app.listen(config.PORT, ()=> console.log(`Sever running on PORT ${config.PORT}`));
  })
  .catch((error)=>{
    console.log(`Error en conección a bd: ${error.message}`)
  });

mongoose.set('useFindAndModify', false);
