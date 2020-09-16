import { NextPage } from "next"
import { Grid, Card, makeStyles, Theme, createStyles } from "@material-ui/core"
import BlockTitle from "../../components/block-title";
import React from "react";
import CardSection from "../../components/card-section";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        '& > * + *':{
            marginTop: 20,
        }
    },
    card: {
        backgroundColor: 'red',
    }
  })
);

const SearchPage : NextPage = () => {

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Grid>
            <BlockTitle title='Training Programs'/>
            <CardSection/>
            </Grid>
        </div>
    )
}


export default SearchPage
