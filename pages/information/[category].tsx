import { useRouter } from 'next/router';
import React from 'react';
import { FixedButton, Notice, Search, TypoGraphy } from 'src/components';
import styled from 'styled-components';
export default function InformationViewMore() {
  const router = useRouter();
  const category = () => {
    switch (router.query.category) {
      case 'travel':
        return '여행';
      case 'shop':
        return '음식점';
      case 'hotel':
        return '숙소';
      case 'other':
        return '기타';
    }
  };
  return (
    <Container>
      <Search />
      <Notice />
      <CategoryWrapper>
        <TypoGraphy type='Title' fontWeight='bold'>{category()}</TypoGraphy>
      </CategoryWrapper>
      <FixedButton />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 200px;
  overflow-x: hidden;
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
  width: 1178px;
`;