import type { AppProps } from 'next/app';
import 'styles/global.css';
import { LayoutContainer } from 'src/components';
import { Header } from 'src/components/header/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutContainer>
      <Header />
      <Component {...pageProps} />
    </LayoutContainer>
  );
}

export default MyApp;
