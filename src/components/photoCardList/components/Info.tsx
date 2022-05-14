import React from 'react';
import { TypoGraphy } from 'src/components';
import { customColor } from 'src/constants';
import { FaHeart } from 'react-icons/fa';
import styled from 'styled-components';
import { formatDate } from 'src/utils/formatDate';

type Props = {
  Area: string;
  Like: number;
  Text: string;
  Writer: string;
  Date: Date;
};
export function Info(props: Props) {
  const { Area, Like, Text, Writer, Date } = props;
  return (
    <>
      <ItemWrapper>
        <TypoGraphy fontWeight="bold" color={customColor.brownDark} type="h3">
          {Area}
        </TypoGraphy>
        <LikeWrapper>
          <HeartWrapper>
            <FaHeart color="red" />
          </HeartWrapper>
          <TypoGraphy fontWeight="bold" type="body2">
            {Like}
          </TypoGraphy>
        </LikeWrapper>
      </ItemWrapper>
      <ContentWrapper>
        <TypoGraphy fontWeight="bold" fontHeight="1.2" type="body1">
          {Text}
        </TypoGraphy>
      </ContentWrapper>
      <ItemWrapper>
        <TypoGraphy fontWeight="bold" color={customColor.gray} type="body3">
          {Writer}
        </TypoGraphy>
        <TypoGraphy fontWeight="bold" color={customColor.gray} type="body3">
          {formatDate(Date)}
        </TypoGraphy>
      </ItemWrapper>
    </>
  );
}

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;
const LikeWrapper = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  max-height: 2.4em;
  overflow: hidden;
  min-height: 40px;
`;

const HeartWrapper = styled.div`
  margin-right: 2px;
`;
