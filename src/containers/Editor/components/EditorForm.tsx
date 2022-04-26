import React, { useRef, useEffect } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { useState } from 'react';

function EditorForm(): JSX.Element {
  const editorRef = useRef<Editor>(null);

  const [text, setText] = useState('');

  // useEffect(() => {
  //   if (editorRef.current) {
  //     editorRef.current.getInstance().removeHook('addImageBlobHook');

  //     editorRef.current
  //       .getInstance()
  //       .addHook('addImageBlobHook', (blob, callback) => {
  //         const s3config = {
  //           bucketName: process.env.REACT_APP_BUCKET_NAME as string,
  //           region: process.env.REACT_APP_REGION as string,
  //           accessKeyId: process.env.REACT_APP_ACCESS_ID as string,
  //           secretAccessKey: process.env.REACT_APP_ACCESS_KEY as string,
  //         };
  //       });
  //   }
  // }, []);

  return (
    <Editor
      placeholder="내용을 입력해주세요"
      previewStyle="vertical"
      height="800px"
      initialEditType="markdown"
      useCommandShortcut={true}
      plugins={[colorSyntax]}
      ref={editorRef}
    />
  );
}

export default EditorForm;
