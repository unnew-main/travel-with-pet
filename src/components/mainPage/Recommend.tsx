import React from 'react';
import { TypoGraphy } from 'src/components';
import { customColor } from 'src/constants';
type Props = {
  children: React.ReactNode;
};
export const Recommend = ({ children }: Props) => {
  return (
    <TypoGraphy type="body1" color={customColor.gray} fontWeight="bold">
      {children}
    </TypoGraphy>
  );
};
