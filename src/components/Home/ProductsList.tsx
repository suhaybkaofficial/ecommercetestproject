import axios from "axios";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { RiseLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
};

export default function ProductsList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getProducts = () => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_BACKEND_BASE_URL}/products`)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
      {loading ? (
        <>
          {[1, 2, 3, 4].map((index) => {
            return (
              <Card
                className=" min-h-[40vh] relative bg-primary/15"
                key={index}
              >
                <Skeleton className="w-full h-full" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <RiseLoader color="#7b3aec" />
                  <p className="mt-4 text-center text-primary font-semibold">
                    Loading...
                  </p>
                </div>
              </Card>
            );
          })}
        </>
      ) : (
        <>
          {products.map((product) => {
            return (
              <Link to={`/product-details/${product.id}`}>
                <Card className="min-h-[40vh] h-full">
                  <CardHeader className="bg-transparent">
                    <img
                      src={product.image_url}
                      width={100}
                      height={100}
                      className="w-full h-44 object-contain"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-md flex justify-between">
                      {product.name}
                      <p className="text-primary">${product.price}</p>
                    </CardTitle>
                    <CardDescription>
                      {product.description.slice(0, 30) + "..."}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                   <Button variant={"outline"} className="rounded-full border border-primary text-primary hover:bg-primary hover:text-white">
                    Add to cart
                   </Button>
                  </CardFooter>
                </Card>
              </Link>
            );
          })}
        </>
      )}
    </div>
  );
}
