import "../styles/globals.scss";
import React from "react";
import { AppPropsWithLayout } from "../models/layout";
import { Provider } from "react-redux";
import persistor, { store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import 'antd/dist/antd.css'

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "sweetalert2/src/sweetalert2.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ClientLayout } from "../layouts";

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <ClientLayout>{page}</ClientLayout>);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {getLayout(
          <>
            <Component {...pageProps} />
            <ToastContainer />
          </>
        )}
      </PersistGate>
    </Provider>
  );
}
