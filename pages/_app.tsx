import { AppProps } from "next/dist/next-server/lib/router/router";
import Layout from "../components/Layout";

const App = ({ Component, pageProps, err }: AppProps) => {
  const modifierPageProps = { ...pageProps, err };

  return (
    <Layout>
      <Component {...modifierPageProps} />
    </Layout>
  );
};
export default App;
