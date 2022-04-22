import React from 'react';
import { TypoGraphy } from 'src/components';
import styled from 'styled-components';
import { customColor } from 'src/constants/customColor';

type ToggleStyledProps = {
  selected?: string;
  choose?: string;
};

type ToggleProps = {
  choose?: string;
  setChoose: Function;
};

export const ToggleBox: React.FC<ToggleProps> = ({ choose, setChoose }) => {
  return (
    <ToggleBoxWrapper>
      <ToggleButton_Left
        selected={choose}
        onClick={() => {
          setChoose('information');
        }}
      >
        <TypoGraphy type="body2" fontWeight="bold">
          정보
        </TypoGraphy>
      </ToggleButton_Left>
      <ToggleButton_Right
        selected={choose}
        onClick={() => {
          setChoose('daily');
        }}
      >
        <TypoGraphy type="body2" fontWeight="bold">
          일상
        </TypoGraphy>
      </ToggleButton_Right>
    </ToggleBoxWrapper>
  );
};

const ToggleBoxWrapper = styled.div`
  display: flex;
  margin-bottom: 32px;
  width: 300px;
`;

const ToggleButton_Left = styled.button<ToggleStyledProps>`
  flex: 1;
  cursor: pointer;
  outline: none;
  border: none;
  padding: 20px;
  height: 32px;
  border-radius: 20px 0 0 20px;
  background-color: ${props =>
    props.selected === 'information'
      ? customColor.brownDark
      : customColor.grayLight};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }

  & div {
    color: ${props =>
      props.selected === 'information'
        ? customColor.white
        : customColor.blackLight};
  }
`;

const ToggleButton_Right = styled.button<ToggleStyledProps>`
  flex: 1;
  cursor: pointer;
  outline: none;
  border: none;
  height: 32px;
  padding: 20px;
  border-radius: 0 20px 20px 0;
  font-size: 14px;
  background-color: ${props =>
    props.selected === 'daily' ? customColor.brownDark : customColor.grayLight};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }

  & div {
    color: ${props =>
      props.selected === 'daily' ? customColor.white : customColor.blackLight};
  }
`;
