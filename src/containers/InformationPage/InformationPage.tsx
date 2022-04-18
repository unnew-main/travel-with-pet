import { NextPage } from 'next';
import React from 'react';
import { FixedButton, Search, Notice, Category } from './components';
import { PhotoCardList } from 'src/components';
import styled from 'styled-components';
export const InformationPage: NextPage = () => {
  return (
    <Container>
      <Search />
      <Notice />
      <FixedButton />
      <Category category="여행">
        <PhotoCardList type="MainPage" />
      </Category>
      <Category category="음식점">
        <PhotoCardList type="MainPage" />
      </Category>
      <Category category="숙소">
        <PhotoCardList type="MainPage" />
      </Category>
      <Category category="기타">
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
`;