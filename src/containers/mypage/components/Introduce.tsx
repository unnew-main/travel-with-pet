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
        <Hr />
        <SignUpDate>
          <TypoGraphy>가입일자 : 2022. 03. 25 </TypoGraphy>
          <BtnDots>
            <BiDotsVerticalRounded size="16px" />
          </BtnDots>
        </SignUpDate>

        <ContainerInfo>
          {/* <input
            type="file"
            className="imgFile"
            style={{ display: 'none' }}
            // onChange={props.onChange}
          > */}
          <BsPersonCircle size="200px" color="skyblue" />
          {/* </input> */}
          <ContainerInfoDetail>
            <NickName placeholder="양파먹는 소녀" />
            <TextEmail>
              <TypoGraphy>19adsfasdf@gmail.com</TypoGraphy>
            </TextEmail>
            <PostsWrapper>
              <TextPosts>
                <TypoGraphy>내가 쓴 글 수</TypoGraphy>
                <TypoGraphy>내가 쓴 댓글 수</TypoGraphy>
                <TypoGraphy>내가 좋아요한 글 수</TypoGraphy>
              </TextPosts>
              <PostsCount>
                <TypoGraphy color={customColor.brownDark} fontWeight="bold">
                  12
                </TypoGraphy>
                <TypoGraphy color={customColor.brownDark} fontWeight="bold">
                  12
                </TypoGraphy>
                <TypoGraphy color={customColor.brownDark} fontWeight="bold">
                  12
                </TypoGraphy>
              </PostsCount>
            </PostsWrapper>
          </ContainerInfoDetail>
        </ContainerInfo>

        <TextIntroduce placeholder="자기소개를 입력해주세요" />
        <Btns>
          <BtnSave
            onClick={toggleHandler}
            style={
              isSave
                ? { backgroundColor: customColor.brown }
                : { backgroundColor: customColor.brownDark }
            }
          >
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

const Hr = styled.hr`
  width: 1178px;
  height: 1px;
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

const NickName = styled.input`
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

const PostsWrapper = styled.div`
  display: flex;
  justify-content: column;
  gap: 40px;
`;
const TextPosts = styled.div`
  margin-inline: 8px;
`;

const PostsCount = styled.div`
  padding-left: 8px;
`;

const TextIntroduce = styled.input`
  height: 160px;
  width: 1178px;
  border: 1px solid;
  border-radius: 16px;
  /* margin-inline: 160px; */
  margin-top: 40px;
  /* padding: 16px; */
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
