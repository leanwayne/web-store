import { AppProps } from "next/dist/next-server/lib/router/router";
import Layout from "../components/layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

const App = ({ Component, pageProps, err }: AppProps) => {
    const modifierPageProps = { ...pageProps, err };

    return (
        <Layout>
            <Component {...modifierPageProps} />
        </Layout>
    );
};
export default App;
