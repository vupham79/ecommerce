import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import { Container } from "@material-ui/core";
import Link from "../../components/customer/link";
import { StyledTypographyBold as Typography } from "../../components/customer/styledComponents";
import CategoryItems from "../../components/customer/homeCategoryItems";
import styles from "./home.module.css";
export default class Home extends Component {
  render() {
    const banner = [
      {
        original: "https://vinagiay.vn/uploads/slides/slides_1576574572.png",
        thumbnail: "https://vinagiay.vn/uploads/slides/slides_1576574572.png"
      },
      {
        original: "https://vinagiay.vn/uploads/slides/slides_1576890282.png",
        thumbnail: "https://vinagiay.vn/uploads/slides/slides_1576890282.png"
      },
      {
        original: "https://vinagiay.vn/uploads/slides/slides_1574132209.png",
        thumbnail: "https://vinagiay.vn/uploads/slides/slides_1574132209.png"
      }
    ];
    return (
      <>
        <ImageGallery
          items={banner}
          infinite
          showFullscreenButton={false}
          showPlayButton={false}
          showThumbnails={false}
          autoPlay
        />
        <Container className={styles.padding}>
          <Typography variant={"h4"} align={"center"}>
            <Link to="/products">HÀNG MỚI VỀ</Link>
          </Typography>
          <CategoryItems />
          <Typography variant={"h4"} align={"center"}>
            <Link to="/products">BÁN CHẠY NHẤT</Link>
          </Typography>
          <CategoryItems />
        </Container>
      </>
    );
  }
}
