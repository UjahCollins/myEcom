import React, { useState } from "react";
import "./Button.css";

const Button = ({ firstQty }) => {
  const [qty, setQty] = useState(0);
  const handleIncrease = () => {
    setQty((old) => old + 1);
  };
  const handleDecrease = () => {
    setQty((old) => (old < 1 ? old === 0 : old + -1));
  };
  return (
    <main className="btn-main">
      <button type="button" onClick={handleIncrease}>
        +
      </button>
      <div>{firstQty <= 1 ? firstQty + qty : qty}</div>
      <button type="button" onClick={handleDecrease}>
        -
      </button>
    </main>
  );
};

export default Button;
