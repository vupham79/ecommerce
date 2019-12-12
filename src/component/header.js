import React, { Component } from "react";
import { Grid, InputAdornment, TextField, withStyles } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { sections, title } from "../constant/layout";
import styles from "./index.module.css";

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
      <div className={styles.header}>
        <Toolbar className={styles.toolbar}>
          <Grid container justify={"space-between"}>
            <Grid item container lg={6} xs={10} spacing={4}>
              <Grid item>
                <Typography
                  className={styles.V1}
                  variant="h5"
                  color="inherit"
                  align="center"
                  noWrap
                >
                  {title}
                </Typography>
              </Grid>
              <Grid item>
                <CssTextField
                  placeholder="Search..."
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
            <Grid item>
              <Button variant="outlined" size="small">
                Sign up
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
        <Toolbar component="nav" variant="dense">
          <Grid container justify="center" spacing={4}>
            {sections.map(section => (
              <Grid item key={section.title}>
                <Link
                  color="inherit"
                  noWrap
                  key={section.title}
                  href={section.url}
                >
                  {section.title}
                </Link>
              </Grid>
            ))}
          </Grid>
        </Toolbar>
      </div>
    );
  }
}
