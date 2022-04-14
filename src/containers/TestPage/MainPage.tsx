import type { NextPage } from 'next';
import * as S from './MainPage.style';
import { MainComponents } from './components/MainComponents';
<<<<<<< HEAD
import { Introduce, MyComments, MyLikes } from 'src/components/myInfo';

export const MainPage: NextPage = () => {
  return (
    // <S.Container>
    //   <S.Test>hello</S.Test>
    //   <S.Test2>Test2</S.Test2>
    //   <Introduce />
    //   <MainComponents />
    // </S.Container>
    <>
      <Introduce />
      <MyComments />
      <MyLikes />
=======
import { PhotoCardList } from 'src/components';

export const MainPage: NextPage = () => {
  return (
    <>
>>>>>>> 14d6c2efa6aa44f10e2d9a832e971509a6620fa4
    </>
  );
};
