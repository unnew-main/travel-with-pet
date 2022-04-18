import React from 'react';
import { PhotoCardList } from 'src/components';
import styled from 'styled-components';
import { TypoGraphy } from '../../components/TypoGraphy';
import { customColor } from 'src/constants';

export const MyPosts = () => {
  return (
    <>
      <Hr />
      <Text>
        <TypoGraphy type="h1" fontWeight="bold">
          내가 작성한 글
        </TypoGraphy>
      </Text>

      <Category>
        <TextCategory>
          <TypoGraphy
            type="body1"
            fontWeight="bold"
            color={customColor.brownDark}
          >
            정보
          </TypoGraphy>
        </TextCategory>
        <TextCategory>
          <TypoGraphy type="body1" fontWeight="bold" color={customColor.gray}>
            모두의 이야기
          </TypoGraphy>
        </TextCategory>
      </Category>

      <PhotoCardList type="MyPage" />
    </>
  );
};

const Hr = styled.hr`
  margin-top: 80px;
  width: 1178px;
  background-color: #c4c4c4;
`;

const Text = styled.div`
  padding: 24px;
`;

const TextCategory = styled.div`
  padding: 8px;
  padding-top: 0px;
  padding-bottom: 32px;
`;
const Category = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
