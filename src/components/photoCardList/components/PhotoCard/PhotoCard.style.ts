import styled from 'styled-components';

export const Container = styled.div`
  width: 260px;
`;
type ImageProps = {
  ImageUrl?: string;
};
export const ImageWrapper = styled.div<ImageProps>`
  height: 180px;
  background: ${({ImageUrl}) => `url(${ImageUrl}) no-repeat`};
`;
