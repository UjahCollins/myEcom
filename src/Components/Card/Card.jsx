import React from "react";
import { NavLink } from "react-router-dom";
import "./Card.css";
import { useOutletContext } from "react-router-dom";

const Card = ({ product, inputData }) => {
  const { setAmount, setMyCart, myCart, setFirstQty } = useOutletContext();

  const addToCart = (id) => {
    setFirstQty((old) => (old >= 1 ? old : old + 1));
    // setQty((old) => old + 1);
    setAmount((old) => old + 1);
    const newItem = {
      id: new Date().getTime().toString(),
      img: product.image,
      title: product.title,
      price: product.price,
    };

    setMyCart([...myCart, newItem]);
  };
  // const totalPrice = () => {
  //   if (!cartProducts || cartProducts.length === 0) {
  //     return (0); 
  //   }
  
  //   const total = cartProducts.reduce((accumulator, cart) => {
  //     return accumulator + cart.price;
  //   }, 0);
  
  //   return total;
  // };

  

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => setMyCart(json));
  // }, []);
  return (
    <main className="card-main">
      <div className="card-main-firstDiv">
        <img src={product.image} alt={product.title} />
      </div>
      <div
        className={!inputData ? "card-main-secondDiv" : "card-main-secondDiv-2"}
      >
        {product.title}
      </div>
      <div
        className={!inputData ? "card-main-thirdDiv" : "card-main-thirdDiv-2"}
      >
        {product.price}
      </div>
      <div className="card-main-forthDiv">
        <NavLink to={`/detail/${product.id}`}>learn more</NavLink>
        <button type="button" onClick={addToCart} className="addToCart">
          Add to Cart
        </button>
      </div>
    </main>
  );
};

export default Card;
