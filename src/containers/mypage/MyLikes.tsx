import React from 'react';
import styled from 'styled-components';
import { TypoGraphy } from '../../components/TypoGraphy';

export const MyLikes = () => {
  return (
    <>
      <div className="myPost">
        <TypoGraphy>내가 좋아요한 글</TypoGraphy>
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
