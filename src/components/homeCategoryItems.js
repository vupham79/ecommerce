import React, { Component } from "react";
import ProductCard from "./productCard";
import { Grid } from "@material-ui/core";
import styles from "./index.module.css";
import Gallery from "react-image-gallery";
import Media from "react-media";

export default class homeCategoryItems extends Component {
  render() {
    const items = [
      {
        renderItem: () => <ProductCard />
      },
      {
        renderItem: () => <ProductCard />
      },
      {
        renderItem: () => <ProductCard />
      },
      {
        renderItem: () => <ProductCard />
      }
    ];
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
              <Gallery
                items={items}
                showFullscreenButton={false}
                showPlayButton={false}
                showThumbnails={false}
              />
            )}
            {(matches.medium || matches.large) && (
              <Grid container spacing={2} className={styles.padding}>
                {[1, 1, 1, 1].map((item, index) => (
                  <Grid item md={3} sm={6} xs={12} key={index}>
                    <ProductCard />
                  </Grid>
                ))}
              </Grid>
            )}
          </>
        )}
      </Media>
    );
  }
}
