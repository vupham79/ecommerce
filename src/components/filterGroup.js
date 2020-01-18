import React, { Component } from "react";
import {
  ListItem,
  ListItemText,
  Collapse,
  List,
  FormControlLabel,
  Checkbox,
  withStyles
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import styles from "./index.module.css";
import { connect } from "react-redux";

const StyledListItemText = withStyles({
  primary: {
    textTransform: "uppercase",
    // fontWeight: "700 !important",
    textOverflow: "ellipsis",
    paddingBottom: "2px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    fontFamily: "V1"
  }
})(ListItemText);

class filterGroup extends Component {
  state = {
    open: true
  };

  setOpen = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  render() {
    const {
      data: { title, values },
      categories
    } = this.props;
    return (
      <>
        <ListItem
          className={styles.filter__group}
          button
          onClick={this.setOpen}
        >
          <StyledListItemText
            primary={title}
            className={styles.filter__title}
          />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open}>
          <List component="div" disablePadding>
            {values.map(item => (
              <ListItem key={item}>
                <FormControlLabel control={<Checkbox />} label={item} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.Category.categories
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(filterGroup);
