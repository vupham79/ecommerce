import React, { Component } from "react";
import { Grid, Container } from "@material-ui/core";
import { StyledTypography } from "../../components/customer/styledComponents";
import styles from "./login.module.css";

export default class Login extends Component {
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

  addToCart = () => {
    console.log("added to cart");
  };

  render() {
    return (
      <Container className={styles.padding}>
        <Grid container>
          <Grid item>
            <StyledTypography
              className={styles.detail__title}
              variant="h5"
              color="inherit"
              align="center"
              noWrap
            >
              Đăng nhập
            </StyledTypography>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Container>
    );
  }
}
