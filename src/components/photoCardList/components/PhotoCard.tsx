import React from 'react';
import { Info, Tag } from './index';
import styled from "styled-components";
import { PhotoCardInfoType } from 'src/constants/photoCard.type';
type Props = {
  data: PhotoCardInfoType;
};
export const PhotoCard = ({ data }: Props) => {
  const { ImageUrl, Area, Like, Text, Writer, Date, Tags }: PhotoCardInfoType =
    data;
  return (
    <Container>
      <ImageWrapper ImageUrl={ImageUrl} />
      <Info Area={Area} Like={Like} Text={Text} Writer={Writer} Date={Date} />
      <Tag Tags={Tags} />
    </Container>
  );
};


const Container = styled.div`
  width: 260px;
`;
type ImageProps = {
  ImageUrl?: string;
};
const ImageWrapper = styled.div<ImageProps>`
  height: 180px;
  background: ${({ ImageUrl }) => `url(${ImageUrl}) no-repeat`};
`;
