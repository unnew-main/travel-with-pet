import { NextPage } from 'next';
import React from 'react';
import { FixedButton, Search, Notice, Category } from './components';
export const InformationPage: NextPage = () => {
  return (
    <>
      <Search />
      <Notice />
      <FixedButton />
      <Category category="여행">여행 포토카드 내용</Category>
      <Category category="음식점">음식점 포토카드 내용</Category>
      <Category category="숙소">숙소 포토카드 내용</Category>
      <Category category="기타">기타 포토카드 내용</Category>
    </>
  );
};
