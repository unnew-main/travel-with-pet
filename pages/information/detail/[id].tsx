import type { NextPage } from 'next';
import { InformationDetailPage } from 'src/containers/detail/InformationDetailPage';

type Props = { id: number };

const dummy = {
  _id: '0',
  title: 'title',
  tags: 'tags',
  category: 'category',
  city: 'city',
  detailCity: 'detailCity',

  contents: 'contents',
  heart: 0,
  commentCount: 0,
  comments: [],
  owner: {
    _id: '_id',
    email: 'test@naver.com',
    avatarUrl: 'url',
    name: 'name',
    __v: 0,
  },
  createdAt: new Date(),
  __v: 0,
};

const InformationDetail: NextPage<Props> = ({ id }) => {
  return <InformationDetailPage detailInfo={dummy} />;
};

export async function getServerSideProps(context: { query: { id: number } }) {
  const { id } = context.query;

  // TODO: id 를 통해 detail 정보 가져오기
  // TODO: return detail Data
  return { props: { id } };
}

export default InformationDetail;
