import { NextPage } from 'next';
import React from 'react';
import { Category } from './components';
import { FixedButton, Notice, PhotoCardList, Search } from 'src/components';
import styled from 'styled-components';
export const InformationPage: NextPage = () => {
  return (
    <Container>
      <Search />
      <Notice />
      <FixedButton />
      <Category category="여행" pathName='/travel'>
        <PhotoCardList type="MainPage" />
      </Category>
      <Category category="음식점" pathName='/shop'>
        <PhotoCardList type="MainPage" />
      </Category>
      <Category category="숙소" pathName='/hotel'>
        <PhotoCardList type="MainPage" />
      </Category>
      <Category category="기타" pathName='/other'>
        <PhotoCardList type="MainPage" />
      </Category>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 200px;
  overflow-x: hidden;
`;