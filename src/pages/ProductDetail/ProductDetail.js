import React, { Component } from "react";
import { Grid, Container } from "@material-ui/core";
import {
  StyledTypography,
  StyledButton,
  StyledDarkButton
} from "../../components/customer/styledComponents";
import { detail_images } from "../../constant/constant";
import styles from "./product_detail.module.css";
import ImageGallery from "react-image-gallery";

export default class ProductDetail extends Component {
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
      <Container>
        <Grid container>
          <Grid item md={8} className={styles.leftNav}>
            <ImageGallery items={detail_images} showPlayButton={false} />
          </Grid>
          <Grid item md={4} xs={12} className={styles.rightNav}>
            <Grid
              item
              container
              alignItems={"flex-start"}
              spacing={2}
              direction={"column"}
            >
              <Grid item>
                <StyledTypography
                  className={styles.detail__title}
                  variant="h5"
                  color="inherit"
                  align="center"
                  noWrap
                >
                  SHANTI SANDAL
                </StyledTypography>
              </Grid>
              <Grid item container spacing={1}>
                <Grid item>
                  <StyledTypography
                    className={styles.detail__title}
                    variant="body1"
                    color="inherit"
                    align="center"
                    noWrap
                  >
                    Giá:
                  </StyledTypography>
                </Grid>
                <Grid item>
                  <StyledTypography
                    color="inherit"
                    variant={"body1"}
                    align="center"
                    noWrap
                  >
                    250,000đ
                  </StyledTypography>
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item>
                  <StyledTypography
                    className={styles.detail__title}
                    variant="body1"
                    color="inherit"
                    align="center"
                    noWrap
                  >
                    Màu:
                  </StyledTypography>
                </Grid>
                <Grid item container spacing={1}>
                  {["Trắng", "Đen"].map(color => (
                    <Grid item key={color}>
                      {this.state.color === color && (
                        <StyledDarkButton
                          onClick={() => this.setColor(color)}
                          variant="outlined"
                        >
                          {color}
                        </StyledDarkButton>
                      )}
                      {this.state.color !== color && (
                        <StyledButton
                          onClick={() => this.setColor(color)}
                          variant="outlined"
                        >
                          {color}
                        </StyledButton>
                      )}
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item>
                  <StyledTypography
                    className={styles.detail__title}
                    variant="body1"
                    color="inherit"
                    align="center"
                    noWrap
                  >
                    SIZE:
                  </StyledTypography>
                </Grid>
                <Grid item container spacing={1}>
                  {["36", "37", "38", "39"].map(size => (
                    <Grid item key={size}>
                      {this.state.size === size && (
                        <StyledDarkButton
                          onClick={() => this.setSize(size)}
                          variant="outlined"
                        >
                          {size}
                        </StyledDarkButton>
                      )}
                      {this.state.size !== size && (
                        <StyledButton
                          onClick={() => this.setSize(size)}
                          variant="outlined"
                        >
                          {size}
                        </StyledButton>
                      )}
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item container>
                <StyledDarkButton
                  onClick={() => this.addToCart()}
                  variant="outlined"
                  fullWidth
                >
                  Thêm Vào Giỏ Hàng
                </StyledDarkButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
