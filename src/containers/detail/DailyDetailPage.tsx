import * as S from './DetailPage';
import { DetailBody, CommentList, DailyDetailHeader } from './components';
import { dailyInfo } from 'src/dummy/daily';
import { comments } from 'src/dummy/comments';
import { useState } from 'react';
import { OwnerType } from 'src/types/user.type';
import { DailyBoardType } from 'src/types/board.type';
type Props = {
  detailInfo: DailyBoardType;
};

// const dummyData = {
//   ...dailyInfo[0],
//   View: 23,
// };
export const DailyDetailPage = ({ detailInfo }: Props) => {
  // const [likeSelected, setLikeSelected] = useState(false);

  return (
    <S.Container>
      <DailyDetailHeader
        headerInfo={{
          title: detailInfo.title,
          tags: detailInfo.tags,
          owner: detailInfo.owner.name,
          createdAt: detailInfo.createdAt,
        }}
      />
      <DetailBody
      // likeSelected={likeSelected}
      // setLikeSelected={setLikeSelected}
      />
      <CommentList commentListProps={detailInfo.comments} />
    </S.Container>
  );
};
