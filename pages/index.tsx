import type { NextPage } from 'next';
import * as S from '../styles/index.style';

const Home: NextPage = () => {
  return (
    <S.Container>
      <S.Test>hello</S.Test>
      <S.Test2>Test2</S.Test2>
    </S.Container>
  );
};

export default Home;
