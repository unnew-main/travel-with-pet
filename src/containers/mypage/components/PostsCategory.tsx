import { TypoGraphy } from 'src/components';
import styled from 'styled-components';
import { customColor } from 'src/constants';
import { useState } from 'react';
import { RuleTester } from 'eslint';

export const PostsCategory = ({ children }) => {
  const [tabState, setTabState] = useState({
    tabInfo: true,
    tabOurStory: false,
  });

  const tabHandler = () => {
    setTabState(!tabState);
  };
  return (
    <>
      <Hr />
      <Text>
        <TypoGraphy type="h1" fontWeight="bold">
          내가 작성한 댓글{children}
        </TypoGraphy>
      </Text>
      <Category>
        <TextCategory>
          <TypoGraphy
            type="body1"
            fontWeight="bold"
            color={customColor.brownDark}
          >
            정보
          </TypoGraphy>
        </TextCategory>
        <TextCategory>
          <TypoGraphy type="body1" fontWeight="bold" color={customColor.gray}>
            모두의 이야기
          </TypoGraphy>
        </TextCategory>
      </Category>
    </>
  );
};

const Hr = styled.hr`
  margin-top: 80px;
  width: 1178px;
  background-color: #c4c4c4;
`;

const Text = styled.div`
  padding: 24px;
`;

const Category = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextCategory = styled.div`
  padding: 8px;
  padding-top: 0px;
  padding-bottom: 32px;
`;
