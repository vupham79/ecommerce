import React, { Component } from "react";
import {
  Grid,
  ListItem,
  ListItemText,
  Collapse,
  List,
  withStyles,
  Container
} from "@material-ui/core";
import { StyledTypography } from "../../components/customer/styledComponents";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import CategoryNav from "../../components/customer/categoryNav";
import styles from "./product.module.css";
import ListProducts from "../../components/customer/listProduct";

const StyledCollapse = withStyles({
  container: {
    position: "absolute",
    background: "white",
    border: "1px solid black"
  }
})(Collapse);

const StyledListItem = withStyles({
  root: {
    background: "linear-gradient(black, black)",
    color: "white"
  }
})(ListItem);

export default class Product extends Component {
  state = {
    open: false
  };

  setOpen = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  render() {
    return (
      <Container>
        <Grid container>
          <Grid item md={3} xs={12} className={styles.leftNav}>
            <CategoryNav />
          </Grid>
          <Grid item container md={9} className={styles.rightNav}>
            <Grid item container justify={"space-between"}>
              <Grid item container spacing={2} md={6}>
                <Grid item>
                  <StyledTypography
                    className={styles.title}
                    variant="h3"
                    color="inherit"
                    align="center"
                    noWrap
                  >
                    MEN'S SHOES
                  </StyledTypography>
                </Grid>
                <Grid item>
                  <StyledTypography
                    variant="body2"
                    color="inherit"
                    align="center"
                    noWrap
                  >
                    Showing 1-60 of 4083
                  </StyledTypography>
                </Grid>
              </Grid>
              <Grid item container md={6} justify={"flex-end"}>
                <Grid item>
                  <StyledListItem button onClick={this.setOpen}>
                    <ListItemText primary="Sắp xếp: " />
                    {this.state.open ? <ExpandLess /> : <ExpandMore />}
                  </StyledListItem>
                  <StyledCollapse in={this.state.open}>
                    <List component="div" disablePadding>
                      <ListItem button>
                        <ListItemText primary="Mới nhất" />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary="Bán chạy nhất" />
                      </ListItem>
                    </List>
                  </StyledCollapse>
                </Grid>
              </Grid>
            </Grid>
            <Grid item container>
              <ListProducts />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
