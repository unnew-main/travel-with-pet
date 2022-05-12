import React from 'react';
import { customColor } from 'src/constants';
import { BsMegaphone } from 'react-icons/bs';
import { TypoGraphy } from 'src/components';
import styled from 'styled-components';

export const Notice = () => {
  return (
    <Container>
      <NoticeWrapper>
        <IconWrapper>
          <BsMegaphone fontSize={30} />
        </IconWrapper>
        <TypoGraphy type="h3" color={customColor.brown} fontWeight="bold">
          공지 : 타인에게 상처주는 말은 삼가해주세요. 모두가 누군가의 소중한
          ‘주인’ 이자 ‘가족’ 입니다.
        </TypoGraphy>
      </NoticeWrapper>
      <Line />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
`;
const NoticeWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1178px;
  align-items: center;
  color: ${customColor.brown};
`;

const IconWrapper = styled.div`
  margin-right: 10px;
`;

const Line = styled.div`
  border-bottom: 1px solid ${customColor.gray};
  width: 100%;
  max-width: 1178px;
  margin-top: 80px;
`;
