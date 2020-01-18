import React, { Component } from "react";
import ProductCard from "./productCard";
import { Grid } from "@material-ui/core";
import styles from "./index.module.css";

export default class listProduct extends Component {
  render() {
    return (
      <Grid container spacing={4} className={styles.padding}>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
          <Grid item md={4} sm={6} xs={12} key={index}>
            <ProductCard />
          </Grid>
        ))}
      </Grid>
    );
  }
}
