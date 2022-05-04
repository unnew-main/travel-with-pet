import React from 'react';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { TypoGraphy } from '../../../components/TypoGraphy';
import { FaHeart } from 'react-icons/fa';

export const MyComments = () => {
  return (
    <>
      <Hr />
      <Text>
        <TypoGraphy type="h1" fontWeight="bold">
          내가 작성한 댓글
        </TypoGraphy>
      </Text>
      <Category>
        <TextCategory>
          <TypoGraphy
            type="body1"
            fontWeight="bold"
            color={customColor.brownDark}
          >
            정보
          </TypoGraphy>
        </TextCategory>
        <TextCategory>
          <TypoGraphy type="body1" fontWeight="bold" color={customColor.gray}>
            모두의 이야기
          </TypoGraphy>
        </TextCategory>
      </Category>
      <PreviewContainer2>
        <PreviewContainer>
          <PreviewContainerPadding>
            <FaHeart color="red" />
            <TypoGraphy fontWeight="bold" textAlign="center">
              23
            </TypoGraphy>
          </PreviewContainerPadding>
          <PreviewContainerPadding>
            <PreviewPic />
          </PreviewContainerPadding>
          <PreviewContainerPadding>
            <TypoGraphy type="body1" fontWeight="bold">
              강쥐와 함께 하는 여행 보기 좋습니다..^^
            </TypoGraphy>
            <PreviewContainerPadding />
            <TypoGraphy type="body3" color="gray">
              서울에 있는 000에 우리 아이 데려갔어요 (12)
            </TypoGraphy>
          </PreviewContainerPadding>
        </PreviewContainer>
        <HrSmall />
        <PreviewContainer>
          <PreviewContainerPadding>
            <FaHeart color="red" />
            <TypoGraphy fontWeight="bold" textAlign="center">
              23
            </TypoGraphy>
          </PreviewContainerPadding>
          <PreviewContainerPadding>
            <PreviewPic />
          </PreviewContainerPadding>
          <PreviewContainerPadding>
            <TypoGraphy type="body1" fontWeight="bold">
              코기는 사랑입니다.
            </TypoGraphy>
            <PreviewContainerPadding />
            <TypoGraphy type="body3" color="gray">
              이건 뭔사진인지 당최 모르겠네 가나다라마바사아자차카타파하 아직도
              남았... (12)
            </TypoGraphy>
          </PreviewContainerPadding>
        </PreviewContainer>
        <HrSmall />
        <PreviewContainer>
          <PreviewContainerPadding>
            <FaHeart color="red" />
            <TypoGraphy fontWeight="bold" textAlign="center">
              23
            </TypoGraphy>
          </PreviewContainerPadding>
          <PreviewContainerPadding>
            <PreviewPic />
          </PreviewContainerPadding>
          <PreviewContainerPadding>
            <TypoGraphy type="body1" fontWeight="bold">
              정차하고 바깥공기 좀 쐬게 해주면 좀 나을 거예요..
            </TypoGraphy>
            <PreviewContainerPadding />
            <TypoGraphy type="body3" color="gray">
              경기도에 있는 OOO에 우리 애를 데려갔는데, 차에서 애가 멀미를
              하는거 같아... (12)
            </TypoGraphy>
          </PreviewContainerPadding>
        </PreviewContainer>
        <HrSmall />
        <PreviewContainer>
          <PreviewContainerPadding>
            <FaHeart color="red" />
            <TypoGraphy fontWeight="bold" textAlign="center">
              1
            </TypoGraphy>
          </PreviewContainerPadding>
          <PreviewContainerPadding>
            <PreviewPic />
          </PreviewContainerPadding>
          <PreviewContainerPadding>
            <TypoGraphy type="body1" fontWeight="bold">
              사진 없는 글은 이렇게 처리할까요?
            </TypoGraphy>
            <PreviewContainerPadding />
            <TypoGraphy type="body3" color="gray">
              서울에 있는 000에 우리 아이 데려갔어요 (12)
            </TypoGraphy>
          </PreviewContainerPadding>
        </PreviewContainer>
        <HrSmall />

        <PreviewContainer>
          <PreviewContainerPadding>
            <FaHeart color="red" />
            <TypoGraphy fontWeight="bold" textAlign="center">
              23
            </TypoGraphy>
          </PreviewContainerPadding>
          <PreviewContainerPadding>
            <PreviewPic />
          </PreviewContainerPadding>
          <PreviewContainerPadding>
            <TypoGraphy type="body1" fontWeight="bold">
              강쥐와 함께 하는 여행 보기 좋습니다..^^
            </TypoGraphy>
            <PreviewContainerPadding />
            <TypoGraphy type="body3" color="gray">
              서울에 있는 000에 우리 아이 데려갔어요 (12)
            </TypoGraphy>
          </PreviewContainerPadding>
        </PreviewContainer>
      </PreviewContainer2>
    </>
  );
};

const Hr = styled.hr`
  margin-top: 80px;
  width: 1178px;
  background-color: #c4c4c4;
`;

const HrSmall = styled.hr`
  width: 960px;
`;

const Text = styled.div`
  padding: 24px;
`;

const TextCategory = styled.div`
  padding: 8px;
  padding-top: 0px;
  padding-bottom: 32px;
`;
const Category = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PreviewContainer = styled.div`
  display: flex;
  margin-right: auto;
  margin-left: 72px;
`;

const PreviewPic = styled.div`
  width: 40px;
  height: 40px;
  color: black;
  background-color: black;
`;

const PreviewContainerPadding = styled.div`
  margin: 12px;
`;

const PreviewContainer2 = styled.div``;
