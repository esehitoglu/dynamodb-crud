const productsService = require('../services/products')

// I wrote the control functions of the /products path
exports.addProduct = async(req,res) => {
    const response = await productsService.addProduct(req.body)
    res.send(response)
}

exports.fetchAllProduct = async(req,res)=>{
    const response =await productsService.fetchAllProduct()
    res.send(response)
}

exports.singleProduct = async(req,res)=>{
    const response =await productsService.singleProduct(req.params)
    res.send(response)
}

exports.singleProductQuery = async(req,res)=>{
    const response =await productsService.singleProductQuery(req.body)
    res.send(response)
}

exports.fetchIsDiscount = async(req,res)=>{
    const response = await productsService.fetchIsDiscount()
    res.send(response)
}

exports.deleteProduct = async(req,res)=>{
    const response =await productsService.deleteProduct(req.body)
    res.send(response)
}

exports.delete = async(req,res)=>{
    const response =await productsService.delete(req.params)
    res.send(response)
}

exports.updateProduct = async(req,res)=>{
    const response =await productsService.updateProduct(req.body)
    res.send(response)  
}

