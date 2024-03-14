import React, { useState } from "react";
import Header from "../Head/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [inputData, setInputData] = useState(false);
  const [amount, setAmount] = useState(0);
  const [myCart, setMyCart] = useState([]);
  const [firstQty, setFirstQty] = useState(0);

  //this is the layout we need.
  return (
    <>
      <Header inputData={inputData} inputFun={setInputData} amount={amount} />
      <Outlet
        context={{
          inputData,
          setAmount,
          amount,
          myCart,
          setMyCart,
          firstQty,
          setFirstQty,
        }}
      />
    </>
  );
};

export default Layout;
