import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

export default class link extends Component {
  render() {
    const { to } = this.props;

    return (
      <Link className={styles.link} to={to}>
        {this.props.children}
      </Link>
    );
  }
}
