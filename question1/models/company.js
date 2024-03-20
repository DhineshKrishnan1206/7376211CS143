const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const companySchema= new Schema({
    companyName:String,

})

const Company=mongoose.model("Company",companySchema)

module.exports = Company;