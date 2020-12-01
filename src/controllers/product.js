import Product from '../models/product';

export const getProducts = async (req, res) => {
  try{
    const products = await Product.find({ activeProduct: true });

    res.status(200).json({products});
  } catch(error) {
    res.status(500).json(error.message);
  }
}