import React, { useState } from "react";
import Navbar from "./Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const decrementQuantity = (productId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const incrementQuantity = (productId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <>
      <Navbar />
      <div className="col-md-6 mt-10">
        <Card>
          <CardContent>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-4">
                <div>
                  <img src={item.thumbnail} alt="" className="w-20 mt-5" />
                  <p className="font-semibold">{item.name}</p>
                  <p className="font-semibold mb-3">Price: Rs {item.price}</p>
                  <Button onClick={() => removeFromCart(item.id)} className="mb-5 p-3 h-10"><Trash2 size={25} strokeWidth={1.5}/></Button>
                </div>
  
                <div className="flex items-center mt-20">
                  <p className="mx-3 font-semibold">Quantity:</p>
                  <Button onClick={() => decrementQuantity(item.id)} className="p-3 text-sm h-8">-</Button>
                  <span className="font-semibold mx-2">{item.quantity}</span>
                  <Button onClick={() => incrementQuantity(item.id)} className="p-3 text-sm h-8">+</Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default CartPage;
