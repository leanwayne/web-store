import React, { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Carousel from "react-bootstrap/Carousel";
import {Typography} from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: "flex",
      },
      image: {
          width: "100%",
          backgroundSize: "cover",
      }
    })
);

const images : ImageSlider[] = [
    {url: "https://www.myticket.de/files/K%C3%BCnstler/G/Global%20Masters/Live%202020/global_masters-myticket-banner-1251x510-xs.jpg" , caption: "First slide label"},
    {url: "https://www.gbittermannpro.com/wp-content/uploads/2019/05/photo-homev2.jpg" , caption: "Second slide label"},
    {url: "https://www.myticket.de/files/K%C3%BCnstler/G/Global%20Masters/Live%202020/global_masters-myticket-banner-1251x510-xs.jpg" , caption: "Third slide label"},
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
              <Carousel.Item key={index}  >
                <img src={image.url} alt={image.caption} className={classes.image}/>
                <Carousel.Caption>
                  <Typography>{image.caption}</Typography>
                </Carousel.Caption>
              </Carousel.Item>
          ))}
        </Carousel>
      </div>
  );
}
