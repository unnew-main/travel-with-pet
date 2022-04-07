import type { AppProps } from "next/app";
import "styles/global.css";
import { LayoutContainer } from "src/components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutContainer>
      <Component {...pageProps} />
    </LayoutContainer>
  );
}

export default MyApp;
