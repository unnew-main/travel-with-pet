import type { NextPage } from 'next';
import { DetailPage } from 'src/containers/detail/DetailPage';

const Detail: NextPage = () => {
  return <DetailPage />;
};

export async function getServerSideProps(context: { query: { id: number } }) {
  const { id } = context.query;
  console.log(id);

  // TODO: id 를 통해 detail 정보 가져오기
  // TODO: return detail Data
}

export default Detail;
