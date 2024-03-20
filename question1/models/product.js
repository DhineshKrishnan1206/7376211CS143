const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName:String ,
    categoryName:String,
    categoryId:String,
    companyName:String,
    companyId:String,
	price: String,
	rating: String,
	discount: String,
	availability:String
})


const Products = mongoose.model("Products",productSchema);

module.exports=Products;