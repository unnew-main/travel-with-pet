import { TypoGraphy, Seo } from 'src/components';
import { customColor } from 'src/constants/customColor';
import styled from 'styled-components';
import { category, city } from 'src/dummy/index';
import dynamic from 'next/dynamic';
import React, { useState, useRef } from 'react';
import { ButtonBox } from './components';
// import { ButtonBox } from 'src/containers/Editor/components/ButtonBox';

type ToggleProps = {
  selected?: string;
};

type Selected = {
  name: string;
  value: string;
};

type ItemProps = {
  selected: boolean;
};

export const EditorMainPage: React.FC = () => {
  const EditorFormComponent = dynamic(() => import('./components/EditorForm'), {
    ssr: false,
  });

  const [choose, setChoose] = useState('A');

  const [selectedCategory, setSelectedCategory] = useState<Selected>({
    name: '여행',
    value: 'trip',
  });

  const [selectedCity, setSelectedCity] = useState<Selected>({
    name: '서울',
    value: 'seoul',
  });

  const editRef = useRef<any>();

  return (
    <Wrapper>
      <Seo title="글쓰기" />
      <ToggleBox>
        <ToggleButton_Left
          selected={choose}
          onClick={() => {
            setChoose('A');
          }}
        >
          <TypoGraphy type="body2" fontWeight="bold">
            정보
          </TypoGraphy>
        </ToggleButton_Left>
        <ToggleButton_Right
          selected={choose}
          onClick={() => {
            setChoose('B');
          }}
        >
          <TypoGraphy type="body2" fontWeight="bold">
            모두의 이야기
          </TypoGraphy>
        </ToggleButton_Right>
      </ToggleBox>

      {choose === 'A' ? (
        <>
          <Category>
            {category.map(item => (
              <Item
                key={item.value}
                selected={selectedCategory.value === item.value}
                onClick={() => {
                  setSelectedCategory(item);
                }}
              >
                <TypoGraphy
                  type="h3"
                  fontWeight="bold"
                  color={customColor.gray}
                >
                  {item.name}
                </TypoGraphy>
              </Item>
            ))}
          </Category>
          <City>
            {city.map(item => (
              <Item
                key={item.value}
                selected={selectedCity.value === item.value}
                onClick={() => {
                  setSelectedCity(item);
                }}
              >
                <TypoGraphy
                  type="h3"
                  fontWeight="bold"
                  color={customColor.gray}
                >
                  {item.name}
                </TypoGraphy>
              </Item>
            ))}
          </City>
          <Input placeholder="세부 지역을 입력하세요" />
        </>
      ) : (
        <Input placeholder="제목을 입력하세요" />
      )}

      <Hr />
      <Input placeholder="#태그 #입력 #인천" />
      <Hr />
      <EditorFormComponent />
      <ButtonBox />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  padding: 40px 72px;
  padding-bottom: 0px;
  overflow-x: hidden;
`;
const ToggleBox = styled.div`
  display: flex;
  margin-bottom: 32px;
  width: 300px;
`;
const ToggleButton_Left = styled.button<ToggleProps>`
  flex: 1;
  cursor: pointer;
  outline: none;
  border: none;
  padding: 20px;
  height: 32px;
  border-radius: 20px 0 0 20px;
  background-color: ${props =>
    props.selected === 'A' ? customColor.brownDark : customColor.grayLight};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
  & div {
    color: ${props =>
      props.selected === 'A' ? customColor.white : customColor.blackLight};
  }
`;

const ToggleButton_Right = styled.button<ToggleProps>`
  flex: 1;
  cursor: pointer;
  outline: none;
  border: none;
  height: 32px;
  padding: 20px;
  border-radius: 0 20px 20px 0;
  font-size: 14px;
  background-color: ${props =>
    props.selected === 'B' ? customColor.brownDark : customColor.grayLight};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
  & div {
    color: ${props =>
      props.selected === 'B' ? customColor.white : customColor.blackLight};
  }
`;

const Category = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 32px;
`;

const City = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 32px;
`;

const Hr = styled.hr`
  background-color: ${customColor.grayLight};
  margin: 4px 0 32px 0;
  width: 50%;
`;

const Input = styled.input`
  font-size: 20px;
  font-weight: bold;
  border: none;
  outline: none;
  width: 50%;
`;

const Item = styled.div<ItemProps>`
  cursor: pointer;

  &:hover div {
    color: ${customColor.brownDark};
    text-decoration: underline ${customColor.brownDark};
    text-underline-position: under;
  }

  ${props =>
    props.selected &&
    `
    color: ${customColor.brownDark};
    text-decoration: underline ${customColor.brownDark};
    text-underline-position: under;
    & div{
      color : ${customColor.brownDark};
    }
    `}
`;
