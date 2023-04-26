import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import Loading from '../components/Loading';
import Modal from '../components/Modal';
import Rating from '../components/Rating';
import Select from '../components/Select';
import type { Product } from '../types/product';

const SIZES = ['XS', 'S', 'M', 'L', 'XL'];

export default function Product() {
  const [product, setProduct] = useState<Product>();
  const [modalOpen, setModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(SIZES[0]);
  const aspectRatio = 9 / 16;
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    (async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const p = await res.json();
      setTimeout(() => {
        setProduct(p);
      }, 1500);
    })();
  }, [id]);

  const addToCart = () => {
    alert(`Added ${quantity} ${product?.title} in size ${size} to cart`);
  };

  return product ? (
    <div>
      <h1 className='mt-10 text-center text-3xl font-bold'>{product.title}</h1>
      <div className='mx-auto	my-10 flex max-w-screen-lg flex-col flex-wrap md:flex-row'>
        <div
          className='relative w-full md:w-1/2'
        >
          <button onClick={() => setModalOpen(true)} className='peer sr-only'>
            press enter to enlarge image
          </button>
          <img
            className='absolute inset-0 h-full w-full object-contain peer-focus-visible:ring-2 peer-focus-visible:ring-blue-600'
            loading='lazy'
            alt={product.title}
            src={product.image}
            onClick={() => setModalOpen(true)}
          />
        </div>

        <div className='my-10 flex flex-col justify-between px-10 md:w-1/2'>
          <div>
            <p>
              <strong>Description</strong>
            </p>
            <p>{product.description}</p>
            <Rating rating={product.rating} />
          </div>

          <div>
            <Select
              items={SIZES}
              label='Size'
              selectedItem={size}
              setSelectedItem={setSize}
            />
            <Input
              id='quantity'
              value={quantity}
              onChange={(value) => setQuantity(value)}
            >
              Quantity
            </Input>
            <Button onClick={addToCart} aria-label='Add to cart'>
              Add to cart
            </Button>
          </div>
        </div>
      </div>

      {modalOpen && (
        <Modal setOpen={setModalOpen} open={modalOpen}>
          <h1>{product.title}</h1>
          <div
            className='relative w-full'
            style={{
              paddingTop: `${100 / aspectRatio}%`,
            }}
          >
            <img
              alt=''
              src={product.image}
              className='absolute inset-0 h-full w-full object-contain'
            />
          </div>
          <Button onClick={() => setModalOpen(false)}>Close Modal</Button>
        </Modal>
      )}
    </div>
  ) : (
    <Loading />
  );
}
