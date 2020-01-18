import React, { Component } from "react";
import CartItem from "./cartItem";

export default class listCartItems extends Component {
  render() {
    const item = {
      title: "Dép nữ MWC NUDE- 3269",
      size: "36",
      color: "KEM",
      price: "220,000",
      quantity: "2",
      subtotal: "440,000"
    };
    return (
      <>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(val => (
          <CartItem key={val} item={item} />
        ))}
      </>
    );
  }
}
