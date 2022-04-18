import React from 'react';
import { TypoGraphy } from 'src/components';
import { customColor } from 'src/constants';
import styled from 'styled-components';

export function FixedButton() {
  return (
    <Wrapper>
      <TypoGraphy type="h3" color={customColor.brownDark} fontWeight="bold">
        <BasicKnow>
          기본상식
          <br />
          TIP
        </BasicKnow>
      </TypoGraphy>
      <TypoGraphy type="body1" color={customColor.white} fontWeight="bold">
        <TopButton>TOP</TopButton>
      </TypoGraphy>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 99;
  top: 70vh;
  right: 100px;
  @media screen and (max-width: 1600px) {
    display: none;
  }
`;

const BasicKnow = styled.div`
  display: flex;
  height: 100px;
  padding: 5px 10px 0 10px;
  align-items: center;
  text-align: center;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  background-color: #ececec;
  border-radius: 25px;
`;

const TopButton = styled.div`
  background-color: #e5b299;
  display: flex;
  height: 25px;
  justify-content: center;
  align-items: center;
  margin-top: 3px;
  border-radius: 25px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
`;
