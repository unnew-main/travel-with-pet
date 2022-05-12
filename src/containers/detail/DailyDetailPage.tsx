import * as S from './DetailPage';
import { DetailBody, CommentList, DailyDetailHeader } from './components';
import { dailyInfo } from 'src/dummy/daily';
import { comments } from 'src/dummy/comments';
import { useState } from 'react';
type Props = {
  id: number;
};

const dummyData = {
  ...dailyInfo[0],
  View: 23,
};
export const DailyDetailPage = ({ id }: Props) => {
  const [likeSelected, setLikeSelected] = useState(false);

  return (
    <S.Container>
      <DailyDetailHeader detailData={dummyData} />
      <DetailBody
        likeSelected={likeSelected}
        setLikeSelected={setLikeSelected}
      />
      <CommentList data={comments} />
    </S.Container>
  );
};
