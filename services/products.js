const AWS = require('aws-sdk')
const { v4: uuidv4 } = require('uuid')

AWS.config.update({
    region: "us-east-1",
    accessKeyId: "AKIAXE4QWHK2VPQFMHEJ",
    secretAccessKey: "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",
    endpoint: "https://dynamodb.us-east-1.amazonaws.com"
})

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
            message:"Ürün bulundu",
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
             ":data": "true",
        }
    }
    try{
        const data = await docClient.scan(items).promise()
        return{
            status:true,
            message:"İndirimli ürünler",
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
        if(control === true){
            console.log("silinemez")
            return{
                status:false,
                massage:"İndirimli ürün silinemez!",
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
        //await docClient.delete(items).promise()
        /*
        return{
            status:true,
            message:"deneme"
        }*/
    }catch(err){
        return{
            status:false,
            massage:"İndirimli ürün silinemez!",
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
            message:"veri güncellendi"
        }
    }catch(err){

        return{
            status:false,
            message:err
        }
    }
}