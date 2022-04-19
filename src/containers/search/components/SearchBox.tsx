import { useState } from 'react';
import { TypoGraphy } from 'src/components';
import { customColor } from 'src/constants';
import styled from 'styled-components';

const category = ['정보', '일상'];
const location = [
  'ALL',
  '서울',
  '경기',
  '강원',
  '충청',
  '전라',
  '경상',
  '인천',
  '대전',
  '대구',
  '광주',
  '울산',
  '부산',
  '제주',
  '기타',
];
const kinds = ['ALL', '여행', '음식점', '숙소', '기타'];

export const SearchBox = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('정보');
  const [selectedLocation, setSelectedLocation] = useState<string>('ALL');
  const [selectedKinds, setSelectedKinds] = useState<string>('ALL');
  const [inputData, setInputData] = useState<string>('');
  const handleCategory = (props: string) => {
    setSelectedCategory(props);
  };
  const handleLocation = (props: string) => {
    setSelectedLocation(props);
  };
  const handleKinds = (props: string) => {
    setSelectedKinds(props);
  };
  const handleInputchange = (e: any) => {
    setInputData(e.target.value);
  };
  const handleSearchButton = () => {};
  return (
    <Container>
      <UpperWrapper>
        <HeaderListWrapper>
          <Header>
            <TypoGraphy type="body1" color={customColor.blackLight}>
              카테고리
            </TypoGraphy>
          </Header>
          <Header>
            <TypoGraphy type="body1" color={customColor.blackLight}>
              지역
            </TypoGraphy>
          </Header>
          <Header>
            <TypoGraphy type="body1" color={customColor.blackLight}>
              종류
            </TypoGraphy>
          </Header>
          <Header>
            <TypoGraphy type="body1" color={customColor.blackLight}>
              제목/태그/작성자
            </TypoGraphy>
          </Header>
        </HeaderListWrapper>
        <BodyListWrapper>
          <BodyList>
            {category.map((props, i) => (
              <CategoryBody
                key={i}
                onClick={() => handleCategory(props)}
                isActive={selectedCategory === props}
              >
                <TypoGraphy
                  type="body1"
                  color={
                    selectedCategory === props
                      ? customColor.brownDark
                      : customColor.blackLight
                  }
                  fontWeight={selectedCategory === props ? 'bold' : 'none'}
                >
                  {props}
                </TypoGraphy>
              </CategoryBody>
            ))}
          </BodyList>
          <BodyList>
            {location.map((props, i) => (
              <LocationBody
                key={i}
                onClick={() =>
                  selectedCategory === '정보' ? handleLocation(props) : ''
                }
                isActive={selectedLocation === props}
                isInfo={selectedCategory === '정보'}
              >
                <TypoGraphy
                  type="body1"
                  color={
                    selectedCategory !== '정보'
                      ? customColor.gray
                      : selectedLocation === props
                      ? customColor.brownDark
                      : customColor.blackLight
                  }
                >
                  {props}
                </TypoGraphy>
              </LocationBody>
            ))}
          </BodyList>
          <BodyList>
            {kinds.map((props, i) => (
              <KindsBody
                key={i}
                onClick={() =>
                  selectedCategory === '정보' ? handleKinds(props) : ''
                }
                isActive={selectedKinds === props}
                isInfo={selectedCategory === '정보'}
              >
                <TypoGraphy
                  type="body1"
                  color={
                    selectedCategory !== '정보'
                      ? customColor.gray
                      : selectedKinds === props
                      ? customColor.brownDark
                      : customColor.blackLight
                  }
                >
                  {props}
                </TypoGraphy>
              </KindsBody>
            ))}
          </BodyList>
          <InputWrapper>
            <InputBox onChange={handleInputchange} />
          </InputWrapper>
        </BodyListWrapper>
      </UpperWrapper>
      <DownWrapper>
        <ButtonWrapper>Button</ButtonWrapper>
      </DownWrapper>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${customColor.grayLight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 250px;
  border-radius: 10px;
`;

const UpperWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 70%;
`;

const DownWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 15%;
`;

const HeaderListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  width: 15%;
  height: 100%;

  padding-right: 20px;
  border-right: 2px solid ${customColor.gray};
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25%;
`;
const BodyListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  justify-content: center;
  align-items: flex-start;

  width: 85%;
  height: 100%;
`;
const BodyList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 25%;
`;

interface BodyProps {
  isActive: boolean;
}
const Body = styled.div<BodyProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  div {
    cursor: pointer;
    text-decoration: ${({ isActive }) => (isActive ? 'underline' : 'none')};
  }
`;
const CategoryBody = styled(Body)``;

interface IsInfoProps {
  isInfo: boolean;
}
const LocationBody = styled(Body)<IsInfoProps>`
  div {
    cursor: ${({ isInfo }) => (isInfo ? 'pointer' : 'default')};
    text-decoration: ${({ isInfo, isActive }) =>
      isActive && isInfo ? 'underline' : 'none'};
    font-weight: ${({ isInfo, isActive }) =>
      isActive && isInfo ? 'bold' : 'none'};
  }
`;

const KindsBody = styled(Body)<IsInfoProps>`
  margin-right: 8px;
  div {
    cursor: ${({ isInfo }) => (isInfo ? 'pointer' : 'default')};
    text-decoration: ${({ isInfo, isActive }) =>
      isActive && isInfo ? 'underline' : 'none'};
    font-weight: ${({ isInfo, isActive }) =>
      isActive && isInfo ? 'bold' : 'none'};
  }
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 25%;
`;
const InputBox = styled.input`
  width: 100%;
  height: 70%;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;
const ButtonWrapper = styled.div``;
