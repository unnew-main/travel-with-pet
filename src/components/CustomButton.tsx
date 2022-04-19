import React from 'react';
import styled from 'styled-components';
import { customColor } from 'src/constants/customColor';
import { TypoGraphy } from 'src/components';

type ButtonProps = {
  text: string;
  width: number;
  color?: string;
  backGroundColor?: string;
  onClick?: () => void;
};

type ButtonStyledProps = {
  width?: number;
  backGroundColor?: string;
};

export const CustomButton: React.FC<ButtonProps> = ({
  text,
  width,
  color,
  backGroundColor,
  onClick,
}) => {
  return (
    <Button onClick={onClick} width={width} backGroundColor={backGroundColor}>
      <TypoGraphy color={color || customColor.white} fontWeight={'bold'}>
        {text}
      </TypoGraphy>
    </Button>
  );
};

const Button = styled.button<ButtonStyledProps>`
  width: ${props => props.width || 100}px;
  height: 40px;
  color: ${customColor.white};
  background-color: ${props => props.backGroundColor || customColor.brownDark};
  cursor: pointer;
  border-radius: 10px;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`;
