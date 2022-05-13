import React from 'react';
import { CustomButton } from 'src/components';
import { customColor } from 'src/constants/index';
import styled from 'styled-components';

export function ButtonBox() {
  return (
    <Wrapper>
      <CustomButton
        text="취소"
        width={120}
        backGroundColor={customColor.gray}
        color={customColor.black}
        onClick={() => {}}
      />
      <CustomButton text="등록" width={120} onClick={() => {}} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  margin: 16px 0;
  justify-content: flex-end;
`;
