import Head from "next/head";

type SeoProps = {
  title: string;
};

export const Seo: React.FC<SeoProps> = ({ title }) => {
  return (
    <Head>
      <title>(가제)강아지프로젝트 | {title}</title>
    </Head>
  );
};
