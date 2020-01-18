import React, { Component } from "react";
import Header from "../components/customer/header";
import Footer from "../components/customer/footer";

export default class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        {this.props.children}
        <Footer />
      </>
    );
  }
}
