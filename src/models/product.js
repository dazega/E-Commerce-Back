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
  images: [String],
  name: {
    type: String,
    required: true
  },
  activeProduct:{
    required: true,
    type: Boolean
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
