import React from 'react';
import { Info, Tag } from './index';
import { PhotoCardInfoType } from 'src/dummy/photoCardInfo';
import styled from "styled-components";
type Props = {
  photoCardInfo: PhotoCardInfoType;
};
export const PhotoCard = ({ photoCardInfo }: Props) => {
  const { ImageUrl, Area, Like, Text, Writer, Date, Tags }: PhotoCardInfoType =
    photoCardInfo;
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
