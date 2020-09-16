import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
  },
  divider: {
    width: "100%",
    height: "5px",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#fd3c3d",
  },
});

type CardProgramProps = {
  image: string,
  title?: string,
  contentTitle: string,
  contentText: string
  
}


export default function CardProgram(props:CardProgramProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={props.image}
          title={props.title}
        />
        <Divider className={classes.divider} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            color="textSecondary"
          >
            {props.contentTitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.contentText}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
