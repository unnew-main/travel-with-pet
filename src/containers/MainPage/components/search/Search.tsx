import React from 'react';
import Image from 'next/image';
import { TypoGraphy } from 'src/components';
import { customColor } from 'src/constants';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import MainPageSearchBG from 'src/assets/image/MainPageSearchBG.jpg';
import { Recommend } from './components/Recommend';
import * as S from './Search.style';

const RecommendTag = [
  '#서울',
  '#인천',
  '#강아지 간식',
  '#훈련 방법',
  '#강아지 영양제',
];
export const Search = () => {
  return (
    <S.Container>
      <Image
        src={MainPageSearchBG}
        layout="fill"
        objectFit="fill"
        alt="background"
        objectPosition="absolute"
      />
      <S.ImageGrayFilter />
      <S.SearchWrapper>
        <S.Input />
        <S.IconWrapper>
          <AiOutlineSearch fontSize={40} />
          <AiOutlineClose fontSize={40} />
        </S.IconWrapper>
        <S.RecommendWrapper>
          <TypoGraphy type="h3" color={customColor.white} fontWeight="bold">
            #추천태그
          </TypoGraphy>
          {RecommendTag.map((tag, index) => (
            <Recommend key={index}>{tag}</Recommend>
          ))}
        </S.RecommendWrapper>
      </S.SearchWrapper>
    </S.Container>
  );
};