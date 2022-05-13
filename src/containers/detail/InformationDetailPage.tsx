import * as S from './DetailPage';
import { DetailBody, InformationDetailHeader, CommentList } from './components';
import { photoCardInfo as dummyPhotoData } from 'src/dummy/photoCardInfo';
import { comments } from 'src/dummy/comments';
import { useState } from 'react';
import { OwnerType } from 'src/types/user';
type Props = {
  detailInfo: {
    _id: string;
    title: string;
    category: string;
    city: string;
    detailCity: string;
    tags: string;
    contents: string;
    heart: number;
    commentCount: number;
    comments: any[];
    owner: OwnerType;
    createdAt: Date;
    __v: number;
  };
};

// const dummyData = {
//   ...dummyPhotoData[0],
//   detailArea: '경기도 군포 당정 한세대학교 정문 옆 애견카페',
//   View: 23,
// };
export const InformationDetailPage = ({ detailInfo }: Props) => {
  // const [likeSelected, setLikeSelected] = useState(false);

  return (
    <S.Container>
      <InformationDetailHeader
        headerInfo={{
          title: detailInfo.title,
          category: detailInfo.category,
          city: detailInfo.city,
          detailCity: detailInfo.detailCity,
          tags: detailInfo.tags,
          owner: detailInfo.owner.name,
          createdAt: detailInfo.createdAt,
        }}
      />
      <DetailBody
      // likeSelected={likeSelected}
      // setLikeSelected={setLikeSelected}
      />
      <CommentList commentListProps={comments} />
    </S.Container>
  );
};
