import React, { Component } from "react";
import { useScrollTrigger, Slide } from "@material-ui/core";

export default class hideOnScroll extends Component {
  render() {
    const { children, window } = this.props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
}
