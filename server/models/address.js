const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    name: String,
  address: String,
  pincode: String,  
  phoneno: String,  
  productName: String,
  productDescription: String,
  productPrice: String,
  productQuantity: String,
  productImage: String
});

const AddressModel = mongoose.model('Address', AddressSchema);
module.exports = AddressModel;