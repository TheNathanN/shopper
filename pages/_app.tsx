import "../styles/globals.scss";
import AppState from "../context/app-state";

function MyApp({ Component, pageProps }: any) {
  return (
    <AppState>
      <Component {...pageProps} />
    </AppState>
  );
}

export default MyApp;
