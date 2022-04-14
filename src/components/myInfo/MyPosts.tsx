import React from 'react';
import styled from 'styled-components';
import { TypoGraphy } from '../TypoGraphy';

export const MyPosts = () => {
  return (
    <>
      <div className="myPost">
        <TypoGraphy>내가 작성한 글</TypoGraphy>
        <TypoGraphy>정보</TypoGraphy>
        <TypoGraphy>모두의 이야기</TypoGraphy>
        <hr />
      </div>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
