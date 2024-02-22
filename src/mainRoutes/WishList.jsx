import React, { useState } from "react";
import Navbar from "./Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const WishList = () => {
  const [wishlistItems, setWishlistItems] = useState(JSON.parse(localStorage.getItem("wishlistItems")) || []);

  const removeFromCart = (productId) => {
    const updatedWishItems = wishlistItems.filter((item) => item.id !== productId);
    setWishlistItems(updatedWishItems);
    localStorage.setItem("wishlistItems", JSON.stringify(updatedWishItems));
  };

  return (
    <>
      <Navbar />
      <div className="col-md-6 mt-10">
        <Card>
          <CardContent>
            {wishlistItems.map((item) => (
              <div key={item.id}>
                <img src={item.thumbnail} alt="" className="w-20 mt-5"/>
                <div className="">
                <h3 className="font-semibold text-xl">{item.name}</h3>
                <p className="font-semibold mb-3">Price: Rs {item.price}</p>
                <Button onClick={() => removeFromCart(item.id)} className="mb-5"><Trash2 size={25} strokeWidth={1.5}/></Button>
                </div>
                
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default WishList;
