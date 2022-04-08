import type { NextPage } from 'next';
import { MainPageTest } from 'src/containers/MainPage/MainPageTest';
import { MainPage } from '../src/containers';

const Home: NextPage = () => {
  //로직
  return (
    <>
      {/* <MainPage /> */}
      <MainPageTest />
    </>
  );
};

export default Home;
