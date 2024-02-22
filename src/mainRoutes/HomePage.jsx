import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Img from "./CarouselImg";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import productsData from "@/data/products";

const HomePage= ()=> {

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="w-[80vw] mx-auto my-2  ">
      <Carousel>
              <CarouselContent >
                {Img.map((image, index) => (
                  <CarouselItem key={index} >
                    <center><img width="1000vw" height="100vh" src={image} alt={`Image ${index + 1}`} className="align-center border-2 rounded-lg shadow w-full h-full object-cover rounded-md" /></center> 
                 </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious/>
              <CarouselNext />
        </Carousel>
       
      </div>

      <div className="px-20">
        <div className="text-2xl">
          <h1 className="text-center text-3xl font-semibold mb-4">
            Product Categories
          </h1>
        </div>
        <div className="flex gap-4 justify-center flex-wrap">
          {productsData.categories.map((category) => (
            <Card
              key={category.name}
              className="group block max-w-xs mx-auto rounded-lg p-6 bg-gray-200 ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-slate-400"
            >
              <CardContent className="flex items-center justify-center p-2">
                <Link to={`/category/${category.name}`}>
                  <img
                    src={category.thumbnail}
                    alt={category.name}
                    className="w-50 rounded-md align-center"
                  />
                  <p className="text-center font-semibold mt-2">
                    {category.name}
                  </p>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default HomePage;
