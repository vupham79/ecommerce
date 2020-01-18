import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import FilterGroup from "./filterGroup";
import { StyledTypography } from "./styledComponents";
import styles from "./index.module.css";
import { filter_category } from "../../constant/constant";

export default class categoryNav extends Component {
  render() {
    return (
      <>
        <Grid item container justify={"space-between"}>
          <Grid item>
            <StyledTypography
              className={styles.filter__title}
              variant="h6"
              color="inherit"
              align="center"
              noWrap
            >
              Lọc sản phẩm
            </StyledTypography>
          </Grid>
          <Grid item>
            <StyledTypography
              className={styles.linkBtn}
              variant="button"
              onClick={() => {
                console.log("Hello");
              }}
              color="inherit"
              align="center"
              noWrap
            >
              Xoá lọc
            </StyledTypography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={"column"}
          className={styles.filter__groups}
        >
          {filter_category.map(category => (
            <Grid item key={category.title}>
              <FilterGroup data={category} />
            </Grid>
          ))}
        </Grid>
      </>
    );
  }
}
