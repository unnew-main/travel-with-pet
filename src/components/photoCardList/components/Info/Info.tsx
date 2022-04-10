import React from 'react';
import * as S from './Info.style';
import { TypoGraphy } from 'src/components';
import { customColor } from 'src/constants';
import { FaHeart } from 'react-icons/fa';

type Props = {
  Area: string;
  Like: number;
  Text: string;
  Writer: string;
  Date: string;
};
export function Info({ Area, Like, Text, Writer, Date }: Props) {
  return (
    <>
      <S.ItemWrapper>
        <TypoGraphy fontWeight="bold" color={customColor.darkBrown} type="h3">
          {Area}
        </TypoGraphy>
        <S.LikeWrapper>
          <S.HeartWrapper>
            <FaHeart color="red" />
          </S.HeartWrapper>
          <TypoGraphy fontWeight="bold" type="body2">
            {Like}
          </TypoGraphy>
        </S.LikeWrapper>
      </S.ItemWrapper>
      <S.ContentWrapper>
        <TypoGraphy fontWeight="bold" fontHeight="1.2" type="body1">
          {Text}
        </TypoGraphy>
      </S.ContentWrapper>
      <S.ItemWrapper>
        <TypoGraphy fontWeight="bold" color={customColor.gray} type="body3">
          {Writer}
        </TypoGraphy>
        <TypoGraphy fontWeight="bold" color={customColor.gray} type="body3">
          {Date}
        </TypoGraphy>
      </S.ItemWrapper>
    </>
  );
}
