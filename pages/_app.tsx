import type { AppProps } from 'next/app';
import 'styles/global.css';
import { LayoutContainer } from 'src/components';
import { Header } from 'src/components/header/Header';
import { Footer } from 'src/components/footer/Footer';
import { MyPage } from 'src/containers/mypage/MyPage';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutContainer>
      <Header />
      {/* <Component {...pageProps} /> */}
      <MyPage />
      <Footer />
    </LayoutContainer>
  );
}

export default MyApp;
