const express = require('express')
const router=express.Router();
const Product = require('../models/product')


router.get('/getProduct',async(req,res)=>{
    try {
        const {categoryName} = req.body;
    const product = await Product.find({categoryName});
    return res.json(product);
    } catch (error) {
        console.log(error);
    }

})
router.get('/categories/:categoryName',async(req,res)=>{
    try {
        const {categoryName} = req.body;
    const product = await Product.find({categoryName});
    return res.json(product);
    } catch (error) {
        console.log(error);
    }

})
router.get('/categories/:categoryName/:productid',async(req,res)=>{
    try {
        const {categoryName} = req.body;
        const {productid} = req.body;
    const product = await Product.find({categoryName});
    const prod= await Product.findOne(product.productid)
    return res.json(prod);
    } catch (error) {
        console.log(error);
    }

})
router.post('/create',async(req,res)=>{
    try {
        const {categoryName} = req.body;
    const product = await Product.create({categoryName});
    return res.json(product);
    } catch (error) {
        console.log(error);
    }

})

module.exports = router;