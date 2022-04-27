import React from 'react';
import { TypoGraphy } from 'src/components';
import styled from 'styled-components';
type Props = {
  Tags?: string[];
};
export function Tag({ Tags }: Props) {
  return (
    <TagContainer>
      {Tags?.map((tag, index) => (
        <TypoGraphy type="body2" key={index}>
          <TagWrapper>{tag}</TagWrapper>
        </TypoGraphy>
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
  padding: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 5px 5px 0 0;
  white-space: nowrap;
  border: solid 1px black;
  border-radius: 25px;
`;
