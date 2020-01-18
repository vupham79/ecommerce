import React, { Component } from "react";
import { Grid, Container } from "@material-ui/core";
import { StyledTypography } from "../../components/customer/styledComponents";
import ListCart from "../../components/customer/listCartItems";
import CustomerInfo from "../../components/customer/customerOrderInfo";
import styles from "./cart.module.css";

export default class Cart extends Component {
  state = {
    open: false,
    color: "",
    size: ""
  };

  setOpen = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  setColor = color => {
    this.setState(() => ({
      color
    }));
  };

  setSize = size => {
    this.setState(() => ({
      size
    }));
  };

  render() {
    return (
      <Container>
        <Grid container>
          <Grid item container md={8} xs={12} className={styles.leftNav}>
            <Grid
              container
              alignItems={"flex-start"}
              spacing={2}
              direction={"column"}
            >
              <Grid item>
                <StyledTypography
                  className={styles.detail__title}
                  variant="body1"
                  color="inherit"
                  align="center"
                  noWrap
                >
                  Chi tiết sản phẩm
                </StyledTypography>
              </Grid>
              <Grid item container className={styles.cart__list} spacing={2}>
                <ListCart />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            container
            md={4}
            xs={12}
            className={styles.rightNav}
            spacing={1}
          >
            <CustomerInfo />
          </Grid>
        </Grid>
      </Container>
    );
  }
}
