import React from 'react';
import { TypoGraphy, Seo } from 'src/components';
import { customColor } from 'src/constants/customColor';
import styled from 'styled-components';

export const IntroMainPage = () => {
  return (
    <Wrapper>
      {/* 예시 */}
      <Content>
        <ImageWrapper>
          <Img />
        </ImageWrapper>
        <TextWrapper>
          <TypoGraphy>지루해하는 강아지를 위해 여행을 가고 싶거나</TypoGraphy>
        </TextWrapper>
      </Content>
      {/* 예시 끝 */}
      <Content>
        <TextWrapper>
          <TypoGraphy>색다른 곳에서 산책하고 싶거나</TypoGraphy>
        </TextWrapper>
        <ImageWrapper></ImageWrapper>
      </Content>
      <Content>
        <ImageWrapper></ImageWrapper>
        <TextWrapper>
          <TypoGraphy>강아지와 함께 앉아 맛있는 식사를 하고 싶거나</TypoGraphy>
        </TextWrapper>
      </Content>
      <Content>
        <TextWrapper>
          <TypoGraphy>강아지 관련 여러 정보를 공유하고 싶으시다면</TypoGraphy>
        </TextWrapper>
        <ImageWrapper></ImageWrapper>
      </Content>
      {/* 이곳으로 오세요 */}
      <TypoGraphy>이곳으로 오세요</TypoGraphy>
      <TypoGraphy>애견인들을 위한 강아지 커뮤니티</TypoGraphy>
      <TypoGraphy>meongmeong</TypoGraphy>
      <TypoGraphy>화살표</TypoGraphy>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 1080px;
  margin: 200px 0;
`;

const TextWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ImageWrapper = styled.div`
  flex: 1;
`;

const Img = styled.div`
  background-color: wheat;
  width: 600px;
  height: 500px;
`;
