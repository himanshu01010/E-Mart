import React from "react";
import { Link, useParams } from "react-router-dom";
import productsData from "../data/products";
import Navbar from "./Navbar";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "./Footer";

function CategoryPage() {
  const { CategoryName } = useParams();

  const category = productsData.categories.find(
    (category) => category.name === CategoryName
  );

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="px-20">
        <div className="text-2xl">
          <h2 className="text-center text-3xl font-semibold mb-4">
            {CategoryName} Products
          </h2>
        </div>
      </div>

      <div className="flex gap-2 justify-center flex-wrap">
        {category && category.subcategories.map((subcategory) => (
          <Card
            key={subcategory.name}
            className="group block max-w-xs mx-auto rounded-lg p-6 bg-gray-200 ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-slate-400 m-[0.5rem]"
          >
            <CardContent className="flex items-center justify-center p-2">
              <div>
                <Link to={`/category/${CategoryName}/${subcategory.name}`}>
                  <img
                    src={subcategory.thumbnail} 
                    alt={subcategory.name}
                    className="w-24 h-20 rounded"
                  />
                  <h3 className="text-center text-xl font-semibold mt-2">
                    {subcategory.name}
                  </h3>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="fixed bottom-0 w-full">
        <Footer/>
      </div>
    </>
  );
}

export default CategoryPage;