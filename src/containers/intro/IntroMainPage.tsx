import React, { useEffect } from 'react';
import { TypoGraphy, Seo } from 'src/components';
import { customColor } from 'src/constants/customColor';
import styled from 'styled-components';
import Image from 'next/image';
import pet1 from 'src/assets/image/pet1.jpg';
import pet2 from 'src/assets/image/pet2.jpg';
import pet3 from 'src/assets/image/pet3.jpg';
import pet4 from 'src/assets/image/pet4.jpg';
import { ImArrowRight2 } from 'react-icons/im';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const IntroMainPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Wrapper>
      <TitleContent>
        <TitleBox>
          <TypoGraphy fontWeight="bold" type="h2">
            애견인들을 위한 커뮤니티
          </TypoGraphy>
          <Title>meongmeong</Title>
        </TitleBox>
      </TitleContent>

      <Content>
        <ImageWrapper>
          <div data-aos="fade-right" data-aos-easing="ease-in-sine">
            <Image src={pet1} alt="강아지사진1" width="600" height="600" />
          </div>
        </ImageWrapper>
        <TextWrapper>
          <TypoGraphy type="h3" fontWeight="bold">
            지루해하는 강아지를 위해 여행을 가고 싶거나
          </TypoGraphy>
        </TextWrapper>
      </Content>

      <Content>
        <TextWrapper>
          <TypoGraphy type="h3" fontWeight="bold">
            색다른 곳에서 산책하고
          </TypoGraphy>
        </TextWrapper>
        <ImageWrapper>
          <div data-aos="fade-left" data-aos-easing="ease-in-sine">
            <Image src={pet2} alt="강아지사진2" width="600" height="600" />
          </div>
        </ImageWrapper>
      </Content>
      <Content>
        <ImageWrapper>
          <Image
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            src={pet3}
            alt="강아지사진3"
            width="600"
            height="600"
          />
        </ImageWrapper>
        <TextWrapper>
          <TypoGraphy type="h3" fontWeight="bold">
            강아지와 함께 앉아 맛있는 식사를 하고
          </TypoGraphy>
        </TextWrapper>
      </Content>
      <Content>
        <TextWrapper>
          <TypoGraphy type="h3" fontWeight="bold">
            강아지에 관련된 다양한 정보를 공유하고 싶으시다면
          </TypoGraphy>
        </TextWrapper>
        <ImageWrapper>
          <Image
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            src={pet4}
            alt="강아지사진4"
            width="600"
            height="600"
          />
        </ImageWrapper>
      </Content>
      <BottomContent>
        <TypoGraphy fontWeight="bold" type="Title">
          이곳으로 오세요
        </TypoGraphy>
        <Title>meongmeong</Title>
        <TypoGraphy>
          <AnimationArrow
            data-aos="fade-right"
            data-aos-offset="-500"
            data-aos-easing="ease-in-sine"
            data-aos-anchor-placement="bottom-center"
          >
            <ArrowBtn onClick={() => alert('로그인 로직임')} />
          </AnimationArrow>
        </TypoGraphy>
      </BottomContent>
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
  width: 1200px;
  margin: 200px 0;
`;
const TitleContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 1200px;
  margin: 50px 0;
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

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  color: white;
  text-shadow: 1px 0 4px ${customColor.brownDark},
    0 1px 4px ${customColor.brownDark}, -1px 0 4px ${customColor.brownDark},
    0 -1px 4px ${customColor.brownDark};
  font-size: 48px;
  font-weight: bold;
`;

const ArrowBtn = styled(ImArrowRight2)`
  font-size: 36px;
  margin: 120px 0 100px 0;
`;

const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  margin: 200px 0;
`;

const AnimationArrow = styled.div`
  cursor: pointer;
  &:hover {
    color: ${customColor.gray};
  }
`;
