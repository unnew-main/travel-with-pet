import type { NextPage } from 'next';
import { TypoGraphy, Seo, CustomButton } from 'src/components';
import EditorForm from './components/EditorForm';
import { customColor } from 'src/constants/customColor';

export const EditorMainPage: NextPage = () => {
  return (
    <div>
      <Seo title="글쓰기" />
      <TypoGraphy fontWeight="bold">컴포넌트들</TypoGraphy>
      <div>
        <CustomButton
          text="취소"
          width={120}
          backGroundColor={customColor.gray}
          color={customColor.black}
          onClick={() => alert('취소')}
        />
        <CustomButton text="등록" width={120} onClick={() => alert('취소')} />
      </div>
      {/* <EditorForm /> */}
    </div>
  );
};
