import React, { useState } from "react";

// Components
import { EditorState, convertToRaw, ContentState , convertFromHTML} from "draft-js";
import draftToHtml from "draftjs-to-html";
import dynamic from 'next/dynamic';
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
)

const RichEditor = props => {

    const value = props.data ? props.data : ''    
    const [editorState, setEditorState] = useState(() => {
      const contentState =  ContentState.createFromBlockArray(
        convertFromHTML(value)
      )  
      return EditorState.createWithContent(contentState)
    }
  )

  const onEditorStateChange = editorState => {
    setEditorState(editorState);
    return props.onChange(
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
  };

  return (
    <>
      <div className="editor">
        <Editor
          editorState={editorState}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          onEditorStateChange={onEditorStateChange}
          toolbar={{
            options: ['inline', 'blockType', 'list'],
            inline: { inDropdown: false, options:['bold','italic','underline']},
            list: { inDropdown: false,options: ['unordered', 'ordered'], },
            blockType: {inDropdown: false, options:['Normal','H2','H3']}
        }}
        />
      </div>
    </>
  );
};

export default RichEditor;
