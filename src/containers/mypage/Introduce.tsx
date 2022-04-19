import React from 'react';
import styled from 'styled-components';
import { TypoGraphy } from '../../components/TypoGraphy';
import { BsPersonCircle } from 'react-icons/bs';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { customColor } from 'src/constants';

export const Introduce = () => {
  return (
    <>
      <div className="userInfo">
        <MyPageText>
          <TypoGraphy type={'Head'} fontWeight={'bold'} textAlign={'center'}>
            마이페이지
          </TypoGraphy>
        </MyPageText>
        <Hr />
        <SignUpDate>
          <TypoGraphy>가입일자 : 2022. 03. 25 </TypoGraphy>
          <BtnDots>
            <BiDotsVerticalRounded size="16px" />
          </BtnDots>
        </SignUpDate>

        <Container1>
          <BsPersonCircle size="200px" color="skyblue" />
          <InfoDetail>
            <TextBox>
              <Text>
                <TypoGraphy type="h1" fontWeight="bold">
                  양파먹는 소녀
                </TypoGraphy>
              </Text>
            </TextBox>
            <TypoGraphy>19adsfasdf@gmail.com</TypoGraphy>
            <Text>
              <TypoGraphy>내가 쓴 글 수</TypoGraphy>
              <TypoGraphy color={customColor.brownDark} fontWeight="bold">
                12
              </TypoGraphy>
            </Text>

            <TypoGraphy>내가 쓴 댓글 수</TypoGraphy>
            <TypoGraphy color={customColor.brownDark} fontWeight="bold">
              12
            </TypoGraphy>
            <TypoGraphy>좋아요한 글 수</TypoGraphy>
            <TypoGraphy color={customColor.brownDark} fontWeight="bold">
              12
            </TypoGraphy>
          </InfoDetail>
        </Container1>

        <TextBox2>
          <Text>
            <TypoGraphy color="gray">자기 소개를 작성해주세요</TypoGraphy>
          </Text>
        </TextBox2>
        <BtnInfo>
          <BtnSave>
            <TypoGraphy color="white" fontWeight="bold">
              프로필 저장
            </TypoGraphy>
          </BtnSave>
          <BtnLogout>
            <TypoGraphy fontWeight="bold">로그아웃</TypoGraphy>
          </BtnLogout>
        </BtnInfo>
      </div>
    </>
  );
};

const MyPageText = styled.div`
  position: relative;
  display: flex;
  padding: 80px;
  justify-content: center;
`;
const Hr = styled.hr`
  width: 1178px;
  height: 2px;
  background-color: #c4c4c4;
`;

const SignUpDate = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding: 8px;
`;

const TextBox = styled.div`
  border: 2px solid;
  width: 200px;
  padding: 0px;
  margin: 0px;
  color: #c4c4c4;
  border-radius: 8px;
`;

const Text = styled.div`
  margin: 16px;
`;

const BtnDots = styled.button`
  border: 0px;
  background-color: white;
`;

const Container1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 24px;
  padding-left: 160px;
  padding-top: 80px;
`;

const InfoDetail = styled.div`
  position: relative;
  left: -160px;
`;

const TextBox2 = styled.div`
  height: 160px;
  border: 2px solid;
  border-radius: 16px;
  margin-inline: 160px;
  color: #c4c4c4;
`;

const BtnInfo = styled.div`
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
