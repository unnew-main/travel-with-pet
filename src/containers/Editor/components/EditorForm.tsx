import React, { useEffect, MutableRefObject } from 'react';
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

  useEffect(() => {
    if (forwardedRef.current) {
      forwardedRef.current.getInstance().removeHook('addImageBlobHook');

      forwardedRef.current
        .getInstance()
        .addHook('addImageBlobHook', async (blob, callback) => {
          const s3config = {
            bucketName: process.env.NEXT_PUBLIC_S3_UPLOAD_BUCKET as string,
            region: process.env.NEXT_PUBLIC_S3_UPLOAD_REGION as string,
            accessKeyId: process.env.NEXT_PUBLIC_S3_UPLOAD_KEY as string,
            secretAccessKey: process.env.NEXT_PUBLIC_S3_UPLOAD_SECRET as string,
          };

          const ReactS3Client = new S3(s3config);

          try {
            const res = await ReactS3Client.uploadFile(blob, uuidv4());
            callback(res.location, 'imageURL');
          } catch (error) {
            console.log(error);
          }
        });
    }
  }, [forwardedRef]);

  return (
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
  );
};

export default EditorForm;
