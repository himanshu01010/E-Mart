import cate1 from "../images/electronics.jpg";
import cate2 from "../images/clothing.jpg";
import cate3 from "../images/footwear.jpg";
import cate4 from "../images/watch.jpg";
import pro1 from "../images/phone.jpg";
import pro2 from "../images/t-shirt.jpg";
import pro3 from "../images/laptop.jpg";
import pro4 from "../images/tv.jpg";
import pro5 from "../images/tablet.jpg";
import pro6 from "../images/shirt.jpg";
import pro7 from "../images/S22.jpg";
import pro8 from "../images/onePlus.jpg";
import pro9 from "../images/i15.jpg";
import pro10 from "../images/jeans.jpg";
import pro11 from "../images/sneaker.jpg";
import pro12 from "../images/boots.jpg";
import pro13 from "../images/analog.jpg";
import pro14 from "../images/smart.jpg";
import pro15 from "../images/s22-1.jpg";
import pro16 from "../images/nike.jpg";
import pro17 from "../images/adidas.jpg";
import pro18 from "../images/adidas2.jpg";
import pro19 from "../images/air-force-1.jpg";
import pro20 from "../images/air-force-12.jpg";
import pro21 from "../images/super.jpg";
import pro22 from "../images/super2.jpg";
import pro23 from "../images/woodland.jpg";
import pro24 from "../images/woodland2.jpg";
import pro25 from "../images/red.jpg";
import pro26 from "../images/red2.jpg";
import pro27 from "../images/levi.jpg";
import pro28 from "../images/levi2.jpg";
import pro29 from "../images/h&m.jpg";
import pro30 from "../images/h&m2.jpg";
import pro31 from "../images/fossil.jpg";
import pro32 from "../images/fossil2.jpg";
import pro33 from "../images/casio.jpg";
import pro34 from "../images/casio2.jpg";
import pro35 from "../images/iwatch.jpg";
import pro36 from "../images/iwatch2.jpg";
import pro37 from "../images/galaxy.jpg";
import pro38 from "../images/galaxy2.jpg"
import pro39 from "../images/mac.jpg";
import pro40 from "../images/mac2.jpg";
import pro41 from "../images/dell.jpg";
import pro42 from "../images/dell2.jpg";
import pro43 from "../images/samtv.jpg";
import pro44 from "../images/samtv2.jpg"
import pro45 from "../images/lg.jpg";
import pro46 from "../images/lg2.jpg";
import pro47 from "../images/ipad.jpg";
import pro48 from "../images/ipad2.jpg";
import pro49 from "../images/samtab.jpg";
import pro50 from "../images/samtab2.jpg";
import pro51 from "../images/onePlus2.jpg";
import pro52 from "../images/i152.jpg";

const productsData = {
  categories: [
    {
      name: "Electronics",
      thumbnail: cate1,
      subcategories: [
        {
          name: "Mobile",
          thumbnail: pro1,
          products: [
            {
              id: 1,
              name: "samsung s22",
              price: "50000",
              specs: {
                display: "6.7-inch Super AMOLED",
                camera: "64MP + 12MP + 5MP + 5MP",
                processor: "Exynos 9825",
                RAM: "6GB/8GB",
                storage: "128GB/256GB",
              },
              thumbnail: pro7,
              images: [pro7, pro15],
            },
            {
              id: 2,
              name: "OnePlus 9Pro",
              price: "40000",
              specs: {
                display: "6.7-inch Fluid AMOLED",
                camera: "48MP + 50MP + 8MP + 2MP",
                processor: "Snapdragon 888",
                RAM: "8GB/12GB",
                storage: "128GB/256GB",
              },
              thumbnail: pro8,
              images: [
                pro8,
                pro51
              ],
            },
            {
              id: 3,
              name: "iPhone 15",
              price: "102000",
              specs: {
                display: "6.5-inch Super Retina XDR",
                camera: "12MP + 12MP + 12MP",
                processor: "A16 Bionic",
                RAM: "6GB",
                storage: "128GB/256GB/512GB",
              },
              thumbnail: pro9,
              images: [
                pro9,
                pro52,
              ],
            },
          ],
        },
        {
          name: "Laptops",
          thumbnail: pro3,
          products: [
            {
              id: 4,
              name: "Mac pro 16",
              price: "100000",
              specs: {
                display: "16-inch Retina Display",
                processor: "M1 Pro/M1 Max",
                RAM: "16GB/32GB/64GB",
                storage: "512GB/1TB/2TB/4TB",
              },
              thumbnail:pro39,
              images: [
                pro39,
                pro40,
              ],
            },
            {
              id: 5,
              name: "Dell XPS 15",
              price: "60000",
              specs: {
                display: "15.6-inch OLED",
                processor: "Intel Core i7/i9",
                RAM: "8GB/16GB/32GB",
                storage: "256GB/512GB/1TB/2TB",
              },
              thumbnail: pro41,
              images: [
                pro41,
                pro42
              ],
            },
          ],
        },
        {
          name: "TVs",
          thumbnail: pro4,
          products: [
            {
              id: 6,
              name: "Samsung QLED",
              price: "50000",
              specs: {
                display: "55-inch QLED",
                resolution: "4K UHD",
                refreshRate: "120Hz",
                smartFeatures: "Tizen OS",
                connectivity: "Wi-Fi, Bluetooth, HDMI",
              },
              thumbnail: pro43,
              images: [pro43, pro44]
            },
            {
              id: 7,
              name: "LG OLED C1",
              price: "60000",
              specs: {
                display: "65-inch OLED",
                resolution: "4K UHD",
                refreshRate: "120Hz",
                smartFeatures: "webOS",
                connectivity: "Wi-Fi, Bluetooth, HDMI",
              },
              thumbnail: pro45,
              images: [pro45, pro46],
            },
          ],
        },
        {
          name: "Tablets",
          thumbnail: pro5,
          products: [
            {
              id: 8,
              name: "Apple iPad Pro",
              price: "90000",
              specs: {
                display: "11-inch Liquid Retina",
                processor: "Apple M1",
                RAM: "8GB/16GB",
                storage: "128GB/256GB/512GB/1TB",
              },
              thumbnail: pro47, 
              images: [
                pro47,
                pro48
              ],
            },
            {
              id: 9,
              name: "Samsung Tab S7+",
              price: "30000",
              specs: {
                display: "12.4-inch Super AMOLED",
                processor: "Snapdragon 865+",
                RAM: "6GB/8GB",
                storage: "128GB/256GB",
              },
              thumbnail: pro49,
              images: [
                pro49,
                pro50
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Clothing",
      thumbnail: cate2,
      subcategories: [
        {
          name: "T-Shirts",
          thumbnail: pro2,
          products: [
            {
              id: 10,
              name: "Nike Men's T-Shirt",
              thumbnail: pro6,
              specs: {
                size: ["S ", "M ", "L ", "XL"],
                color: ["Black ", "White ", "Blue ", "Red"],
                fabric: "Cotton",
              },
              price: "1000",
              images: [pro6, pro16],
            },
            {
              id: 11,
              name: "Adidas Women's Tee",
              thumbnail: pro17,
              price: "700",
              specs: {
                size: ["XS", "S", "M", "L"],
                color: ["Pink", "Gray", "Green", "Purple"],
              },
              images: [pro17, pro18],
            },
          ],
        },
        {
          name: "Jeans",
          thumbnail: pro10,
          products: [
            {
              id: 12,
              name: "Levi's Jeans",
              thumbnail: pro28,
              price: "2000",
              specs:{
                size: ["30W x 32L", "32W x 32L", "34W x 32L", "36W x 32L"],
                color: ["Blue", "Black", "Gray"],
              },
              images:[pro27,pro28]
              
            },
            {
              id: 13,
              name: "H&M Jeans",
              price: "1400",
              thumbnail:pro29,
              specs:{
                size: ["24W x 32L ", "26W x 32L ", "28W x 32L ", "30W x 32L"],
                color: ["Blue ", "Black ", "White"],
              },
              images:[pro29,pro30]
              
            },
          ],
        },
      ],
    },
    {
      name: "Footwear",
      thumbnail: cate3,
      subcategories: [
        {
          name: "Sneakers",
          thumbnail: pro11,
          products: [
            {
              id: 14,
              name: "Nike Air Force 1",
              thumbnail: pro19,
              price: "10000",
              specs:{
                size: ["US 6 ", "US 7 ", "US 8 ", "US 9"],
              color: ["White ", "Black ", "Red ", "Blue"]
              },
              
              images: [pro19, pro20],
            },
            {
              id: 15,
              name: "Adidas Superstar",
              thumbnail: pro21,
              price: "5000",
              specs:{
                size: ["US 5 ", "US 6 ", "US 7 ", "US 8"],
              color: ["White ", "Black ", "Gold ", "Silver"]
              },
              
              images: [pro21, pro22],
            },
          ],
        },
        {
          name: "Boots",
          thumbnail: pro12,
          products: [
            {
              id: 16,
              name: "Woodland",
              thumbnail: pro23,
              price: "7000",
              specs:{
                size: ["US 8 ", "US 9 ", "US 10 ", "US 11"],
              color: ["Wheat ", "Black ", "Brown"]
              },
              
              images: [pro23, pro24],
            },
            {
              id: 17,
              name: "Red Chief",
              price: "5000",
              thumbnail: pro25,
              size: ["US 5", "US 6", "US 7", "US 8"],
              color: ["Black", "Cherry Red", "Purple"],
              images: [pro25, pro26],
            },
          ],
        },
      ],
    },
    {
      name: "Watch",
      thumbnail: cate4,
      subcategories: [
        {
          name: "Analog",
          thumbnail: pro13,
          products: [
            {
              id: 18,
              name: "Fossil",
              price: "10000",
              thumbnail:pro31,
              specs:{
                Type: "Analog",
              Material: "Stainless Steel",
              Color: ["Silver", "Gold", "Black"],
              },
              images:[pro31,pro32]
            },
            {
              id: 19,
              name: "Casio",
              price: "20000",
              thumbnail:pro33,
              specs:{
                Type: "Analog",
              Material: "Resin",
              Color: ["Black", "Green", "Red"],
              },
              images:[pro33,pro34]
              
            },
          ],
        },
        {
          name: "Smartwatch",
          thumbnail: pro14,
          products: [
            {
              id: 20,
              name: "Apple Series 7",
              price: "15000",
              thumbnail:pro35,
              specs:{
                Type: "Smartwatch",
              Material: "Aluminum",
              Color: ["Silver", "Gold", "Blue"],
              },  
              images:[pro35,pro36]
            },
            {
              id: 21,
              name: "Samsung w4",
              price: "7000",
              thumbnail:pro37,
              specs:{
                Type: "Smartwatch",
              Material: "Stainless Steel",
              Color: ["Silver", "Black", "Pink"],
              },
              images:[pro37,pro38]
            },
          ],
        },
      ],
    },
  ],
};

export default productsData;
