import type { NextPage } from 'next';
import { TypoGraphy, Seo, CustomButton } from 'src/components';
import { customColor } from 'src/constants/customColor';
import { ButtonBox, EditorForm } from 'src/containers/Editor/components/index';
import styled from 'styled-components';
import { category, city } from 'src/dummy/index';
import { useState } from 'react';

export const EditorMainPage: NextPage = () => {
  const [chose, setChose] = useState('A');
  return (
    <Wrapper>
      <Seo title="글쓰기" />
      <ToggleBox>
        <ToggleButton_Left
          onClick={() => {
            setChose('A');
          }}
        >
          <TypoGraphy fontWeight="bold" color={customColor.white}>
            정보
          </TypoGraphy>
        </ToggleButton_Left>
        <ToggleButton_Right
          onClick={() => {
            setChose('B');
          }}
        >
          <TypoGraphy fontWeight="bold" color={customColor.lightBlack}>
            모두의 이야기
          </TypoGraphy>
        </ToggleButton_Right>
      </ToggleBox>

      {chose === 'A' ? (
        <>
          <Category>
            {category.map(item => (
              <Item key={item.value}>{item.name}</Item>
            ))}
          </Category>
          <City>
            {city.map(item => (
              <Item key={item.value}>{item.name}</Item>
            ))}
          </City>
          <Input placeholder="세부 지역을 입력하세요" />
        </>
      ) : (
        <Input placeholder="제목을 입력하세요" />
      )}
      <Hr />
      <Input placeholder="#태그 입력"></Input>
      <Hr />
      <EditorForm />
      <ButtonBox />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  padding: 20px 40px;
`;
const ToggleBox = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const ToggleButton_Left = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  padding: 20px;
  height: 32px;
  border-radius: 20px 0 0 20px;
  background-color: ${customColor.Brown};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`;

const ToggleButton_Right = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  height: 32px;
  padding: 20px;
  border-radius: 0 20px 20px 0;
  background-color: ${customColor.lightBrown};
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
  margin-bottom: 20px;
`;

const City = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const Hr = styled.hr`
  background-color: ${customColor.lightGray};
  margin: 8px 0 20px 0;
  width: 50%;
`;

const Input = styled.input`
  font-size: 20px;
  font-weight: bold;
  border: none;
  outline: none;
  width: 50%;
`;

const Item = styled.div`
  cursor: pointer;
  opacity: 0.9;
  font-size: 20px;
  font-weight: bold;
  color: ${customColor.lightBlack};
  &:hover {
    color: ${customColor.darkBrown};
    opacity: 1;
  }
`;
