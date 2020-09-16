import React from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  Typography,
  Divider,
  Grid,
} from "@material-ui/core";
import CardProgram from "./card-program";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "800px",
      backgroundColor: "#20232a",
      alignItems: "center",
      display: "flex",
    },
    container:{
      padding: theme.spacing(5)
    }


  })
);

export default function CardSection() {
  const classes = useStyles();
  return (
    /*este className se tiene que llamar root*/
    <div className={classes.root}>
      <Grid container={true} className={classes.container} spacing={5}>
        <Grid item={true} xs={12} sm={8}>
          <CardProgram 
            image='https://scontent.feze7-2.fna.fbcdn.net/v/t1.0-9/69695355_10219801597059619_7230775234649915392_o.jpg?_nc_cat=109&_nc_sid=84a396&_nc_ohc=DM7Il8GYvEkAX-_U2Be&_nc_ht=scontent.feze7-2.fna&oh=470abd498a45e718f7f337ff881d105e&oe=5F8605F0'
            title='coaching online'
            contentTitle='Online Coaching'
            contentText='An example of rendering multiple Chips from an array of values. Deleting a chip removes it from the array. Note that since no onClick property is defined, the Chip can be focused, but does not gain depth while clicked or touched.'
          
          />
        </Grid>
        <Grid item={true} xs={12} sm={4}>
          <CardProgram 
            image='https://scontent.feze7-2.fna.fbcdn.net/v/t1.0-9/69695355_10219801597059619_7230775234649915392_o.jpg?_nc_cat=109&_nc_sid=84a396&_nc_ohc=DM7Il8GYvEkAX-_U2Be&_nc_ht=scontent.feze7-2.fna&oh=470abd498a45e718f7f337ff881d105e&oe=5F8605F0'
            title='coaching online'
            contentTitle='Online Coaching'
            contentText='An example of rendering multiple Chips from an array of values. Deleting a chip removes it from the array. Note that since no onClick property is defined, the Chip can be focused, but does not gain depth while clicked or touched.'
          />
        </Grid>
      </Grid>
    </div>
  );
}
