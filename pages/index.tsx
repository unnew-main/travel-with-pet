import type { NextPage } from 'next';
import { PhotoCardTest } from 'src/containers/PhotoCardTest/PhotoCardTest';
import { MainPage } from '../src/containers';

const Home: NextPage = () => {
  //로직
  return (
    <>
      {/* <MainPage /> */}
      <PhotoCardTest/>
    </>
  );
};

export default Home;
