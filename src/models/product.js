import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  price: {
    type: Number,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    default: 0
  }
},{
  timestamps: true
});

const productModel = mongoose.model('Products', productSchema);

export default productModel;
