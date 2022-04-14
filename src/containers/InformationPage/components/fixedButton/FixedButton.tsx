import React from 'react';
import { TypoGraphy } from 'src/components';
import { customColor } from 'src/constants';
import * as S from './FixedButton.style';

export function FixedButton() {
  return (
    <S.Wrapper>
      <TypoGraphy type="h3" color={customColor.darkBrown} fontWeight="bold">
        <S.BasicKnow>
          기본상식
          <br />
          TIP
        </S.BasicKnow>
      </TypoGraphy>
      <TypoGraphy type="body1" color={customColor.white} fontWeight="bold">
        <S.TopButton>TOP</S.TopButton>
      </TypoGraphy>
    </S.Wrapper>
  );
}
