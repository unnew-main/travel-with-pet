import React from 'react';
import styled from 'styled-components';
import { PhotoCard } from './components';

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
            <PhotoCard
              key={index}
              ImageUrl="favicon.ico"
              Area="인천 구월동"
              Like={12}
              Text="이건 뭔사진인지 당최 모르겠네 가나다라마바사아자차카타파하 아직도 남았는데 가나다라마바사 두줄이상이면 점으로 돼야하는데 이게 될라나"
              Writer="글쓴이닉네임"
              Date="2022-04-08"
              Tags={[
                '#인천',
                '#여행',
                '#두글자 이상인 태그가 있으면 점으로 처리해야하는데 얘 왜케 안되는거같지??',
              ]}
            />
          ))
        : MyPageTest.map((data, index) => (
            <PhotoCard
              key={index}
              ImageUrl="favicon.ico"
              Area="인천 구월동"
              Like={12}
              Text="이건 뭔사진인지 당최 모르겠네 가나다라마바사아자차카타파하 아직도 남았는데 가나다라마바사 두줄이상이면 점으로 돼야하는데 이게 될라나"
              Writer="글쓴이닉네임"
              Date="2022-04-08"
              Tags={[
                '#인천',
                '#여행',
                '#두글자 이상인 태그가 있으면 점으로 처리해야하는데 얘 왜케 안되는거같지??',
              ]}
            />
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