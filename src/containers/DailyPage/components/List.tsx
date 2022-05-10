import React from 'react';
import styled from 'styled-components';
import ListContents from './ListContents';
import ListHeader from './ListHeader';
export function List() {
  return (
    <Container>
      <ListHeader />
      <ListContents />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
`;
