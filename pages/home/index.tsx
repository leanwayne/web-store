import { NextPage } from "next";
import Slider from "../../components/slider";
import React from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  Typography,
  Divider,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    block: {
      height: "225px",
      backgroundColor: "#20232a",
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
    },
    divider: {
      width: "261px",
      height: "5px",
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      backgroundColor: "#fd3c3d",
    },
  })
);

const HomePage: NextPage = () => {
  const classes = useStyles();
  return (
    <div>
      <Slider />
      <div className={classes.block}>
        <Typography variant="h4">
          OUR PROGRAMS
          <br />
          <Divider className={classes.divider} />
        </Typography>
      </div>
    </div>
  );
};

export default HomePage;
