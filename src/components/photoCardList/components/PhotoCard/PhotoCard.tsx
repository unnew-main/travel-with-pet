import React from 'react';
import * as S from './PhotoCard.style';
import { Info, Tag } from '../index';
import { PhotoCardInfoType } from 'src/dummy/photoCardInfo';
type Props = {
  photoCardInfo: PhotoCardInfoType;
};
export const PhotoCard = ({ photoCardInfo }: Props) => {
  const { ImageUrl, Area, Like, Text, Writer, Date, Tags }: PhotoCardInfoType =
    photoCardInfo;
  return (
    <S.Container>
      <S.ImageWrapper ImageUrl={ImageUrl} />
      <Info Area={Area} Like={Like} Text={Text} Writer={Writer} Date={Date} />
      <Tag Tags={Tags} />
    </S.Container>
  );
};
