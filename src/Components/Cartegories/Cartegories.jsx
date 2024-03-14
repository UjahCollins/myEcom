import React, { useState, useEffect } from "react";
import "./Cartegories.css";
import { NavLink } from "react-router-dom";

const Cartegories = () => {
  const [cartegories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) =>
        setCategories([...new Set(json.map((item) => item.category))])
      );
  }, []);

  return (
    <main className="main-cartegories">
      {cartegories.map((cartegory) => {
        return (
          <div className="div-cartegories" key={cartegory.id}>
            <NavLink to={`/cartegory/${cartegory}`}>{cartegory}</NavLink>
            {console.log(cartegory)}
          </div>
        );
      })}
    </main>
  );
};

export default Cartegories;
