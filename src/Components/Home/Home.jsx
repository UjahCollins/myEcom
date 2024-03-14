import React, { useState, useEffect } from "react";
import "./Home.css";
// import Header from "../Head/Header";
import Card from "../Card/Card";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const { inputData } = useOutletContext();
  // const [inputData, setInputData] = useState(false);
  // console.log(setInputData);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <main className={!inputData ? "app-main" : "app-main-2"}>
      {/* <Header inputData={inputData} inputFun={setInputData} /> */}
      <div
        className={!inputData ? "app-main-secondDiv" : "app-main-secondDiv-2"}
      >
        {products.map((product) => {
          return (
            <Card product={product} key={product.id} inputData={inputData} />
          );
        })}
      </div>
    </main>
  );
};

export default Home;
