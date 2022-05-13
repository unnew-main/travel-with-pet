import React from 'react';
import { Info, Tag } from './index';
import styled from "styled-components";
import { PhotoCardInfoType } from 'src/constants/photoCard.type';
import Image from 'next/image';
import Link from 'next/link';
type Props = {
  data: PhotoCardInfoType;
};

export const PhotoCard = ({ data }: Props) => {
  const { id, ImageUrl, Area, Like, Text, Writer, Date, Tags }: PhotoCardInfoType =
    data;
  return (
    <Container>
      <Link href={`information/detail/${id}`}>
        <a style={{ textDecoration: 'none' }}>
          <Image width={260} height={180} src={ImageUrl} alt="thumbnail" />
          <Info
            Area={Area}
            Like={Like}
            Text={Text}
            Writer={Writer}
            Date={Date}
          />
        </a>
      </Link>
      <Tag Tags={Tags} />
    </Container>
  );
};


const Container = styled.div`
  width: 260px;
`;