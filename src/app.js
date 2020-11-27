import express, { json, urlencoded } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use(json({limit: '30mb', extended: true}));
app.use(urlencoded({limit: '30mb', extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb://localhost/RedSocial';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=>{
    app.listen(PORT, ()=> console.log(`Sever running on PORT ${PORT}`));
  })
  .catch((error)=>{
    console.log(`Error en conección a bd: ${error.message}`)
  });

mongoose.set('useFindAndModify', false);
