import { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import Rating from '../components/Rating';
import { Product } from '../types/product';

export default function Products() {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    (async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const p = await res.json();
      setTimeout(() => {
        setProducts(p);
      }, 1500);
    })();
  }, []);

  return products ? (
    <div>
      <h1 className='mt-10 text-center text-3xl font-bold'>Products</h1>
      <div className='my-20 flex flex-row flex-wrap'>
        {products.map((product) => (
          <a
            className='group relative flex w-full flex-col justify-center p-10 sm:w-1/2 md:w-1/3 lg:w-1/4'
            key={product.id}
            href={`products/${product.id}`}
          >
            <img loading='lazy' src={product.image} height={250} width={300} />

            <Rating rating={product.rating} showLabel={false} />
            <div className='w-full text-center opacity-0 transition-opacity group-hover:opacity-100'>
              {product.title}
            </div>
          </a>
        ))}
      </div>
    </div>
  ) : (
    <Loading />
  );
}
