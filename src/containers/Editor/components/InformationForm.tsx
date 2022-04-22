import React from 'react';
import { category, city } from 'src/constants';
import { TypoGraphy } from 'src/components';
import styled from 'styled-components';
import { customColor } from 'src/constants/customColor';

type ItemProps = {
  selected: boolean;
};

type Obj = {
  name: string;
  value: string;
};

type InformationFormProps = {
  selectedCategory: Obj;
  setSelectedCategory: Function;
  selectedCity: Obj;
  setSelectedCity: Function;
};

export const InformationForm: React.FC<InformationFormProps> = ({
  selectedCategory,
  setSelectedCategory,
  selectedCity,
  setSelectedCity,
}) => {
  return (
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
            <TypoGraphy type="h3" fontWeight="bold" color={customColor.gray}>
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
            <TypoGraphy type="h3" fontWeight="bold" color={customColor.gray}>
              {item.name}
            </TypoGraphy>
          </Item>
        ))}
      </City>
      <Input placeholder="세부 지역을 입력하세요" />
    </>
  );
};
const Category = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 32px;
`;

const City = styled.div`
  display: flex;
  gap: 20px;
  width: 1200px;
  margin-bottom: 32px;
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

const Input = styled.input`
  font-size: 20px;
  font-weight: bold;
  border: none;
  outline: none;
  width: 1178px;

  ::placeholder {
    opacity: 0.5;
    font-weight: bold;
  }
`;
