import React from 'react';
import { TypoGraphy } from 'src/components';
// import { customColor } from 'src/constants';
import styled from 'styled-components';
// type Props = {
//   filter: string;
//   setFilter: React.Dispatch<React.SetStateAction<string>>;
// };
export function TitleAndFilter(
  // { filter, setFilter }: Props
  ) {
  return (
    <TitleWrapper>
      <TypoGraphy type="Title" fontWeight="bold">
        일상
      </TypoGraphy>
      {/* <FilterContainer>
        <FilterWrapper onClick={() => setFilter('최신순')}>
          <TypoGraphy
            type="body1"
            color={filter === '최신순' ? customColor.brownDark : customColor.gray}
            fontWeight="bold"
          >
            최신순
          </TypoGraphy>
        </FilterWrapper>
        <FilterWrapper onClick={() => setFilter('추천순')}>
          <TypoGraphy
            type="body1"
            color={filter === '추천순' ? customColor.brownDark : customColor.gray}
            fontWeight="bold"
          >
            추천순
          </TypoGraphy>
        </FilterWrapper>
      </FilterContainer> */}
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  max-width: 1178px;
`;

// const FilterContainer = styled.div`
//   display: flex;
//   gap: 0 20px;
// `;

// const FilterWrapper = styled.div`
//   cursor: pointer;
// `;
