
# 🚀 A101 Bootcamp Third Week Exercise 🌞

This project describes creating a product table and performing the necessary operations using amazon dynamodb.

# ✨ Installation


Run :

```bash
    npm install
```

The above code creates node_models file ,

Use the code below to start the application

```bash
    node index
```

# Previews

<h1 style="color:red;font-weight:bold"> A→ </h1>

📗 1) Write a POST endpoint that adds products to the Products table

![Uygulama Ekran Görüntüsü](https://github.com/A101-Node-js-TypeScript-Bootcamp/a101-bootcamp-odev3-esehitoglu/blob/main/figures/1.png)

![Uygulama Ekran Görüntüsü](https://github.com/A101-Node-js-TypeScript-Bootcamp/a101-bootcamp-odev3-esehitoglu/blob/main/figures/1_1.png)

📘 2) Write a GET endpoint that returns all added products.

![Uygulama Ekran Görüntüsü](https://github.com/A101-Node-js-TypeScript-Bootcamp/a101-bootcamp-odev3-esehitoglu/blob/main/figures/2.png)

![Uygulama Ekran Görüntüsü](https://github.com/A101-Node-js-TypeScript-Bootcamp/a101-bootcamp-odev3-esehitoglu/blob/main/figures/2_1.png)

📘 2a) A filter will be created by using query params according to productId among all products.Enter the endpoint.

![Uygulama Ekran Görüntüsü](https://github.com/A101-Node-js-TypeScript-Bootcamp/a101-bootcamp-odev3-esehitoglu/blob/main/figures/2a.png)

📘 2b) There is a filter among all products that will filter according to the discounted products.Enter the endpoint.

![Uygulama Ekran Görüntüsü](https://github.com/A101-Node-js-TypeScript-Bootcamp/a101-bootcamp-odev3-esehitoglu/blob/main/figures/2b.png)

📙 3) Write a DELETE endpoint that will delete any product with its productId (on
Any product with isDiscount should not be deleted, an error should be returned)

![Uygulama Ekran Görüntüsü](https://github.com/A101-Node-js-TypeScript-Bootcamp/a101-bootcamp-odev3-esehitoglu/blob/main/figures/3.png)

![Uygulama Ekran Görüntüsü](https://github.com/A101-Node-js-TypeScript-Bootcamp/a101-bootcamp-odev3-esehitoglu/blob/main/figures/3_1.png)

![Uygulama Ekran Görüntüsü](https://github.com/A101-Node-js-TypeScript-Bootcamp/a101-bootcamp-odev3-esehitoglu/blob/main/figures/3_2.png)

📕 4) Write an UPDATE service that will change the stock of any product.

![Uygulama Ekran Görüntüsü](https://github.com/A101-Node-js-TypeScript-Bootcamp/a101-bootcamp-odev3-esehitoglu/blob/main/figures/4.png)

![Uygulama Ekran Görüntüsü](https://github.com/A101-Node-js-TypeScript-Bootcamp/a101-bootcamp-odev3-esehitoglu/blob/main/figures/4_1.png)

## Used technologies

**İstemci:** Javascript

**Sunucu:** Node, Express , Amazon DynamoDB

   # Directory structure

   - [README.md](README.md)
   - __controller__
     - [Products.js](controller/Products.js)
   - __figures__
     - [1.png](figures/1.png)
     - [1\_1.png](figures/1_1.png)
     - [2.png](figures/2.png)
     - [2\_1.png](figures/2_1.png)
     - [2a.png](figures/2a.png)
     - [2b.png](figures/2b.png)
     - [3.png](figures/3.png)
     - [3\_1.png](figures/3_1.png)
     - [3\_2.png](figures/3_2.png)
     - [4.png](figures/4.png)
     - [4\_1.png](figures/4_1.png)
   - [index.js](index.js)
   - [node\_modules](node_modules)
   - [package\-lock.json](package-lock.json)
   - [package.json](package.json)
   - __routes__
     - [api.js](routes/api.js)
     - __products__
       - [products.js](routes/products/products.js)
   - __services__
     - [products.js](services/products.js)