import React, { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Carousel from "react-bootstrap/Carousel";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
  })
);

const image: ImageSlide[] = [
  {
    image:
      "https://i0.wp.com/www.hisour.com/wp-content/uploads/2018/07/Asian-art.jpg?fit=960%2C640&ssl=1",
    caption: "First slide label",
  },
  {
    image:
      "https://budas.online/wp-content/uploads/2019/02/buda-simbolismo.jpg",
    caption: "Second slide label",
  },
  {
    image:
      "https://2.bp.blogspot.com/-d1-zQuFhFbE/Tv6bhaRnPHI/AAAAAAAAB8s/eNv-sevzHV8/s1600/Tigre.jpg",
    caption: "Third slide label",
  },
];
type ImageSlide = {
  image: string;
  caption: string;
}

export default function Slider() {
  const classes = useStyles();

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex:number) => {
    setIndex(selectedIndex);
  };



  return (
    <div className={classes.root}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            src="https://farm3.staticflickr.com/2761/4026163453_b499731864_b.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>






        <Carousel.Item>
          <img
            src="https://farm3.staticflickr.com/2761/4026163453_b499731864_b.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  );
}
