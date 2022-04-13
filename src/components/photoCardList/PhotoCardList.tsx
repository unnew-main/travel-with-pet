import React from 'react';
import styled from 'styled-components';
import { PhotoCard } from './components';
import { photoCardInfo } from 'src/dummy/photoCardInfo';

type Props = {
  type: 'MainPage' | 'MyPage';
};

const MainPageTest = [1, 2, 3, 4];
const MyPageTest = [1, 2, 3];

export function PhotoCardList({ type }: Props) {
  return (
    <Wrapper type={type}>
      {/* Page 에서 여기로 포토카드 정보를 보내주고, 그걸 뿌리는건데, 어떤식으로 보내줄지 몰라서 UI만 짜놓음 */}
      {type === 'MainPage'
        ? MainPageTest.map((data, index) => (
            <PhotoCard key={index} photoCardInfo={photoCardInfo} />
          ))
        : MyPageTest.map((data, index) => (
            <PhotoCard key={index} photoCardInfo={photoCardInfo} />
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
`;
