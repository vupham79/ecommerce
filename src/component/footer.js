import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { description, title } from "../constant/layout";
import styles from "./index.module.css";
function Copyright() {
  return (
    <Typography
      className={styles.V1}
      variant="body2"
      color="textSecondary"
      align="center"
    >
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default class footer extends Component {
  render() {
    return (
      <Container maxWidth="lg">
        <Typography
          className={styles.V1}
          variant="h5"
          align="center"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          className={styles.V1}
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    );
  }
}
