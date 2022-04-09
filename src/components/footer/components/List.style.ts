import { customColor } from 'src/constants';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-right: 50px;
  width: 10%;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  height: 25px;
  border-bottom: 1px solid ${customColor.darkBrown};
  margin-bottom: 10px;
  div {
    cursor: pointer;
  }
`;

export const ItemWrapper = styled.div`
  padding-top: 10px;
  &:hover div {
    text-decoration: underline;
  }
  div {
    cursor: pointer;
  }
`;
