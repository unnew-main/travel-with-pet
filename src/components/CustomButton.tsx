import React from 'react';
import styled from 'styled-components';
import { customColor } from 'src/constants/customColor';
import { TypoGraphy } from 'src/components';

type ButtonProps = {
  text: string;
  width: number;

  height?: number;
  color?: string;
  borderRadius?: number;

  backGroundColor?: string;
  onClick?: () => void;
};

type ButtonStyledProps = {
  width?: number;

  height?: number;
  borderRadius?: number;

  backGroundColor?: string;
};

export const CustomButton: React.FC<ButtonProps> = ({
  text,
  width,
  height,
  color,
  backGroundColor,
  borderRadius,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      width={width}
      backGroundColor={backGroundColor}
      borderRadius={borderRadius}
      height={height}
    >
      <TypoGraphy color={color || customColor.white} fontWeight={'bold'}>
        {text}
      </TypoGraphy>
    </Button>
  );
};

const Button = styled.button<ButtonStyledProps>`
  width: ${props => props.width || 100}px;

  height: ${props => props.height || 40}px;
  color: ${customColor.white};
  background-color: ${props => props.backGroundColor || customColor.brownDark};
  cursor: pointer;
  border-radius: ${props => props.borderRadius || 10}px;

  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform 500ms ease-in;

  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`;
