import React from 'react';
import styled from 'styled-components';
import { TypoGraphy } from '../../../components/TypoGraphy';
import { BsPersonCircle } from 'react-icons/bs';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { customColor } from 'src/constants';
import { useState } from 'react';

export const Introduce = () => {
  const [isSave, setIsSave] = useState(false);

  const toggleHandler = () => {
    setIsSave(!isSave);
  };

  return (
    <>
      <ContainerInfo2>
        <MyPageText>
          <TypoGraphy type={'Head'} fontWeight={'bold'} textAlign={'center'}>
            마이페이지
          </TypoGraphy>
        </MyPageText>
        <HrBold />
        <SignUpDate>
          <TypoGraphy>가입일자 : 2022. 03. 25 </TypoGraphy>
          <BtnDots>
            <BiDotsVerticalRounded size="16px" />
          </BtnDots>
        </SignUpDate>

        <ContainerInfo>
          <BsPersonCircle size="200px" color="skyblue" />
          <ContainerInfoDetail>
            <TextNickName>
              <TypoGraphy type="h1" fontWeight="bold">
                양파먹는 소녀
              </TypoGraphy>
            </TextNickName>
            <TextEmail>
              <TypoGraphy>19adsfasdf@gmail.com</TypoGraphy>
            </TextEmail>
            <TextPosts>
              <TypoGraphy>내가 쓴 글 수</TypoGraphy>
              <TextPostsCount>
                <TypoGraphy color={customColor.brownDark} fontWeight="bold">
                  12
                </TypoGraphy>
              </TextPostsCount>
            </TextPosts>
            <TextPosts>
              <TypoGraphy>내가 쓴 댓글 수</TypoGraphy>
              <TextPostsCount>
                <TypoGraphy color={customColor.brownDark} fontWeight="bold">
                  12
                </TypoGraphy>
              </TextPostsCount>
            </TextPosts>
            <TextPosts>
              <TypoGraphy>내가 좋아요한 글 수</TypoGraphy>
              <TextPostsCount>
                <TypoGraphy color={customColor.brownDark} fontWeight="bold">
                  12
                </TypoGraphy>
              </TextPostsCount>
            </TextPosts>
          </ContainerInfoDetail>
        </ContainerInfo>

        <TextIntroduce>
          <TypoGraphy color="gray">자기 소개를 작성해주세요</TypoGraphy>
        </TextIntroduce>
        <Btns>
          <BtnSave onClick={toggleHandler}>
            <TypoGraphy color="white" fontWeight="bold">
              {isSave ? '프로필 저장' : '프로필 수정'}
            </TypoGraphy>
          </BtnSave>
          <BtnLogout>
            <TypoGraphy fontWeight="bold">로그아웃</TypoGraphy>
          </BtnLogout>
        </Btns>
      </ContainerInfo2>
    </>
  );
};

const MyPageText = styled.div`
  position: relative;
  display: flex;
  padding: 80px;
  justify-content: center;
`;

const HrBold = styled.div`
  width: 1178px;
  height: 4px;
  background-color: #c4c4c4;
  margin-bottom: 8px;
`;

const SignUpDate = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding: 8px;
`;

const BtnDots = styled.button`
  border: 0px;
  background-color: white;
`;

const ContainerInfo = styled.div`
  display: flex;
  padding-left: 184px;
  padding-top: 40px;
`;

const ContainerInfoDetail = styled.div`
  padding: 16px;
  padding-left: 56px;
`;

const TextNickName = styled.div`
  border: 2px solid;
  width: 400px;
  padding: 10px;
  color: #c4c4c4;
  border-radius: 8px;
`;

const TextEmail = styled.div`
  padding: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const TextPosts = styled.div`
  display: flex;
  justify-content: column;
  margin: 8px;
`;

const TextPostsCount = styled.div`
  padding-left: 8px;
`;

const TextIntroduce = styled.div`
  height: 160px;
  border: 2px solid;
  border-radius: 16px;
  margin-inline: 160px;
  margin-top: 40px;
  padding: 16px;
  color: #c4c4c4;
`;

const Btns = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const BtnSave = styled.button`
  width: 160px;
  height: 40px;
  margin: 8px;
  background-color: #7d5a50;
  border-color: #7d5a50;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BtnLogout = styled.button`
  width: 160px;
  height: 40px;
  margin: 8px;
  background-color: white;
  border-color: #7d5a50;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerInfo2 = styled.div``;
