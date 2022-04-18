import { Footer } from 'src/components/footer/Footer';
import type { NextPage } from 'next';

const testPage: NextPage = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      testPage
      <Footer />
    </div>
  );
};

export default testPage;
