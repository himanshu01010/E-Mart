import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsData from "../data/products";
import Navbar from "./Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductDetailsPage = () => {
  const { productId, SubName } = useParams();
  const product = findProductById(productId, SubName);
  const navigate = useNavigate();

  if (!product) {
    return <div>Product not found</div>;
  }

  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);
    console.log(existingItemIndex);
    if (existingItemIndex !== -1) {
    
      cartItems[existingItemIndex].quantity++;
    } else {
      
      cartItems.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    navigate("/cart");
  };

  const addToWishList = () =>{
    const wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    const existingWishItemIndex = wishlistItems.findIndex((item) => item.id === product.id);
    if (existingWishItemIndex !== -1) {
      
      wishlistItems[existingWishItemIndex].quantity++;
    } else {
      
      wishlistItems.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
    navigate("/Wishlist");
  }

  return (
    <>
      <Navbar />
      <div className="text-center mt-5">
        <h2 className="text-3xl font-semibold">Product Details</h2>
      </div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <Carousel>
            <CarouselContent>
              {product.images?.map((image, index) => (
                <CarouselItem key={index}>
                  <center>
                    <img width="500vw" height="50vh" src={image} alt={`Image ${index + 1}`} />
                  </center>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="col-md-6 mt-10">
            <Card>
              <CardContent>
                <h3 className="text-3xl font-semibold">{product.name}</h3>
                <p>
                  <span className="font-semibold"> Rs {product.price}</span>
                </p>

                <ul>
                  {Object.entries(product.specs || {}).map(([key, value]) => (
                    <li key={key}>
                      <strong>{key}:</strong> {value}
                    </li>
                  ))}
                </ul>
                <Button className="mt-2" onClick={addToCart}>
                  Add To Cart
                </Button>
                <Button className="ml-2" onClick={addToWishList}>
                  Add To WishList
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

function findProductById(productId, SubName) {
  const category = productsData.categories.find((category) =>
    category.subcategories.find((subcategory) => subcategory.name === SubName)
  );

  if (category) {
    const subcategory = category.subcategories.find(
      (subcategory) => subcategory.name === SubName
    );

    const product = subcategory.products.find(
      (product) => product.id === parseInt(productId)
    );
    return product || null;
  }

  return null;
}

export default ProductDetailsPage;
