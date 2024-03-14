import React from "react";
import "./Head.css";
// import logo from "../../image/Images/Microsoft-introduces-removebg-preview.png";
import { NavLink } from "react-router-dom";
// import cart from "../../image/Images/cart.png";
import logo from "../mages/logo.png"
import con from "../mages/icon.png"

const Header = ({ inputData, inputFun, amount }) => {
  return (
    <main className={!inputData ? "head-main" : "head-main-2"}>
      <header>
        <div className="header-firstDiv">
          <img
            src={logo}
            alt="logo"
            className={inputData ? "img-color" : undefined}
          />
        </div>
        <div className="header-secondDiv">
          <ul>
            <li className="list">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="list">
              <NavLink to="/categories">Cartegories</NavLink>
            </li>
            <li className="list">
              <NavLink to="/cart">Cart</NavLink>
            </li>
          </ul>
        </div>
        <div className="header-main-thirdDiv">
          <NavLink to="/cart" className="cartdiv">
            <div className="cartdiv-imgdiv">
              <img src={con} alt="cart" />
            </div>
            <div className="amount">{amount}</div>
          </NavLink>
          <div className="header-thirdDiv">
            <input
              type="checkbox"
              id="inputbox"
              value={inputData}
              onChange={() => inputFun(!inputData)}
            />
            <label htmlFor="inputbox"></label>
          </div>
        </div>
      </header>
    </main>
  );
};

export default Header;
