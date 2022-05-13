import React from 'react';
import { TypoGraphy } from 'src/components';
import styled from 'styled-components';
import { customColor } from '../../../constants/customColor';
type Props = {
  Tags?: string[];
};
export function Tag({ Tags }: Props) {
  return (
    <TagContainer>
      {Tags?.map((tag, index) => (
        <TagWrapper key={index}>
          <TypoGraphy type="body3" color={customColor.brownDark}>{index < 5 ? tag : null}</TypoGraphy>
        </TagWrapper>
      ))}
    </TagContainer>
  );
}

const TagContainer = styled.div`
  display: flex;
  width: 350px;
`;
const TagWrapper = styled.div`
  max-width: 60px;
  padding: 5px 8px;
  margin: 5px 5px 0 0;
  div {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  border: solid 1px ${customColor.brownDark};
  border-radius: 25px;
  :nth-child(n + 6) {
    // 5개 이후로는 display: none;
    display: none;
  }
`;
