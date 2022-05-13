import React from 'react';
import { customColor } from 'src/constants';
import styled from 'styled-components';
// import { FaHeart } from 'react-icons/fa';
import { TypoGraphy } from 'src/components';
const rightHeader = ['사진', '댓글 수', '작성자', '작성일'];

export default function ListHeader() {
  return (
    <Container>
      <LeftHeaderWrapper>
        <HeartWrapper>
          {/* <FaHeart color="red" fontSize={20} /> */}
          <TypoGraphy type="h3" color={customColor.white}>
            No.
          </TypoGraphy>
        </HeartWrapper>
        <TypoGraphy type="h3" fontWeight="bold" color={customColor.white}>
          제목
        </TypoGraphy>
      </LeftHeaderWrapper>
      <RightHeaderWrapper>
        {rightHeader.map((data, index) => (
          <TextWrapper key={index}>
            <TypoGraphy type="h3" fontWeight="bold" color={customColor.white}>
              {data}
            </TypoGraphy>
          </TextWrapper>
        ))}
      </RightHeaderWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1178px;
  height: 60px;
  background-color: ${customColor.brownLight};
`;

const HeartWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 20%;
  width: 80px;
  margin-right: 20px;
`;

const LeftHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

const RightHeaderWrapper = styled.div`
  display: flex;
  width: 50%;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 140px;
  div {
    text-align: center;
  }
`;
