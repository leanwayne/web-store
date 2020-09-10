import { NextPage } from "next";
import React from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  Typography,
  ButtonBase,
} from "@material-ui/core";


// para este array tenes que definir un type, asi como está es un array de "any"
const images = [
  {
    url: "https://scontent.feze7-1.fna.fbcdn.net/v/t1.0-9/96825748_10222284173602481_1454861901698695168_o.jpg?_nc_cat=102&_nc_sid=730e14&_nc_ohc=Vl_qMDLiqusAX-gmLDB&_nc_ht=scontent.feze7-1.fna&oh=6271caf32f2fcce022b3e18d88e06ea7&oe=5F821DD3",
    title: "Online Coaching",
    width: "40%",
  },
  {
    url: "https://scontent.feze7-1.fna.fbcdn.net/v/t1.0-9/96825748_10222284173602481_1454861901698695168_o.jpg?_nc_cat=102&_nc_sid=730e14&_nc_ohc=Vl_qMDLiqusAX-gmLDB&_nc_ht=scontent.feze7-1.fna&oh=6271caf32f2fcce022b3e18d88e06ea7&oe=5F821DD3",
    title: "Fit Dragon Program",
    width: "30%",
  },
  {
    url: "https://scontent.feze7-1.fna.fbcdn.net/v/t1.0-9/96825748_10222284173602481_1454861901698695168_o.jpg?_nc_cat=102&_nc_sid=730e14&_nc_ohc=Vl_qMDLiqusAX-gmLDB&_nc_ht=scontent.feze7-1.fna&oh=6271caf32f2fcce022b3e18d88e06ea7&oe=5F821DD3",
    title: "One fir Program",
    width: "30%",
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      minWidth: 300,
      width: "100%",
    },
    block: {
      height: "225px", //numero magico
      backgroundColor: "#20232a",
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
    },
    //no se usa
    divider: {
      width: "261px",
      height: "5px",
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      backgroundColor: "#fd3c3d",
    },
    image: {
      position: "relative",
      height: 200, // mas numeros magicos
      [theme.breakpoints.down("xs")]: {
        width: "100% !important", // Overrides inline-style
        height: 100,
      },
      "&:hover, &$focusVisible": {
        zIndex: 1,
        "& $imageBackdrop": {
          opacity: 0.15,
        },
        "& $imageMarked": {
          opacity: 0,
        },
        "& $imageTitle": {
          border: "4px solid currentColor",
        },
      },
    },
    //esto está vacío
    focusVisible: {},
    imageButton: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: "cover",
      backgroundPosition: "center 40%",
    },
    imageBackdrop: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create("opacity"),
    },
    imageTitle: {
      position: "relative",
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
        theme.spacing(1) + 6
      }px`,
    },
    imageMarked: {
      height: 3,// muchos numeros magicos, esto no escala
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: "absolute",
      bottom: -2,
      left: "calc(50% - 9px)",
      transition: theme.transitions.create("opacity"),
    },
  })
);
//muchos estilos, yo sacaría todos y usar <Grid/>


const BlockButtons: NextPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.block}>
      {/*root siempre tiene que ser el estilo que tiene el padre del componente, dalo vuelta*/}
      <div className={classes.root}>
        {images.map((image) => (
          <ButtonBase
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            //no hacer salto de linea acá, esto puede ocupar una sola linea
            style={{
              width: image.width,
            }}
          >
            <span
              className={classes.imageSrc}
                //esto puede ocupar una sola linea
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        ))}
      </div>
    </div>
  );
};

export default BlockButtons;
