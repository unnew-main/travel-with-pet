import React from 'react';
import styled from 'styled-components';
import { TypoGraphy } from '../../../components/TypoGraphy';
import { customColor } from 'src/constants';
import { PhotoCardList } from 'src/components';
import { photoCardInfo } from 'src/dummy/photoCardInfo';
import { TabsCategory } from './TabsCategory';

export const MyLikes = () => {
  return (
    <>
      <TabsCategory children={'내가 좋아요한 글'} />
      {/* <PhotoCardList type="MyPage" photoCardInfo={photoCardInfo} /> */}
    </>
  );
};
