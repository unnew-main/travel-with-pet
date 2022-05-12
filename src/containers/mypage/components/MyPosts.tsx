import React from 'react';
import { PhotoCardList } from 'src/components';
import styled from 'styled-components';
import { TypoGraphy } from '../../../components/TypoGraphy';
import { customColor } from 'src/constants';
import { photoCardInfo } from 'src/dummy/photoCardInfo';
import { TabsCategory } from './TabsCategory';
export const MyPosts = () => {
  return (
    <>
      <TabsCategory children={'내가 작성한 글'} />
      {/* <PhotoCardList type="MyPage" photoCardInfo={photoCardInfo} /> */}
    </>
  );
};
