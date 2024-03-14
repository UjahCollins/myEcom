import React from "react";
import { useOutletContext } from "react-router-dom";
import "./Cart.css";
// import Buttons from "../Button/Button";

const Cart = () => {
  const { myCart, firstQty , inputData, amount} = useOutletContext();

  return (
    <main className= {!inputData ? "main-cart": "main-cart2"}>
      <h1>My Cart</h1>
      <section className="section-cart">
        <div className="section-cart-firstDiv">
          {myCart.map((item) => {
            return (
              <article className="each-cart-item">
                <main className="each-cart-left">
                  <div className="img-div">
                    <img src={item.img} alt="imgs" />
                  </div>
                  <div>{item.title}</div>
                  <div>${item.price}</div>
                  <button className="removeCart">remove from cart:</button>
                </main>
                {/* <section className="each-cart-right">
                  <Buttons
                    firstQty={firstQty}
                    // setQty={setQty}
                  />
                </section> */}
              </article>
            );
          })}
        </div>
        <div className="section-cart-secondDiv">
          <div className="section-cart-secondDiv-top">
            <h4>Total Quantity: {amount} </h4>
          </div>
          <div>
            <h4>Total Price:</h4>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
