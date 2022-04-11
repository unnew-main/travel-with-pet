import React from 'react';
import { customColor } from 'src/constants';
import { BsMegaphone } from 'react-icons/bs';
import * as S from './Notice.style';
import { TypoGraphy } from 'src/components';

export const Notice = () => {
  return (
    <S.Container>
      <S.NoticeWrapper>
        <S.IconWrapper>
          <BsMegaphone fontSize={30} />
        </S.IconWrapper>
        <TypoGraphy type="h3" color={customColor.Brown} fontWeight="bold">
          공지 : 타인에게 상처주는 말은 삼가해주세요. 모두가 누군가의 소중한
          ‘주인’ 이자 ‘가족’ 입니다.
        </TypoGraphy>
      </S.NoticeWrapper>
      <S.Line />
    </S.Container>
  );
};
