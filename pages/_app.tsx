import { AppProps } from "next/dist/next-server/lib/router/router";
import Layout from "../components/layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect} from "react";

const App = ({ Component, pageProps, err }: AppProps) => {

    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentElement) jssStyles.parentElement.removeChild(jssStyles);
    }, []);

    const modifierPageProps = { ...pageProps, err };

    return (
        <Layout>
            <Component {...modifierPageProps} />
        </Layout>
    );
};
export default App;
