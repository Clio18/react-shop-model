import React from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  return (
    <form>
      <div classes = {classes.control}>
        <lable htmlFor="name">Your Name</lable>
        <input type="text" id = "name"/>
      </div>
      <div classes = {classes.control}>
        <lable htmlFor="street">Street</lable>
        <input type="text" id = "street"/>
      </div>
      <div classes = {classes.control}>
        <lable htmlFor="postal">Postal Code</lable>
        <input type="text" id = "postal"/>
      </div>
      <div classes = {classes.control}>
        <lable htmlFor="city">City</lable>
        <input type="text" id = "city"/>
      </div>
      <button>Confirm</button>
    </form>
  );
};

export default Checkout;
