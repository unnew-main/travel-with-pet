import { customColor } from 'src/constants';
import styled from 'styled-components';

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
`;

export const UnderBar = styled.div<{ isHover: boolean }>`
  position: absolute;
  bottom: 0;
  opacity: ${({ isHover }) => (isHover ? 100 : 0)};
  background-color: ${customColor.white};
  width: 100%;
  height: 5px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
