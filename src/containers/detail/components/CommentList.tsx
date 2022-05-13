import { CustomButton, TypoGraphy } from 'src/components';
import { customColor } from 'src/constants';
import styled from 'styled-components';
import { AiOutlineAlert } from 'react-icons/ai';
import { CommentsType } from 'src/dummy/comments';
import { Comment } from './';
import { useState } from 'react';

type Props = {
  commentListProps: CommentsType[];
};
export const CommentList = ({ commentListProps }: Props) => {
  const handleReportButton = () => {};

  return (
    <Container>
      <HeaderWrapper>
        <TitleWrapper>
          <TypoGraphy type="body1" fontWeight="bold">
            댓글
          </TypoGraphy>
        </TitleWrapper>
        <ReportWrapper onClick={handleReportButton}>
          <IconWrapper>
            <AiOutlineAlert />
          </IconWrapper>
          <TypoGraphy type="body1" color={customColor.gray}>
            신고하기
          </TypoGraphy>
        </ReportWrapper>
      </HeaderWrapper>
      <Line />

      <CommentWrapper>
        {commentListProps.map(data => (
          <Comment key={data.id} data={data} />
        ))}
      </CommentWrapper>

      <InputWrapper>
        <Input />
        <ButtonWrapper>
          <CustomButton text="댓글작성" width={130} />
        </ButtonWrapper>
      </InputWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-bottom: 20px;
`;

// -------------------Header---------------------------

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  width: 100%;
  max-width: 1178px;
  margin: auto;
`;
const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid ${customColor.gray};
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
const ReportWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border: none;
  background: none;
  :hover {
    cursor: pointer;
    div {
      font-weight: bold;
    }
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: ${customColor.gray};
  font-size: 20px;
  margin-right: 5px;
`;

const CommentWrapper = styled.div`
  width: 100%;
  max-width: 1178px;
`;

// -------------------Bottom---------------------------
const InputWrapper = styled.div`
  width: 100%;
  max-width: 1178px;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const Input = styled.textarea`
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  border: 2px solid ${customColor.gray};
  border-radius: 10px;
  padding: 10px;
  resize: none;
  :focus {
    outline: none;
    border-color: ${customColor.brownDark};
  }
`;
const ButtonWrapper = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
