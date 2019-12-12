import React, { Component } from "react";
import Header from "../component/header";
import Footer from "../component/footer";

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
