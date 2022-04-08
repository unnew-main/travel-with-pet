import React from 'react';
import * as S from './Tag.style';
import { TypoGraphy } from 'src/components';
type Props = {
  Tags?: string[];
};
export function Tag({ Tags }: Props) {
  return (
    <S.TagWrapper>
      {Tags?.map((tag, index) => (
        <TypoGraphy type="body2" key={index}>
          <S.Tag>{tag}</S.Tag>
        </TypoGraphy>
      ))}
    </S.TagWrapper>
  );
}
