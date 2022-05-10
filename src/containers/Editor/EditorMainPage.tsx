import { Seo } from 'src/components';
import { customColor } from 'src/constants/customColor';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import React, { useState, MutableRefObject, forwardRef } from 'react';
import { ButtonBox, ToggleBox, InformationForm } from './components';
import { useRef } from 'react';
import { EditorProps, Editor as EditorType } from '@toast-ui/react-editor';
import { TuiWithForwardedRefProps } from './components/EditorForm';

type Selected = {
  name: string;
  value: string;
};

const EditorFormComponent = dynamic<TuiWithForwardedRefProps>(
  () => import('./components/EditorForm'),
  {
    ssr: false,
  },
);

const EditorWithForwardRef = forwardRef<EditorType | undefined, EditorProps>(
  (props, ref) => (
    <EditorFormComponent
      {...props}
      forwardedRef={ref as MutableRefObject<EditorType>}
    />
  ),
);

EditorWithForwardRef.displayName = 'EditorWithForwardRef';

export const EditorMainPage: React.FC = () => {
  const [choose, setChoose] = useState('information');
  const editorRef = useRef<EditorType>(null);
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
      <ToggleBox choose={choose} setChoose={setChoose} />

      {choose === 'information' ? (
        <InformationForm
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
        />
      ) : (
        <Input placeholder="제목을 입력하세요" />
      )}
      <Hr />
      <Input placeholder="#태그 #입력 #인천" />
      <Hr />
      <EditorWithForwardRef ref={editorRef} />
      <ButtonBox />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 40px 72px;
  padding-bottom: 0px;
  margin: 40px 0;
  overflow-x: hidden;
`;

const Hr = styled.hr`
  background-color: ${customColor.grayLight};
  margin: 4px 0 32px 0;
  width: 1178px;
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
