import React, { Component } from "react";
import { StyledTypography } from "./styledComponents";
import Link from "./link";
import Image from "./image";
import styles from "./index.module.css";

export default class productCard extends Component {
  addToCart = () => {
    console.log("hello");
  };

  render() {
    return (
      <>
        <Link to="/product-detail">
          <Image
            src="http://img.mwc.com.vn/giay-thoi-trang?&w=600&h=600&FileInput=//Upload/2019/12/78874550-2479055065537475-3630930008752521216-n.jpg"
            width={"100%"}
            height={250}
          />
          <StyledTypography className={styles.product__title}>
            Giày sandal nữ MWC
          </StyledTypography>
          <StyledTypography className={styles.product__brand}>
            NUSD- 2746
          </StyledTypography>
          <StyledTypography className={styles.product__price}>
            135,000
          </StyledTypography>
        </Link>
        {/* <StyledButton
          onClick={() => this.addToCart()}
          fullWidth
          variant="contained"
        >
          Thêm vào giỏ hàng
        </StyledButton> */}
      </>
    );
  }
}
