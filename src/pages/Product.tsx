import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import Loading from "../components/Loading";
import Modal from "../components/Modal";
import Rating from "../components/Rating";
import Select from "../components/Select";
import { Product as ProductType } from "../types/product";

const SIZES = ["XS", "S", "M", "L", "XL"];

export default function Product() {
  const [product, setProduct] = useState<ProductType>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(SIZES[0]);

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
      <h1 className="mt-10 text-center text-3xl font-bold">{product.title}</h1>
      <div className="mx-auto	my-10 flex max-w-screen-lg flex-col flex-wrap md:flex-row">
        <img
          className="my-10 px-10 md:max-w-[50%]"
          src={product.image}
          onClick={() => setIsModalOpen(true)}
        />
        <div className="my-10 flex flex-col justify-between px-10 md:max-w-[50%]">
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
              label="Size"
              selectedItem={size}
              setSelectedItem={setSize}
            />
            <Input
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              value={quantity}
            >
              Quantity
            </Input>
            <Button onClick={addToCart}>Add to cart</Button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal setOpen={setIsModalOpen}>
          <h1>{product.title}</h1>
          <img className="mt-2" src={product.image} />
        </Modal>
      )}
    </div>
  ) : (
    <Loading />
  );
}
