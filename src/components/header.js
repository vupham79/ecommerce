import React, { Component } from "react";
import {
  Grid,
  InputAdornment,
  Toolbar,
  Button,
  IconButton,
  Badge,
  AppBar,
  Container
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import Link from "./link";
import { StyledTypography, StyledTextField } from "./styledComponents";
import { Search, Menu } from "@material-ui/icons";
import { sections, title } from "../../constant/constant";
import styles from "./index.module.css";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingCartIcon from "@material-ui/icons/ShoppingBasketOutlined";
import Media from "react-media";
class Header extends Component {
  render() {
    const { history } = this.props;
    return (
      <Media
        queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}
      >
        {matches => (
          <>
            {matches.small && (
              <AppBar position="sticky" color={"inherit"}>
                <Toolbar>
                  <Grid container justify={"space-between"}>
                    <Grid item>
                      <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                      >
                        <Menu />
                      </IconButton>
                    </Grid>
                    <Grid item className={styles.flex_center}>
                      <StyledTypography
                        onClick={() => history.push("/")}
                        variant="h5"
                        color="inherit"
                        align="center"
                        noWrap
                      >
                        {title}
                      </StyledTypography>
                    </Grid>
                    <Grid item>
                      <IconButton
                        onClick={() => history.push("/cart")}
                        aria-label="cart"
                      >
                        <Badge badgeContent={4} color="secondary">
                          <ShoppingCartIcon />
                        </Badge>
                      </IconButton>
                    </Grid>
                  </Grid>
                </Toolbar>
              </AppBar>
            )}
            {(matches.medium || matches.large) && (
              <>
                <Toolbar className={styles.toolbar}>
                  <Container>
                    <Grid container justify={"space-between"}>
                      <Grid item container lg={6} xs={12} spacing={4}>
                        <Grid item>
                          <StyledTypography
                            onClick={() => history.push("/")}
                            variant="h3"
                            color="inherit"
                            align="center"
                            noWrap
                          >
                            {title}
                          </StyledTypography>
                        </Grid>
                        <Grid item className={styles.flex_center}>
                          <StyledTextField
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
                      <Grid
                        item
                        container
                        lg={6}
                        xs={12}
                        spacing={2}
                        justify={"flex-end"}
                        className={styles.flex_center}
                      >
                        <Grid item>
                          <Button
                            variant="outlined"
                            onClick={() => history.push("/login")}
                          >
                            <PersonIcon />
                            Đăng nhập
                          </Button>
                        </Grid>
                        <Grid item>
                          <IconButton
                            onClick={() => history.push("/cart")}
                            aria-label="cart"
                          >
                            <Badge badgeContent={4} color="secondary">
                              <ShoppingCartIcon />
                            </Badge>
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Container>
                </Toolbar>
                <Toolbar
                  className={styles.toolbar}
                  component="nav"
                  variant="dense"
                >
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
            )}
          </>
        )}
      </Media>
    );
  }
}

export default withRouter(Header);
