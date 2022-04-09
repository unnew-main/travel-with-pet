import styled from 'styled-components';
import { customColor } from 'src/constants';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 88px;

  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.6);
`;

export const UpHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 55%;
  position: relative;
`;
export const TitleWrapper = styled.div`
  position: absolute;
  cursor: pointer;
  margin-left: 30px;
  bottom: -5px;
  left: 0px;
`;
export const UpLeftWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
`;
export const WriteButtonWrapper = styled.div`
  background-color: ${customColor.orange};
  margin-right: 20px;
`;
export const AlertButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${customColor.orange};
  font-size: 25px;
  border-radius: 50px;
  width: 35px;
  height: 35px;
  cursor: pointer;

  color: ${customColor.white};
`;

export const DownHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45%;
  background-color: ${customColor.darkBrown};
`;
