import React, { Component } from "react";
import { Container } from "@material-ui/core";
import styles from "./about.module.css";
import { StyledTypography } from "../../components/customer/styledComponents";
export default class about extends Component {
  render() {
    return (
      <Container className={styles.padding}>
        <StyledTypography variant={"h5"}>OVERVIEW</StyledTypography>
        <StyledTypography>
          CHARLESKEITH.COM Pte. Ltd is part of the CHARLES & KEITH group. This
          Privacy, Data Protection and Cookies Policy (“Policy”) explains how we
          use the information we collect from you when you use our website or
          mobile application (“Site”). This Policy also applies to information
          we receive from you through any social media platforms that we
          control.
        </StyledTypography>
        <StyledTypography>
          CHARLESKEITH.COM Pte. Ltd is responsible for your privacy when you use
          our Site.
        </StyledTypography>
        <StyledTypography>
          CHARLES & KEITH aims to be transparent about the information we
          collect about you, how it is used and whom it is shared with. We
          collect your information:
        </StyledTypography>
        <StyledTypography>to improve your user experience;</StyledTypography>
        <StyledTypography>under a secure environment;</StyledTypography>
        <StyledTypography>
          but you can decide what and how you want to hear from us; only when
          necessary.
        </StyledTypography>
      </Container>
    );
  }
}
