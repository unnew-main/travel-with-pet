import styled from 'styled-components';
import { customColor } from 'src/constants';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 88px;

  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.6);
  z-index: 99;
`;

export const UpHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 55%;
  position: relative;
`;
export const A = styled.a`
  text-decoration: none;
  height: 100%;
`;
export const TitleWrapper = styled.div`
  cursor: pointer;
  margin-left: 30px;
  height: 100%;
  div {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
`;
export const UpLeftWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
`;
export const WriteButtonWrapper = styled.div`
  margin-right: 20px;
`;
// export const AlertButtonWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: ${customColor.orange};
//   font-size: 25px;
//   border-radius: 50px;
//   width: 35px;
//   height: 35px;
//   cursor: pointer;

//   color: ${customColor.white};
// `;

export const DownHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45%;
  background-color: ${customColor.brownDark};
`;
