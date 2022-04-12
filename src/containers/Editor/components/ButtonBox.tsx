import * as React from 'react';
import { TypoGraphy, Seo, CustomButton } from 'src/components';
import { customColor } from 'src/constants/customColor';
import styled from 'styled-components';

export const ButtonBox: React.FC = ({}) => {
  return (
    <Wrapper>
      <CustomButton
        text="취소"
        width={120}
        backGroundColor={customColor.gray}
        color={customColor.black}
        onClick={() => alert('취소')}
      />
      <CustomButton text="등록" width={120} onClick={() => alert('취소')} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  margin: 16px 0;
  justify-content: flex-end;
`;
