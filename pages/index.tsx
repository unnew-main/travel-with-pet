import type { NextPage } from 'next';
import { MainPage } from 'src/containers';
import { InformationPage } from 'src/containers/InformationPage/InformationPage';
// import { MainPage } from '../src/containers';

const Home: NextPage = () => {
  //로직
  return (
    <>
      {/* <MainPage /> */}
      <InformationPage />
    </>
  );
};

export default Home;
