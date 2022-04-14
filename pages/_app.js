import { useEffect } from "react";
import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo_client";
import { RecoilRoot, useRecoilSnapshot } from "recoil";

import MainLayout from "../layouts/mainLayout/mainLayout.component";

function DebugObserver() {
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    console.debug("The following atoms were modified:");
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      console.debug(node.key, snapshot.getLoadable(node));
    }
  }, [snapshot]);

  return null;
}

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <DebugObserver />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </RecoilRoot>
    </ApolloProvider>
  );
}

export default MyApp;
