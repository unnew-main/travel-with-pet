import { Children } from 'react';
import { customColor } from 'src/constants';
import styled from 'styled-components';

export const UnderBar = styled.div<{ isActive: boolean }>`
  position: absolute;
  bottom: 0;
  opacity: ${({ isActive }) => (isActive ? 100 : 0)};
  background-color: ${customColor.white};
  width: 100%;
  height: 5px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const NavWrapper = styled.div<{ customWidth: string }>`
  width: ${({ customWidth }) => customWidth + 'px'};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
  &:hover ${UnderBar} {
    opacity: 100;
  }
`;

export const A = styled.a`
  text-decoration: none;
`;
