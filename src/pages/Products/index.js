import React, { Component } from "react";
import { getAllCategory } from "../../actions";
import { connect } from "react-redux";
import Products from "./Products";

class index extends Component {
  componentDidMount() {
    this.props.getAllCategory();
  }

  render() {
    return <Products />;
  }
}

const mapStateToProps = state => ({
  categories: state.Category.categories
});

const mapDispatchToProps = dispatch => ({
  getAllCategory: () => dispatch(getAllCategory())
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
