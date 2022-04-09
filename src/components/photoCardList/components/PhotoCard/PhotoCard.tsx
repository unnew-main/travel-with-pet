import React from 'react';
import * as S from './PhotoCard.style';
import { Info, Tag } from '../index';

type Props = {
  ImageUrl?: string;
  Area: string;
  Like: number;
  Text: string;
  Writer: string;
  Date: string;
  Tags?: string[];
};
export const PhotoCard = ({
  ImageUrl,
  Area,
  Like,
  Text,
  Writer,
  Date,
  Tags,
}: Props) => {
  return (
    <S.Container>
      <S.ImageWrapper ImageUrl={ImageUrl}/>
      <Info Area={Area} Like={Like} Text={Text} Writer={Writer} Date={Date} />
      <Tag Tags={Tags} />
    </S.Container>
  );
};

