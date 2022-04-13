import React from 'react';
import styled from 'styled-components';
import { PhotoCard } from './components';
import { photoCardInfo } from 'src/dummy/photoCardInfo';

type Props = {
  type: 'MainPage' | 'MyPage';
};

export function PhotoCardList({ type }: Props) {
  return (
    <Wrapper type={type}>
      {photoCardInfo.map((data, index) => (
        <PhotoCard key={index} photoCardInfo={data} />
      ))}
    </Wrapper>
  );
}

type StyledListProps = {
  type: 'MainPage' | 'MyPage';
};
const Wrapper = styled.div<StyledListProps>`
  width: ${({ type }) => (type === 'MainPage' ? '1178px' : '870px')};
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
  flex-wrap: wrap;
  gap: 80px 0px;
`;
