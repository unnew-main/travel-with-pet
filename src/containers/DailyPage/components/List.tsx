import React from 'react';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';
import { TypoGraphy } from 'src/components';
const rightHeader = ['사진', '댓글 수', '작성자', '작성일'];
export function List() {
  return (
    <Container>
      <ListHeader>
        <LeftHeaderWrapper>
          <HeartWrapper>
            <FaHeart color="red" fontSize={20}/>
          </HeartWrapper>
          <TypoGraphy type="h3" fontWeight="bold" color={customColor.white}>
            제목
          </TypoGraphy>
        </LeftHeaderWrapper>
        <RightHeaderWrapper>
          {rightHeader.map((data, index) => (
            <TypoGraphy
              type="h3"
              fontWeight="bold"
              color={customColor.white}
              key={index}
            >
              {data}
            </TypoGraphy>
          ))}
        </RightHeaderWrapper>
      </ListHeader>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 40px;
`;

const ListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1178px;
  height: 60px;
  background-color: ${customColor.brownLight};
`;

const HeartWrapper = styled.div``;

const LeftHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  gap: 0 60px;
`;

const RightHeaderWrapper = styled.div`
  display: flex;
  margin-right: 30px;
  gap: 0 60px;
`;