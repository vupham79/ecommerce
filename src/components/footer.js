import React, { Component } from "react";
import { Link } from "@material-ui/core";
import { description, title } from "../../constant/constant";
import styles from "./index.module.css";
import { StyledTypography } from "./styledComponents";

function Copyright() {
  return (
    <StyledTypography
      className={styles.V1}
      variant="body2"
      color="textSecondary"
      align="center"
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        {title}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </StyledTypography>
  );
}

export default class footer extends Component {
  render() {
    return (
      <div className={styles.footer_container}>
        <StyledTypography
          className={styles.V1}
          variant="h5"
          align="center"
          gutterBottom
        >
          {title}
        </StyledTypography>
        <StyledTypography
          className={styles.V1}
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {description}
        </StyledTypography>
        <Copyright />
      </div>
    );
  }
}
