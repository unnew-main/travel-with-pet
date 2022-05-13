import { useRouter } from 'next/router';
import React from 'react';
import { CustomButton } from 'src/components';
import { customColor } from 'src/constants/index';
import { noBtn, twoBtn } from 'src/utils/modal';
import styled from 'styled-components';

export function ButtonBox() {
  const router = useRouter();

  const clickAdd = () => {
    noBtn('글을 등록하였습니다.', () =>
      setTimeout(() => {
        router.push('/information');
      }, 2000),
    );
  };

  const clickCancel = () => {
    twoBtn('글 쓰기를 취소하시겠습니까?', () =>
      setTimeout(() => {
        router.push('/information');
      }, 2000),
    );
  };

  return (
    <Wrapper>
      <CustomButton
        text="취소"
        width={120}
        backGroundColor={customColor.gray}
        color={customColor.black}
        onClick={() => clickCancel()}
      />
      <CustomButton text="등록" width={120} onClick={() => clickAdd()} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  margin: 16px 0;
  justify-content: flex-end;
`;
