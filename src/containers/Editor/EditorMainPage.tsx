import type { NextPage } from "next";
import { TypoGraphy, Seo } from "src/components";
import EditorForm from "./components/EditorForm";

export const EditorMainPage: NextPage = () => {
  return (
    <div>
      <Seo title="글쓰기" />
      <TypoGraphy fontWeight="bold">컴포넌트들</TypoGraphy>
      {/* <EditorForm /> */}
    </div>
  );
};
