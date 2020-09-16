import { NextPage } from "next";
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
    root: {
      height: "225px",
      backgroundColor: "#20232a",
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
    },
    divider: {
      width: "100%",
      height: "5px",
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      backgroundColor: "#fd3c3d",
    },
  })
);

type BlockTitleProps = {
  title: string,
  subTitle?: string,
}

export default function BlockTitle(props: BlockTitleProps) {
  const classes = useStyles();
  return (
      /*este className se tiene que llamar root*/
    <div className={classes.root}>
      <Typography variant="h4">
        {props.title}
        <br />
        <Divider className={classes.divider} />
      </Typography>
    </div>
  );
};


