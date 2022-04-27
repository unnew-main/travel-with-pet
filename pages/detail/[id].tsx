import type { NextPage } from 'next';
import { DetailPage } from 'src/containers/detail/DetailPage';

const Detail: NextPage = ({ id }) => {
  return <DetailPage id={id} />;
};

export async function getServerSideProps(context: { query: { id: number } }) {
  const { id } = context.query;
  console.log(id);

  // TODO: id 를 통해 detail 정보 가져오기
  // TODO: return detail Data
  return { props: { id } };
}

export default Detail;
