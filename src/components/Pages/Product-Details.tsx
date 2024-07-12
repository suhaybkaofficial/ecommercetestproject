import { useParams } from "react-router-dom";
import { Product } from "../Home/ProductsList";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState<boolean>(false);
  const getSingleProduct = () => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_BACKEND_BASE_URL}/products/${id}`)
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  useEffect(() => {
    getSingleProduct();
  }, [id]);
  return (
    <section className="min-h-screen">
      <hr className="bg-primary" />
      <br />
      <br />
      <br />
      <p>
        Category / Sub category /{" "}
        <span className="text-primary"> {product?.name}</span>
      </p>
      {loading ? (
        <div className=" flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="w-1/2 h-[60vh]">
            <Skeleton className="w-full h-full" />
          </div>
          <div className="w-1/2 flex flex-col justify-between">
            <Skeleton className="h-8 w-full" />
            <br />
            <Skeleton className="h-4 my-2 w-full" />
            <Skeleton className="h-4 my-2 w-full" />
            <Skeleton className="h-4 my-2 w-full" />
            <Skeleton className="h-4 my-2 w-full" />
            <Skeleton className="h-4 my-2 w-full" />
            <Skeleton className="h-4 my-2 w-full" />
            <Skeleton className="h-4 my-2 w-full" />
            <Skeleton className="h-4 my-2 w-full" />
            <Skeleton className="h-4 my-2 w-full" />

            <hr />
            <br />
            <Skeleton className="h-8 w-full" />

            <br />
            <div className="flex items-center flex-col md:flex-row justify-center md:flex-between gap-4">
              <Button variant={"default"} className="rounded-full  w-full">
                Buy now
              </Button>
              <Button
                variant={"outline"}
                className="rounded-full border border-primary text-primary hover:bg-primary hover:text-white w-full"
              >
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex flex-col md:flex-row items-center justify-between gap-3">
          <img
            src={product?.image_url}
            className="h-[40vh]  object-contain flex-start w-1/2"
          />
          <div className="w-1/2">
            <h1 className="text-4xl font-semibold text-primary">
              {product?.name}
            </h1>
            <p className="my-4 text-gray-400 leading-10 ">
              {product?.description}
            </p>
            <p className="my-4 text-gray-400 leading-10 ">
              {product?.description}
            </p>
            <p className="my-4 text-gray-400 leading-10 ">
              {product?.description}
            </p>

            <hr />
            <br />
            <h2 className="text-4xl  text-primary">Price: ${product?.price}</h2>
            <br />
            <div className="flex items-center flex-col md:flex-row justify-center md:flex-between gap-4">
              <Button variant={"default"} className="rounded-full  w-full">
                Buy now
              </Button>
              <Button
                variant={"outline"}
                className="rounded-full border border-primary text-primary hover:bg-primary hover:text-white w-full"
              >
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
