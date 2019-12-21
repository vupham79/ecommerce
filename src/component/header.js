import React, { Component } from "react";
import {
  Grid,
  InputAdornment,
  Toolbar,
  Button,
  TextField,
  withStyles,
  Container
} from "@material-ui/core";
import Link from "./link";
import { StyledTypography } from "./styledComponents";
import { Search } from "@material-ui/icons";
import { sections, title } from "../constant/constant";
import styles from "./index.module.css";
import PersonIcon from "@material-ui/icons/Person";

const CssTextField = withStyles({
  root: {
    "& .MuiInput-underline:after": {
      borderBottomColor: "black"
    },
    "& .MuiInputBase-root": {
      fontFamily: "V1"
    }
  }
})(TextField);

export default class Header extends Component {
  render() {
    return (
      <>
        <Toolbar className={styles.toolbar}>
          <Container>
            <Grid container justify={"space-between"}>
              <Grid item container lg={6} xs={12} spacing={4}>
                <Grid item>
                  <StyledTypography
                    variant="h3"
                    color="inherit"
                    align="center"
                    noWrap
                  >
                    {title}
                  </StyledTypography>
                </Grid>
                <Grid item className={styles.flex_center}>
                  <CssTextField
                    placeholder="Tìm kiếm..."
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Search />
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
              </Grid>
              <Grid item className={styles.flex_center}>
                <Button variant="outlined">
                  <PersonIcon />
                  Đăng nhập
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
        <Toolbar className={styles.toolbar} component="nav" variant="dense">
          <Container>
            <Grid container justify="center" spacing={2}>
              {sections.map(section => (
                <Grid item key={section.title}>
                  <Link to={section.url}>{section.title}</Link>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Toolbar>
      </>
    );
  }
}
