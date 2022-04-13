import type { NextPage } from 'next';
import { TypoGraphy, Seo, CustomButton } from 'src/components';
import { customColor } from 'src/constants/customColor';
import styled from 'styled-components';
import { category, city } from 'src/dummy/index';
import { useState } from 'react';
import { ButtonBox } from './components/ButtonBox';
import { EditorForm } from './components/EditorForm';

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

export const EditorMainPage: NextPage = () => {
  const [choose, setChoose] = useState('A');

  const [selectedCategory, setSelectedCategory] = useState<Selected>({
    name: '여행',
    value: 'trip',
  });

  const [selectedCity, setSelectedCity] = useState<Selected>({
    name: '서울',
    value: 'seoul',
  });

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
          정보
        </ToggleButton_Left>
        <ToggleButton_Right
          selected={choose}
          onClick={() => {
            setChoose('B');
          }}
        >
          모두의 이야기
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
                {item.name}
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
                {item.name}
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
      {/* <EditorForm /> */}
      <ButtonBox />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  padding: 40px 80px;
  padding-bottom: 0px;
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
  font-size: 14px;
  background-color: ${props =>
    props.selected === 'A' ? '#AF8E8E' : '#E9D9D9'};
  color: ${props =>
    props.selected === 'A' ? customColor.white : customColor.lightBlack};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.9;

  &:hover {
    opacity: 1;
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
    props.selected === 'B' ? '#AF8E8E' : '#E9D9D9'};
  font-weight: bold;
  color: ${props =>
    props.selected === 'B' ? customColor.white : customColor.lightBlack};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.9;
  &:hover {
    opacity: 1;
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
  background-color: ${customColor.lightGray};
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
  font-size: 20px;
  font-weight: bold;
  color: ${customColor.lightBlack};
  &:hover {
    color: ${customColor.darkBrown};
    text-decoration: underline ${customColor.darkBrown};
    text-underline-position: under;
  }

  ${props =>
    props.selected &&
    `
    color: ${customColor.darkBrown};
    text-decoration: underline ${customColor.darkBrown};
    text-underline-position: under;
    `}
`;
