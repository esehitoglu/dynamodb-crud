require('dotenv').config()
//we installed aws
const AWS = require('aws-sdk')

// we installed uuid
const { v4: uuidv4 } = require('uuid')

// aws connection settings have been made
AWS.config.update({
    region: process.env.REGION,
    accessKeyId: process.env.ACCESSKEYID,
    secretAccessKey: process.env.SECRETACCESSKEY,
    endpoint: process.env.ENDPOINT
})

// DynamoDB made the connection
let docClient = new AWS.DynamoDB.DocumentClient()
var table = "Products"

// 1) Write a POST endpoint that adds products to the Products table
exports.addProduct = async(params)=>{
    const item = {
        TableName:table,
        Item:{
            productId: string,
            stock: number,
            productName: string,
            isDiscount: boolean,
            category: {
            categoryId: number,
            categoryName: string,
            }
        }={
            productId: uuidv4(),
            stock: params.stock,
            productName: params.productName,
            isDiscount: params.isDiscount,
            category: {
            categoryId: Math.random()*169999,
            categoryName: params.categoryName,
            }
        }
    }
    try{
        await docClient.put(item).promise()
        return{
            status:true,
            message:"Product added"
        }
    }catch(err){
        return{
            status:false,
            message:err
        }
    }
}

// 2) Write a GET endpoint that returns all added products.
exports.fetchAllProduct = async(params)=>{
    var items = {
        TableName: table
    };
    try{
        const data = await docClient.scan(items).promise()
        return{
            status:true,
            message:data
        }
    }catch(err){
        return{
            status:false,
            message:err
        }
    }
}

// 2a) A filter will be created by using query params according to productId among all products.Enter the endpoint.
exports.singleProduct = async(params)=>{
    var items = {
        TableName:table,
        Key:{
            productId: params.productId,
        }
    };
    try{
        const data = await docClient.get(items).promise()
        return{
            status:true,
            message:"Product found",
            product:data
        }
    }catch(err){
        return{
            status:false,
            message:err
        }
    }
}

// 2a) A filter will be created by using query params according to productId among all products.Enter the endpoint.
exports.singleProductQuery = async(params)=>{
    var items = {
        TableName:table,
        KeyConditionExpression: "#productId = :id",
        ExpressionAttributeNames:{
            "#productId": "productId"
        },
        ExpressionAttributeValues: {
            ":id": params.productId
        }
    };
    try{
        const data = await docClient.query(items).promise()
        return{
            status:true,
            message:"Product found",
            product:data
        }
    }catch(err){
        return{
            status:false,
            message:err
        }
    }
}

/* 2b) There is a filter among all products that will filter according to the discounted products.
Enter the endpoint. */
exports.fetchIsDiscount = async(params)=>{
    var items = {
        TableName:table,
        FilterExpression: "#cg = :data",
        ExpressionAttributeNames: {
            "#cg": "isDiscount",
        },

        ExpressionAttributeValues: {
             ":data": true,
        }
    }
    try{
        const data = await docClient.scan(items).promise()
        return{
            status:true,
            message:"Discounted products",
            product:data
        }
    }catch(err){
        return{
            status:false,
            message:err
        }
    }
}

/* 3) Write a DELETE endpoint that will delete any product with its productId (on
Any product with isDiscount should not be deleted, an error should be returned) */
exports.deleteProduct = async(params)=>{
    var items = {
        TableName:table,
        Key:{
            productId: params.productId
        }
    };
    
    try{
        const data = await docClient.get(items).promise()
        const control = data.Item.isDiscount
        console.log(data)
        console.log(control)
        if(control === true){
            console.log("silinemez")
            return{
                status:false,
                massage:"The discounted product cannot be deleted!",
                errormassage:err
            }
        }else{
            console.log("silindi")
            await docClient.delete(items).promise()
            return{
                status:true,
                message:data
            }
        }
    }catch(err){
        return{
            status:false,
            massage:"The discounted product cannot be deleted!",
            errmessage:err
        }
    }
}

exports.delete = async(params)=>{
    var items = {
        TableName:table,
        Key:{
            productId: params.productId
        },
        ConditionExpression: "isDiscount = :isDiscount ",
        ExpressionAttributeValues:{
            ":isDiscount": false,
        },
    };
    
    try{
        const data = await docClient.delete(items).promise()
        return{
            status:true,
            massage:"the product has been deleted",
            deletedData:data
        }
    }catch(err){
        return{
            status:false,
            massage:"The discounted product cannot be deleted!!!",
            errmessage:err
        }
    }
}

// 4) Write an UPDATE service that will change the stock of any product.
exports.updateProduct = async(params)=>{
    var items = {
        TableName:table,
        Key:{
            "productId": params.productId,
        },
        UpdateExpression: "set stock = :stock",
        ExpressionAttributeValues:{
            ":stock":params.stock,
        },
        ReturnValues:"UPDATED_NEW"
    }
    try{
        //console.log(typeof params.stock)
        await docClient.update(items).promise()
        return{
            status:true,
            message:"Data updated"
        }
    }catch(err){

        return{
            status:false,
            message:err
        }
    }
}