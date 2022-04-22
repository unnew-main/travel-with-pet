import React from 'react';
import { CustomButton } from 'src/components';
import { customColor } from 'src/constants/index';
import styled from 'styled-components';

export function ButtonBox() {
  const handleCancel = () => {
    // modal -> 홈으로 돌아가시겠습니까?
    // 예 -> 홈으로
    // 아니요 -> 모달 닫기
    alert('취소');
  };
  const handleAdd = () => {
    // 1. data 서버에 등록하기 (post)
    // 2. modal -> 등록되었습니다
    // 3. 홈으로
    alert('등록');
  };
  return (
    <Wrapper>
      <CustomButton
        text="취소"
        width={120}
        backGroundColor={customColor.gray}
        color={customColor.black}
        onClick={handleCancel}
      />
      <CustomButton text="등록" width={120} onClick={handleAdd} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  margin: 16px 0;
  justify-content: flex-end;
`;
