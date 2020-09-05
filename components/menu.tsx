import React, { Props } from "react";
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    drawer: {
      flexShrink: 0,
    },
  })
);

type MenuProps = {
  drawerWidth: number;
};

export default function Menu({ drawerWidth }: MenuProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {console.log(drawerWidth)}
      <Drawer
        style={{ width: drawerWidth }}
        className={classes.drawer}
        variant="permanent"
        anchor="left"
      >
        <List>
          <Link href="/home">
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Inicio" />
            </ListItem>
          </Link>
          <Link href="/search">
            <ListItem button>
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText primary="Buscar" />
            </ListItem>
          </Link>
          <ListItem button>
            <ListItemIcon>
              <AddShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Mis compras" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary="Favoritos" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Mi cuenta" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
