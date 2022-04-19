import type { NextPage } from 'next';
import { MainPage } from 'src/containers';
import { InformationPage } from 'src/containers/InformationPage/InformationPage';

const Home: NextPage = () => {
  //로직
  return (
    <>
      <MainPage />
    </>
  );
};

export default Home;
