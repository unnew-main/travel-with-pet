import React, { useState } from 'react';
import { TypoGraphy } from 'src/components';
import styled from 'styled-components';
import { dailyListInfo, totalItemsCount } from 'src/dummy/dailyInfo';
import { AiOutlinePicture } from 'react-icons/ai';
import { customColor } from 'src/constants';
import { Tag } from './Tag';
import { CustomPagination } from 'src/components/CustomPagination';

export default function ListContents() {
  const [activePage, setActivePage] = useState<number>(1);

  const formatDate = (date: Date) => {
    const formattedDate = [
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
    ].join('-');
    return formattedDate;
  };
  return (
    <>
      {dailyListInfo.map((data, index) => {
        // 이 부분은 나중에 api 호출로 바뀔거같음 (지금은 UI 구성을 위해 임시로 짜놓은 코드)
        if (index < activePage * 10 && index >= (activePage - 1) * 10)
          return (
            <ListWrapper key={data.id}>
              <LeftWrapper>
                <LikeWrapper>
                  <TypoGraphy type="body1" fontWeight="bold">
                    {data.Like}
                  </TypoGraphy>
                </LikeWrapper>
                <TitleContainer>
                  <TitleWrapper>
                    <TypoGraphy type="body1" fontWeight="bold">
                      {data.Title}
                    </TypoGraphy>
                  </TitleWrapper>
                  <Tag Tags={data.Tags} />
                </TitleContainer>
              </LeftWrapper>
              <RightWrapper>
                <TextWrapper>
                  <TypoGraphy type="body1" fontWeight="bold">
                    {data.ImageUrl ? <AiOutlinePicture fontSize={28} /> : ''}
                  </TypoGraphy>
                </TextWrapper>
                <TextWrapper>
                  <TypoGraphy
                    type="body1"
                    fontWeight="bold"
                    color={customColor.brownDark}
                  >
                    ({data.Comment})
                  </TypoGraphy>
                </TextWrapper>
                <TextWrapper>
                  <TypoGraphy type="body1" fontWeight="bold">
                    {data.Writer}
                  </TypoGraphy>
                </TextWrapper>
                <TextWrapper>
                  <TypoGraphy type="body1" fontWeight="bold">
                    {formatDate(data.Date)}
                  </TypoGraphy>
                </TextWrapper>
              </RightWrapper>
            </ListWrapper>
          );
      })}
      <CustomPagination
        activePage={activePage}
        itemsCountPerPage={10}
        totalItemsCount={totalItemsCount}
        onChange={e => setActivePage(e)}
      />
    </>
  );
}

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 4px 0;
`;
const TitleWrapper = styled.div`
  div {
    width: 400px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  border-bottom: 1px solid ${customColor.gray};
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RightWrapper = styled.div`
  display: flex;
`;

const TextWrapper = styled.div`
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LikeWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 80px;
  margin-right: 20px;
`;