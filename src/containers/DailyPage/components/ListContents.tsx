import React from 'react'
import { TypoGraphy } from 'src/components';
import styled from 'styled-components';

export default function ListContents() {
  return (
    <Container>
      <ListWrapper>
        <LeftWrapper>
          <LikeWrapper>
            <TypoGraphy type="body1" fontWeight="bold">
              32
            </TypoGraphy>
          </LikeWrapper>
          <TitleWrapper>
            <TypoGraphy type="body1" fontWeight="bold">
              제목 아무거나 뭐시기 테스트
            </TypoGraphy>
            <TypoGraphy type="body1" fontWeight="bold">
              태그 테스트
            </TypoGraphy>
          </TitleWrapper>
        </LeftWrapper>
        <RightWrapper>
          <TextWrapper>
            <TypoGraphy type="body1" fontWeight="bold">
              ㅁ
            </TypoGraphy>
          </TextWrapper>
          <TextWrapper>
            <TypoGraphy type="body1" fontWeight="bold">
              ㅇ
            </TypoGraphy>
          </TextWrapper>
          <TextWrapper>
            <TypoGraphy type="body1" fontWeight="bold">
              김가나다
            </TypoGraphy>
          </TextWrapper>
          <TextWrapper>
            <TypoGraphy type="body1" fontWeight="bold">
              2020-20-20
            </TypoGraphy>
          </TextWrapper>
        </RightWrapper>
      </ListWrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 60px;
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RightWrapper = styled.div`
  display: flex;
`;

const TextWrapper = styled.div`
  width: 140px;
  display: flex;
  justify-content: center;
`;
const LikeWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 80px;
  margin-right: 20px;
`;