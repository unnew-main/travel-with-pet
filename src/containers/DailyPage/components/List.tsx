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
  margin-top: 40px;
  overflow-y: hidden;
`;
