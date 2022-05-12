import { TypoGraphy } from 'src/components';
import styled from 'styled-components';
import { customColor } from 'src/constants';
import { useState } from 'react';

export const TabsCategory = ({ children }) => {
  // type ToggleProps = {
  //   selected?: string;
  // };

  const [tab, setTab] = useState('A');

  return (
    <>
      <Hr />
      <Title>
        <TypoGraphy type="h1" fontWeight="bold">
          {children}
        </TypoGraphy>
      </Title>
      <Tabs>
        <TabA
          selected={tab}
          onClick={() => {
            setTab('A');
          }}
        >
          <TypoGraphy
            type="body1"
            fontWeight="bold"
            color={customColor.brownDark}
          >
            정보
          </TypoGraphy>
        </TabA>
        <TabB
          selected={tab}
          onClick={() => {
            setTab('B');
          }}
        >
          <TypoGraphy type="body1" fontWeight="bold">
            모두의 이야기
          </TypoGraphy>
        </TabB>
      </Tabs>
    </>
  );
};

const Hr = styled.hr`
  margin-top: 80px;
  width: 1178px;
  background-color: #c4c4c4;
`;

const Title = styled.div`
  padding: 24px;
`;

const Tabs = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TabA = styled.div`
  padding: 8px;
  padding-top: 0px;
  padding-bottom: 32px;
  & div {
    color: ${props =>
      props.selected === 'A' ? customColor.brownDark : customColor.gray};
  }
`;

const TabB = styled.div`
  padding: 8px;
  padding-top: 0px;
  padding-bottom: 32px;
  & div {
    color: ${props =>
      props.selected !== 'A' ? customColor.brownDark : customColor.gray};
  }
`;
