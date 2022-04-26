import React from 'react'
import { TypoGraphy } from 'src/components';
import styled from 'styled-components';
import {dailyListInfo} from 'src/dummy/dailyInfo';
import { AiOutlinePicture } from 'react-icons/ai';
import { customColor } from 'src/constants';

export default function ListContents() {
  
  return (
    <>
      {dailyListInfo.map(data => (
        <ListWrapper key={data.id}>
          <LeftWrapper>
            <LikeWrapper>
              <TypoGraphy type="body1" fontWeight="bold">
                {data.Like}
              </TypoGraphy>
            </LikeWrapper>
            <TitleWrapper>
              <TypoGraphy type="body1" fontWeight="bold">
                {data.Title}
              </TypoGraphy>
              <TypoGraphy type="body1" fontWeight="bold">
                태그는 아직
              </TypoGraphy>
            </TitleWrapper>
          </LeftWrapper>
          <RightWrapper>
            <TextWrapper>
              <TypoGraphy type="body1" fontWeight="bold">
                {data.ImageUrl ? <AiOutlinePicture fontSize={28} /> : ''}
              </TypoGraphy>
            </TextWrapper>
            <TextWrapper>
              <TypoGraphy type="body1" fontWeight="bold">
                {data.Comment}
              </TypoGraphy>
            </TextWrapper>
            <TextWrapper>
              <TypoGraphy type="body1" fontWeight="bold">
                {data.Writer}
              </TypoGraphy>
            </TextWrapper>
            <TextWrapper>
              <TypoGraphy type="body1" fontWeight="bold">
                {data.Date}
              </TypoGraphy>
            </TextWrapper>
          </RightWrapper>
        </ListWrapper>
      ))}
    </>
  );
}

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

