import React from 'react';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { TypoGraphy } from '../../components/TypoGraphy';
import { FaHeart } from 'react-icons/fa';

export const MyComments = () => {
  return (
    <>
      <Hr />
      <Text>
        <TypoGraphy type="h1" fontWeight="bold">
          내가 작성한 댓글
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
      <FaHeart color="red" />
      <TypoGraphy>23</TypoGraphy>
      <Hr2 />
      <FaHeart color="red" />
      <TypoGraphy>23</TypoGraphy>
      <Hr2 />
      <FaHeart color="red" />
      <TypoGraphy>23</TypoGraphy>
      <Hr2 />
      <FaHeart color="red" />
      <TypoGraphy>23</TypoGraphy>
      <Hr2 />
      <FaHeart color="red" />
      <TypoGraphy>23</TypoGraphy>
    </>
  );
};

const Hr = styled.hr`
  margin-top: 80px;
  width: 1178px;
  background-color: #c4c4c4;
`;

const Hr2 = styled.hr`
  width: 960px;
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
