import { customColor } from 'src/constants';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 400px;
  background-color: ${customColor.grayLight};
`;
export const Wrapper = styled.div`
  max-width: 1178px;
  height: 100%;
  margin: auto;
`;
export const UpFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 60%;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const DownFooter = styled.div`
  border-top: 1px solid ${customColor.gray};
  width: 100%;

  height: 40%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 20px;
`;

export const TitleWrapper = styled.div`
  padding-left: 20px;
  div {
    cursor: pointer;
  }
`;

export const DownRightWrapper = styled.div`
  padding-right: 20px;
  display: flex;
  align-items: flex-end;
`;

export const EmailWrapper = styled.div``;
export const IconWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-size: 30px;
  margin-left: 20px;
  cursor: pointer;
`;
