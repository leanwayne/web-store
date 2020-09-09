import React, { ReactNode } from "react";
import Head from "next/head";
import Menu from "./menu";
import {createStyles, Theme, makeStyles, ThemeProvider} from "@material-ui/core/styles";
import {layoutTheme} from "../utils/theme-layout";
import {CssBaseline} from "@material-ui/core";
import {theme} from "../utils/theme";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '@media screen': {
                display: 'flex',
            },
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
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <ThemeProvider theme={layoutTheme}>
                    <Menu />
                </ThemeProvider>
                <main className={classes.main}>
                    <div>
                        {children}
                    </div>
                </main>
            </ThemeProvider>
        </div>
    );
};

export default Layout;
