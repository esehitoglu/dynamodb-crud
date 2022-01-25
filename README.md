
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

<h1 align="left">
<img src="https://readme-typing-svg.herokuapp.com?font=arial-bold&color=%23F70000&size=28&duration=10000&vCenter=true&lines=A%E2%86%92" />
</h1>
<br>

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

**Client:** Javascript

**Server:** Node, Express , Amazon DynamoDB

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

<br>
<h1 align="left">
<img src="https://readme-typing-svg.herokuapp.com?font=arial-bold&color=%23F70000&size=28&duration=10000&vCenter=true&multiline=true&lines=B%E2%86%92" />
</h1>
<br>

# 💎 NoSQL ve SQL Arasındaki Farklar

  <img src="https://miro.medium.com/max/1400/1*-fYuURITlpsGyKpfqKP6gg.png" />
 
  SQL  | NoSQL
------------- | -------------
SQL veritabanları dikey olarak ölçeklenebilir. Tek bir sunucu üzerinde donanım kapasitesini (CPU, RAM, SSD vb.) Artırarak ölçeklenebilirler. | NoSQL veritabanları yatay olarak ölçeklenebilir. Büyük yükü yönetmek ve yığını azaltmak için altyapıya daha fazla sunucu eklenerek ölçeklenebilirler.
SQL veritabanları esas olarak ilişkisel veritabanıdır (RDBMS). | NoSQL veritabanları esas olarak ilişkisel olmayan veya dağıtılmış veritabanlarıdır.
Eski bir teknoloji. | Nispeten genç teknoloji.
SQL veritabanları satır ve sütunlar biçiminde tablo tabanlıdır ve standart şema tanımlarına kesinlikle uymalıdır.Çok sıralı işlemlere ihtiyaç duyan uygulamalar için daha iyi bir seçenektir. | NoSQL veritabanları belgelere, anahtar / değer çiftlerine, grafiklere veya sütunlara dayalı olabilir ve standart şema tanımlarına bağlı kalmaları gerekmez.
Yapılandırılmış veriler için iyi tasarlanmış önceden tanımlanmış bir şemaya sahiptirler. | Yapılandırılmamış veriler için dinamik şemaya sahiptirler. Veriler, önceden tanımlanmış bir yapıya sahip olmadan esnek bir şekilde saklanabilir.
SQL veritabanları normalleştirilmiş şemayı destekler. | NoSQL veritabanları, normalleştirilmiş şemayı tercih eder.
Ölçeklendirme maliyeti yüksektir. | İlişkisel veritabanlarına kıyasla ölçeklendirmek daha ucuzdur.
SQL, sorguları işlemek için standart bir arayüze sahip olduğundan karmaşık sorgular için iyi bir seçimdir.SQL sorgularının sözdizimi düzeltildi. | NoSQL'de sorguları işlemek için standart bir arayüz olmadığından karmaşık sorgular için uygun değildir.NoSQL'deki sorgular SQL sorguları kadar güçlü değildir.UnQL olarak adlandırılır ve Yapılandırılmamış sorgu dilini kullanma sözdizimi sözdiziminden sözdizimine değişiklik gösterir.
SQL veritabanları hiyerarşik veri depolamaya pek uygun değildir. | NoSQL veritabanları, verileri depolamak için anahtar-değer çifti yöntemini izlediği için hiyerarşik veri depolamaya en uygun olanıdır.
Ticari açıdan bakıldığında, SQL veritabanları genellikle açık kaynak veya kapalı kaynak olarak sınıflandırılır. | Anahtar-değer deposu, belge deposu, grafik deposu, sütun deposu ve XML deposu olarak verileri saklama şekillerine göre sınıflandırılırlar.
SQL veritabanları, ACID özelliklerini (Atomiklik, Tutarlılık, İzolasyon ve Dayanıklılık) doğru şekilde takip eder. | NoSQL veritabanları, Brewers CAP teoremini (Tutarlılık, Kullanılabilirlik ve Bölme toleransı) doğru şekilde takip eder.
SQL veritabanına yeni veri eklemek, verileri doldurmak, şemaları değiştirmek gibi bazı değişikliklerin yapılmasını gerektirir. | Yeni veriler, önceden herhangi bir adım gerektirmediğinden, NoSQL veritabanlarına kolayca eklenebilir.
Tüm SQL veritabanları için mükemmel satıcı desteği ve topluluk desteği mevcuttur. | NoSQL veritabanları için yalnızca sınırlı topluluk desteği mevcuttur.
Yüksek işlem tabanlı uygulamalar için en uygun çözüm. | NoSQL'i yoğun işlem amaçlı kullanabilirsiniz. Ancak bunun için en uygun seçenek değil.
Hiyerarşik veri depolamaya uygun değildir. | Hiyerarşik veri depolamak ve büyük veri kümelerini depolamak için uygundur (Örn.Büyük Veri).
SQL veritabanları örneği: MySQL, Oracle, MS-SQL, SQLite. | NoSQL veritabanı örnekleri: MongoDB, Apache CouchDB, Redis, HBase.

  <img src="https://omerdemirarslan.com/wp-content/uploads/2020/03/MONGODBSQLFARK-768x355.jpg" />

  ### 🌟 Veri Depolama Yöntemleri

  <img src="https://miro.medium.com/max/998/1*8cFTeBVP4WnbhTNd0IzCdA.jpeg" />
  
  <img src="https://media-exp1.licdn.com/dms/image/C4D12AQGhr_W7C028Zw/article-cover_image-shrink_720_1280/0/1609416011335?e=1648684800&v=beta&t=zB-lDxsLRb_KJfpU3QSwtTP2Af4JcBZxpFa0ATumDVs" />

<p align="center">
  <img src="https://media3.giphy.com/media/l4FAPaGGeB7D1LfIA/giphy.gif?cid=ecf05e47v7tl4lqkwqi94wxr0h96a7enpcsvqcspuf5xkotr&rid=giphy.gif&ct=g" />
</p>