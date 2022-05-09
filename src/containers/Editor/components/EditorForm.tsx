import React, { useState, useRef, useEffect, MutableRefObject } from 'react';
import S3 from 'react-aws-s3-typescript';
import { v4 as uuidv4 } from 'uuid';
import { Editor, EditorProps } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax, {
  PluginOptions,
} from '@toast-ui/editor-plugin-color-syntax';

window.Buffer = window.Buffer || require('buffer').Buffer;

export interface TuiWithForwardedRefProps extends EditorProps {
  forwardedRef: MutableRefObject<Editor>;
  colorSyntaxOptions?: PluginOptions;
}

const EditorForm: React.FC<TuiWithForwardedRefProps> = props => {
  const { forwardedRef } = props;
  const [text, setText] = useState('');

  useEffect(() => {
    if (forwardedRef.current) {
      forwardedRef.current.getInstance().removeHook('addImageBlobHook');

      forwardedRef.current
        .getInstance()
        .addHook('addImageBlobHook', (blob, callback) => {
          const s3config = {
            bucketName: process.env.S3_BUCKET_NAME as string,
            region: process.env.S3_REGION as string,
            accessKeyId: process.env.S3_ACCESS_ID as string,
            secretAccessKey: process.env.S3_ACCESS_KEY as string,
          };

          const ReactS3Client = new S3(s3config);

          ReactS3Client.uploadFile(blob, uuidv4())
            // .then(data => callback(data.location, 'imageURL'))
            .then(data => {
              console.log(typeof data);
            })
            .catch(err => console.log(err));
        });
    }
  }, []);

  return (
    <>
      <Editor
        {...props}
        ref={forwardedRef}
        placeholder="내용을 입력해주세요"
        previewStyle="vertical"
        height="800px"
        initialEditType="markdown"
        useCommandShortcut={true}
        plugins={[colorSyntax]}
      />
      <button
        onClick={() =>
          console.log(forwardedRef.current.getInstance().getHTML())
        }
      >
        {' '}
        확인
      </button>
    </>
  );
};

export default EditorForm;
