import { customColor } from 'src/constants';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
`;
export const NoticeWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${customColor.Brown};
`;

export const IconWrapper = styled.div`
  margin-right: 10px;
`;

export const Line = styled.div`
  border-bottom: 1px solid ${customColor.gray};
  width: 1178px;
  margin-top: 80px;
`;
