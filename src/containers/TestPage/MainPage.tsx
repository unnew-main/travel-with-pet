import type { NextPage } from 'next';
import * as S from './MainPage.style';
import { MainComponents } from './components/MainComponents';
import { PhotoCardList } from 'src/components';

export const MainPage: NextPage = () => {
  return (
    <>
      <PhotoCardList type="MainPage" />
      <PhotoCardList type="MainPage" />
    </>
  );
};
