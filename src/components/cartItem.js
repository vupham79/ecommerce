import React, { Component } from "react";
import styles from "./index.module.css";
import { Grid, withStyles } from "@material-ui/core";
import { StyledTypography, StyledTextField } from "./styledComponents";
import Image from "./image";

const Quantity = withStyles({
  root: {
    "& .MuiOutlinedInput-input": {
      padding: "0.25rem",
      textAlign: "center"
    }
  }
})(StyledTextField);

export default class CartItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <Grid container className={styles.cart__item} justify={"space-between"}>
        <Grid item md={2} xs={6}>
          <Image
            src={
              "http://img.mwc.com.vn/giay-thoi-trang?&w=600&h=600&FileInput=//Upload/2019/12/78874550-2479055065537475-3630930008752521216-n.jpg"
            }
          />
        </Grid>
        <Grid item md={4} xs={6}>
          <Grid item>
            <StyledTypography variant="body2" className={styles.title}>
              {item.title}
            </StyledTypography>
          </Grid>
          <Grid item>
            <StyledTypography variant="body2">
              {item.color}, {item.size}
            </StyledTypography>
          </Grid>
        </Grid>
        <Grid item md={2} xs={4}>
          <StyledTypography variant="body2">{item.price} đ</StyledTypography>
        </Grid>
        <Grid item md={1} xs={2}>
          <Quantity
            type="number"
            InputLabelProps={{
              shrink: true
            }}
            variant="outlined"
            defaultValue={item.quantity}
          />
        </Grid>
        <Grid item md={2} xs={4}>
          <StyledTypography variant="body2" className={styles.title}>
            {item.subtotal} đ
          </StyledTypography>
        </Grid>
      </Grid>
    );
  }
}
