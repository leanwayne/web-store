import { NextPage } from "next";
import Slider from "../../components/slider";
import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core";
import BlockTitle from "../../components/block-title";
import BlockButtons from "../../components/block-buttons";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  })
);
//cambiar BLOCK por SECTION!!!
const HomePage: NextPage = () => {
  const classes = useStyles();
  return (
    <div>
      <Slider />
      <BlockTitle title='OUR PROGRAMS'/>
      <BlockButtons/>
      
    </div>
  );
};

export default HomePage;
