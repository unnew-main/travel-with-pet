import type { NextPage } from 'next';
import * as S from './MainPage.style';
import { MainComponents } from './components/MainComponents';
import { Introduce, MyComments, MyLikes, MyPosts } from 'src/containers/mypage';
import { PhotoCardList } from 'src/components';

export const MainPage: NextPage = () => {
  return (
    <>
      <Introduce />
      <MyPosts />
      <MyComments />
      <MyLikes />
    </>
  );
};
