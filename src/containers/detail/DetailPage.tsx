import * as S from './DetailPage.style';
import { DetailBody, DetailHeader, CommentList } from './components';
import { photoCardInfo as dummyPhotoData } from 'src/dummy/photoCardInfo';
import { comments } from 'src/dummy/comments';
import { useState } from 'react';
type Props = {
  id: number;
};

const dummyData = {
  ...dummyPhotoData[0],
  detailArea: '경기도 군포 당정 한세대학교 정문 옆 애견카페',
  View: 23,
};
export const DetailPage = ({ id }: Props) => {
  const [likeSelected, setLikeSelected] = useState(false);

  console.log(dummyPhotoData[0]);
  return (
    <S.Container>
      <DetailHeader detailData={dummyData} />
      <DetailBody
        likeSelected={likeSelected}
        setLikeSelected={setLikeSelected}
      />
      <CommentList data={comments} />
    </S.Container>
  );
};
