import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  Home as HomeIcon,
  Search as SearchIcon,
  AddShoppingCart as AddShoppingCartIcon,
  Favorite as FavoriteIcon,
  AccountCircle as AccountCircleIcon,
} from "@material-ui/icons";
import Link from "next/link";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",   
    },
    grid:{
      height: '58px' 
    }
  })
);

type MenuProps = {};

export default function Menu({}: MenuProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer variant="permanent" anchor="top">
        <Grid container className={classes.grid}>
          <Link href="/home">
            <Button>Inicio</Button>
          </Link>
          <Link href="/search">
            <Button>Programs</Button>
          </Link>
          <Link href="/search">
            <Button>Mis compras</Button>
          </Link>
          <Link href="/search">
            <Button>Favoritos</Button>
          </Link>
          <Link href="/search">
            <Button>Mi cuenta</Button>
          </Link>
        </Grid>
      </Drawer>
    </div>
  );
}
