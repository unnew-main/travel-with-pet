import { NextPage } from 'next';
import React from 'react';
import { FixedButton, Search, Notice } from './components';

export const MainPage: NextPage = () => {
  return (
    <>
      <Search />
      <Notice />
      <FixedButton />
    </>
  );
};

