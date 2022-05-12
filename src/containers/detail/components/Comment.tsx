import { useState } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { TypoGraphy } from 'src/components';
import { customColor } from 'src/constants';
import { CommentsType } from 'src/dummy/comments';
import styled from 'styled-components';

type Props = {
  data: CommentsType;
};

export const Comment = ({ data }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCommentReport = () => {};
  return (
    <CommentWrapper>
      <WriterWrapper>
        <TypoGraphy type="body2" fontWeight="bold">
          {data.writer}
        </TypoGraphy>
      </WriterWrapper>
      <ContentWrapper>
        <TypoGraphy type="body2">{data.content}</TypoGraphy>
      </ContentWrapper>
      <DateWrapper>
        <div>
          <TypoGraphy type="body2">{data.date}</TypoGraphy>
        </div>
        <div>
          <TypoGraphy type="body2">{data.time}</TypoGraphy>
        </div>
      </DateWrapper>
      <ModalWrapper>
        <ModalIconWrapper onClick={() => setIsModalOpen(!isModalOpen)}>
          <BiDotsVerticalRounded />
        </ModalIconWrapper>

        {isModalOpen && (
          <Modal onClick={handleCommentReport}>
            <TypoGraphy type="body2">신고하기</TypoGraphy>
          </Modal>
        )}
      </ModalWrapper>
    </CommentWrapper>
  );
};

const CommentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${customColor.gray};
`;

const WriterWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 10%;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
`;

const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 8%;
`;

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2%;
  position: relative;
`;
const ModalIconWrapper = styled.div`
  font-size: 20px;
  :hover {
    cursor: pointer;
  }
`;

const Modal = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 20px;
  width: 80px;
  height: 40px;
  border: 1px solid ${customColor.gray};
  background-color: ${customColor.white};

  border-radius: 5px;
  &:hover {
    background-color: ${customColor.grayLight};
    cursor: pointer;
  }
`;
