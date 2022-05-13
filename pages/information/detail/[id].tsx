import type { NextPage } from 'next';
import { InformationDetailPage } from 'src/containers/detail/InformationDetailPage';

type Props = { id: number };

const InformationDetail: NextPage<Props> = ({ id }) => {
  return <InformationDetailPage id={id} />;
};

export async function getServerSideProps(context: { query: { id: number } }) {
  const { id } = context.query;
  console.log(id);

  // TODO: id 를 통해 detail 정보 가져오기
  // TODO: return detail Data
  return { props: { id } };
}

export default InformationDetail;
