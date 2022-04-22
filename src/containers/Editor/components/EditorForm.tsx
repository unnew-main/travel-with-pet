import React, { useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

function EditorForm(): JSX.Element {
  const editRef: any = useRef();

  return (
    <Editor
      placeholder="내용을 입력해주세요"
      previewStyle="vertical"
      height="800px"
      initialEditType="markdown"
      useCommandShortcut={true}
      plugins={[colorSyntax]}
      ref={editRef}
    />
  );
}

export default EditorForm;
