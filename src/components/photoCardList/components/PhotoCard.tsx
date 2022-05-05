import React from 'react';
import { Info, Tag } from './index';
import styled from "styled-components";
import { PhotoCardInfoType } from 'src/constants/photoCard.type';
import Image from 'next/image';
type Props = {
  data: PhotoCardInfoType;
};
export const PhotoCard = ({ data }: Props) => {
  const { ImageUrl, Area, Like, Text, Writer, Date, Tags }: PhotoCardInfoType =
    data;
  return (
    <Container>
      <Image width={260} height={180} src={ImageUrl} alt="thumbnail" />
      <Info Area={Area} Like={Like} Text={Text} Writer={Writer} Date={Date} />
      <Tag Tags={Tags} />
    </Container>
  );
};


const Container = styled.div`
  width: 260px;
`;