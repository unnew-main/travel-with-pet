import React from 'react';
import styled from 'styled-components';
import { TypoGraphy } from 'src/components';
import { customColor } from 'src/constants';
import Link from 'next/link';
type Props = {
  category: string;
  pathName: string;
  children: React.ReactNode;
};
export function Category({ category, pathName, children }: Props) {
  return (
    <Container>
      <TitleWrapper>
        <TypoGraphy type="Title" fontWeight="bold">
          {category}
        </TypoGraphy>
        <Link href={'/information' + pathName} passHref>
          <a style={{textDecoration: 'none'}}>
            <TypoGraphy type="body1" fontWeight="bold">
              더보기
            </TypoGraphy>
          </a>
        </Link>
      </TitleWrapper>
      {children}
      <Line />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  width: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1178px;
  margin-bottom: 40px;
`;

const Line = styled.div`
  border-bottom: 1px solid ${customColor.gray};
  width: 100%;
  max-width: 1178px;
`;
