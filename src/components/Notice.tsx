import React from 'react'
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { TypoGraphy } from './TypoGraphy';
import { BsMegaphone } from 'react-icons/bs'

export const Notice = () => {
  return (
    <Wrapper>
      <IconWrapper>
        <BsMegaphone fontSize={30} />
      </IconWrapper>
      <TypoGraphy type="h3" color={customColor.Brown} fontWeight="bold">
        공지 : 타인에게 상처주는 말은 삼가해주세요. 모두가 누군가의 소중한
        ‘주인’ 이자 ‘가족’ 입니다.
      </TypoGraphy>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${customColor.Brown};
  margin-top: 40px;
`;

const IconWrapper = styled.div`
  margin-right: 10px;
`;