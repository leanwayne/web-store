import React, { ReactNode } from "react";
import Head from "next/head";
import Menu from "./menu";
import {createStyles, Theme, makeStyles, ThemeProvider} from "@material-ui/core/styles";
import {layoutTheme} from "../utils/theme-layout";
import {CssBaseline} from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '@media screen': {
                display: 'flex',
            },
        },
        drawerSpacing: {
            ...theme.mixins.toolbar,
        },
        main: {
            flexGrow: 1,
            width: '100%',
            padding: theme.spacing(2),
            overflowX: 'auto',
        },
    })
);

type Props = {
    children?: ReactNode;
    title?: string;
};

const Layout = ({ children, title = "Web Store" }: Props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            {/*<ThemeProvider theme={theme}>*/}
                <CssBaseline />
                <ThemeProvider theme={layoutTheme}>
                    <Menu drawerWidth={drawerWidth} />
                </ThemeProvider>
                <main className={classes.main}>
                    <div style={{paddingLeft: drawerWidth + 20, paddingTop: 20}}>
                        {children}
                    </div>
                </main>
            {/*</ThemeProvider>*/}
        </div>
    );
};

export default Layout;
