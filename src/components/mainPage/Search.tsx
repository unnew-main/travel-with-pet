import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import { TypoGraphy } from 'src/components';
import { customColor } from 'src/constants';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import MainPageSearchBG from 'src/assets/image/MainPageSearchBG.jpg';
import styled from 'styled-components';
import { Recommend } from './Recommend';
import { useRef } from 'react';
import { useRouter } from 'next/router';

const RecommendTag = [
  '#서울',
  '#인천',
  '#강아지 간식',
  '#훈련 방법',
  '#강아지 영양제',
];
export const Search = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const onSearch = () => {
    router.push(
      {
        pathname: `/search`,
        query: {
          search,
        },
      },
      '/search',
    );
  };
  const onReset = () => {
    setSearch('');
    inputRef.current!.focus();
  };
  return (
    <Container>
      <Image
        src={MainPageSearchBG}
        layout="fill"
        objectFit="fill"
        alt="background"
        objectPosition="absolute"
        priority
      />
      <ImageGrayFilter />
      <SearchWrapper>
        <Input value={search} onChange={onChange} ref={inputRef} />
        <IconWrapper>
          <AiOutlineSearch fontSize={40} onClick={onSearch} />
          <AiOutlineClose fontSize={40} onClick={onReset} />
        </IconWrapper>
        <RecommendWrapper>
          <TypoGraphy type="h3" color={customColor.white} fontWeight="bold">
            #추천태그
          </TypoGraphy>
          {RecommendTag.map((tag, index) => (
            <Recommend key={index}>{tag}</Recommend>
          ))}
        </RecommendWrapper>
      </SearchWrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
`;

const ImageGrayFilter = styled.div`
  height: 300px;
  width: 100%;
  background-color: ${customColor.black};
  opacity: 0.3;
`;

const SearchWrapper = styled.div`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 850px;
  transform: translate(-50%, -50%);
`;

const Input = styled.input`
  border: none;
  background: transparent;
  border-bottom: 2px solid ${customColor.white};
  width: 100%;
  padding: 5px 0;
  color: ${customColor.white};
  font-size: 20px;
  :focus {
    outline: none;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: -10px;
  right: 0;
  display: flex;
  color: ${customColor.white};
`;

const RecommendWrapper = styled.div`
  display: flex;
  width: 100%;
  /* @media screen and (min-width: 1024px) {
    width: 850px;
  } */
  margin-top: 16px;
  align-items: flex-end;
  justify-content: space-around;
`;
