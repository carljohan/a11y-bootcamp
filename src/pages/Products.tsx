import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Rating from "../components/Rating";
import { Product } from "../types/product";

export default function Products() {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    (async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const p = await res.json();
      setTimeout(() => {
        setProducts(p);
      }, 1500);
    })();
  }, []);

  return products ? (
    <div>
      <h1 className="mt-10 text-center text-3xl font-bold">Products</h1>
      <div className="my-20 flex flex-row flex-wrap">
        {products.map((product) => (
          <div
            className="group relative flex w-full flex-col justify-center p-10 sm:w-1/2 md:w-1/3 lg:w-1/4"
            key={product.id}
            onClick={() => {
              window.location.href = `products/${product.id}`;
            }}
          >
            <img src={product.image} />
            <Rating rating={product.rating} showLabel={false} />
            <div className="absolute -bottom-5 left-0 hidden w-full text-center group-hover:block">
              {product.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <Loading />
  );
}
