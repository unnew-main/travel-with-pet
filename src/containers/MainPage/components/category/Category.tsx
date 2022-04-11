import React from 'react';
import styled from 'styled-components';
import { TypoGraphy } from 'src/components';
import { customColor } from 'src/constants';
type Props = {
  category: string;
  children: React.ReactNode;
};
export function Category({ category, children }: Props) {
  return (
    <Container>
      <TitleWrapper>
        <TypoGraphy type="Title" fontWeight="bold">
          {category}
        </TypoGraphy>
        <TypoGraphy type="body1" fontWeight="bold">
          더보기
        </TypoGraphy>
      </TitleWrapper>
      {children}
      <Line />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: 1178px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Line = styled.div`
  border-bottom: 1px solid ${customColor.gray};
  width: 1178px;
  margin-top: 80px;
`;