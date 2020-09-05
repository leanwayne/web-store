import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Menu from "./menu";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerSpacing: {
      paddingLeft: `${drawerWidth}px !important`,
    },
  })
);

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Menu drawerWidth={drawerWidth} />
      <main>
        <div className={classes.drawerSpacing}>
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
