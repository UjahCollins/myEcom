import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";
import Newcard from "../NewCard/Newcard";

const Detail = () => {
  const [items, setItems] = useState({});
  const { id } = useParams();

  console.log(id);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setItems((old) => (old = json)));
  }, [id]);
  console.log(items);
  // useEffect(() => {
  //   let newValues = [];32
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => (newValues = Object.values(json)))
  //     .then(setItems(newValues.find((detail) => detail.id === parseInt(id))));
  // }, [id]);

  return (
    <main>
      <Newcard items={items} />
    </main>
  );
};

export default Detail;
