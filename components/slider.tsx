import React, { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Carousel from "react-bootstrap/Carousel";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: "flex",
      },
    })
);

const images : ImageSlider[] = [
    {url: "https://farm3.staticflickr.com/2761/4026163453_b499731864_b.jpg" , caption: "First slide label"},
    {url: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Nunchaku.JPG" , caption: "Second slide label"},
    {url: "https://mlm-s2-p.mlstatic.com/734269-MLM31220746184_062019-O.jpg" , caption: "Third slide label"},
]
type ImageSlider = {
  url: string,
  caption: string,
}

export default function Slider() {
  const classes = useStyles();

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
      <div className={classes.root}>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img src={image.url} alt={image.caption} />
                <Carousel.Caption>
                  <Typography>{image.caption}</Typography>
                </Carousel.Caption>
              </Carousel.Item>
          ))}
        </Carousel>
      </div>
  );
}
