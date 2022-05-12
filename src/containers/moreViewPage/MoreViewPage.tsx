import { useRouter } from 'next/router';
import React, { useState } from 'react';
import {
  FixedButton,
  Notice,
  PhotoCardList,
  Search,
  TypoGraphy,
} from 'src/components';
import { CustomPagination } from 'src/components/CustomPagination';
import { PhotoCardInfoType } from 'src/constants/photoCard.type';
import { photoCardInfo, totalItemsCount } from 'src/dummy/photoCardInfo';
import styled from 'styled-components';
export function MoreViewPage() {
  const router = useRouter();
  const [activePage, setActivePage] = useState<number>(1);

  // 이 부분은 나중에 api 호출로 바뀔거같음 (지금은 UI 구성을 위해 임시로 짜놓은 코드 )
  const photoCardInfoPiece: PhotoCardInfoType[] = [];
  const pieceNumber = 16;
  photoCardInfo.map((data, index) => {
    if (
      index < (activePage - 1) * pieceNumber ||
      index > activePage * pieceNumber - 1
    ) {
      return;
    }
    photoCardInfoPiece.push(data);
  });
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
        <TypoGraphy type="Title" fontWeight="bold">
          {category()}
        </TypoGraphy>
      </CategoryWrapper>
      <FixedButton />
      <PhotoCardList type="MainPage" photoCardInfo={photoCardInfoPiece} />
      <CustomPagination
        activePage={activePage}
        itemsCountPerPage={pieceNumber}
        totalItemsCount={totalItemsCount}
        onChange={e => setActivePage(e)}
      />
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
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 40px;
  width: 100%;
  max-width: 1178px;
`;
