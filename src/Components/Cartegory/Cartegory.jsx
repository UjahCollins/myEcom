import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Cartegory.css";
import Card from "../Card/Card";
import { useOutletContext } from "react-router-dom";

const Cartegory = () => {
  const [allCategory, setAllCategory] = useState([]);
  const cartegory = useParams();

  console.log(cartegory);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) =>
        setAllCategory(json.filter((item) => item.category === cartegory.id))
      );
  }, [cartegory.id]);

  const { inputData} = useOutletContext();

  return (
    <main className= {inputData ? "main-cartegory" : "main-cartegory2"}>
      {allCategory.map((item) => {
        console.log(item);
        return <Card product={item} />;
      })}
    </main>
  );
};

export default Cartegory;
