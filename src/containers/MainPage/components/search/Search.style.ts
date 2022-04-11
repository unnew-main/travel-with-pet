import { customColor } from 'src/constants';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 300px;
`;

export const ImageGrayFilter = styled.div`
  height: 300px;
  width: 100vw;
  background-color: ${customColor.black};
  opacity: 0.3;
`;

export const SearchWrapper = styled.div`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Input = styled.input`
  border: none;
  background: transparent;
  border-bottom: 2px solid ${customColor.white};
  width: 50vw;
  padding: 0 0 5px 5px;
  color: ${customColor.white};
  font-size: 20px;
  :focus {
    outline: none;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: -10px;
  right: 0;
  display: flex;
  color: ${customColor.white};
`;

export const RecommendWrapper = styled.div`
  display: flex;
  width: 50vw;
  margin-top: 16px;
  align-items: flex-end;
  p:nth-child(1) {
    margin-left: 2vw;
  }
  justify-content: space-around;
`;
