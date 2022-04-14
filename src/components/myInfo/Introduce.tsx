import React from 'react';
import styled from 'styled-components';
import { TypoGraphy } from '../TypoGraphy';
import { BsPersonCircle } from 'react-icons/Bs';
import { BiDotsVerticalRounded } from 'react-icons/Bi';
import { customColor } from 'src/constants';

export const Introduce = () => {
  return (
    <>
      <div className="userInfo">
        <TypoGraphy type={'Head'} fontWeight={'bold'} textAlign={'center'}>
          마이페이지
        </TypoGraphy>
        <Hr />
        <SignUpDate>
          <TypoGraphy>가입일자:2022.03.25</TypoGraphy>
          <DotsBtn>
            <BiDotsVerticalRounded />
          </DotsBtn>
        </SignUpDate>

        <Container1>
          <BsPersonCircle size="200px" color="skyblue" />
          <InfoDetail>
            <TextBox>
              <TypoGraphy>양파먹는 소녀</TypoGraphy>
            </TextBox>
            <TypoGraphy>19adsfasdf@gmail.com</TypoGraphy>
            <TypoGraphy>내가 쓴 글 수</TypoGraphy>
            <TypoGraphy color={'lightBrown'}>12</TypoGraphy>
            <TypoGraphy>내가 쓴 댓글 수</TypoGraphy>
            <TypoGraphy>12</TypoGraphy>
            <TypoGraphy>좋아요한 글 수</TypoGraphy>
            <TypoGraphy>12</TypoGraphy>
          </InfoDetail>
        </Container1>

        <TextBox2>
          <TypoGraphy>자기 소개를 작성해주세요</TypoGraphy>
        </TextBox2>
        <InfoBtns>
          <button>
            <TypoGraphy>프로필 저장</TypoGraphy>
          </button>
          <button>
            <TypoGraphy>로그아웃</TypoGraphy>
          </button>
        </InfoBtns>
      </div>
      <div className="myPost">
        <TypoGraphy>내가 작성한 글</TypoGraphy>
        <TypoGraphy>정보</TypoGraphy>
        <TypoGraphy>모두의 이야기</TypoGraphy>
        <hr />
      </div>
    </>
  );
};

const Hr = styled.hr`
  width: 1178px;
`;

const SignUpDate = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

const TextBox = styled.div`
  border: 2px solid;
  width: 100%;
  padding: 0px;
`;

const DotsBtn = styled.button`
  border: 0px;
  background-color: white;
`;

const Container1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.3fr 1fr;
  padding: 16px;
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
  margin-inline: 160px;
`;

const InfoBtns = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
`;
