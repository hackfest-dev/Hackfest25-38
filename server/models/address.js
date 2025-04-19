const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
  // Address details
  name: String,
  address: String,
  pincode: String,  
  phoneno: String,  

  // Product details
  productName: String,
  productDescription: String,
  productPrice: Number,
  productQuantity: Number,
  productImage:{
    data: Buffer,
        contentType: String
  }
});

const AddressModel = mongoose.model('Address', AddressSchema);

module.exports = AddressModel;
