import { NextPage } from 'next';
import React from 'react';
import { Notice } from 'src/components';
import { FixedButton, Search } from './components';

export const MainPage: NextPage = () => {
  return (
    <>
      <Search />
      <Notice />
      <FixedButton />
    </>
  );
};

