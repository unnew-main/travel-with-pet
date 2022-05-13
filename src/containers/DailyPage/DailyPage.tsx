import React, { useState } from 'react';
import { FixedButton, Notice, Search } from 'src/components';
import styled from 'styled-components';
import { List } from './components/List';
import { TitleAndFilter } from './components/TitleAndFilter';

export function DailyPage() {
  // const [filter, setFilter] = useState('최신순');

  return (
    <Container>
      <Search />
      <Notice />
      <FixedButton />
      <TitleAndFilter
      // filter={filter} setFilter={setFilter}
      />
      <List />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 200px;
`;
