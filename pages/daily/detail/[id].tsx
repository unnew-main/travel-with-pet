import type { NextPage } from 'next';
import { DailyDetailPage } from 'src/containers/detail/DailyDetailPage';

type Props = { id: number };

const DailyDetail: NextPage<Props> = ({ id }) => {
  return <DailyDetailPage id={id} />;
};

export async function getServerSideProps(context: { query: { id: number } }) {
  const { id } = context.query;
  console.log(id);

  // TODO: id 를 통해 detail 정보 가져오기
  // TODO: return detail Data
  return { props: { id } };
}

export default DailyDetail;
