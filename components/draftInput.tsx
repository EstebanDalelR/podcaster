import React, { useState } from 'react'
import { Editor, EditorState, RichUtils } from 'draft-js'
function StyleHolder(props) {
  return (
    <>
      <style jsx>{`
      .styleHolder{
        display: flex;
        justify-content: space-evenly;
        width: 100%;
      }
      input{
        border: none;
        background-color: lightgrey;
        border: 1px solid darkgrey;
      }
      .bold{
        font-weight: bold;
        ${props.bold
          ? `
          background-color: darkgrey;
          `
          : ""}
      }
      .italic {
        font-style: italic;
        font-family: serif;
        ${props.italic
          ? `
          background-color: darkgrey;
          `
          : ""}      
        }
      .strike{
        text-decoration: line-through;
        ${props.strike
          ? `
          background-color: darkgrey;
          `
          : ""}
      }
      .underline{
        text-decoration: underline;
        ${props.underline
          ? `
          background-color: darkgrey;
          `
          : ""}
      }
      .code{
        font-family: monospace;
        ${props.code
          ? `
          background-color: darkgrey;
          `
          : ""}
        }
    `}</style>
      <div className="styleHolder">
        <input
          type="button"
          className="bold"
          value="B"
          data-style="BOLD"
          onMouseDown={props.toggleInlineStyle}
        />

        <input
          type="button"
          className="italic"
          value="I"
          data-style="ITALIC"
          onMouseDown={props.toggleInlineStyle}
        />
        <input
          type="button"
          className="underline"
          value="U"
          data-style="UNDERLINE"
          onMouseDown={props.toggleInlineStyle}
        />
        <input
          type="button"
          className="strike"
          value="S"
          data-style="STRIKETHROUGH"
          onMouseDown={props.toggleInlineStyle}
        />
        <input
          type="button"
          className="code"
          value="C"
          data-style="CODE"
          onMouseDown={props.toggleInlineStyle}
        />
      </div>
    </>
  )
}
export default function MyEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [bold, setBold] = useState(false)
  const [italic, setItalic] = useState(false)
  const [code, setCode] = useState(false)
  const [underline, setUnderline] = useState(false)
  const [strike, setStrike] = useState(false)
  const toggleInlineStyle = (event) => {
    event.preventDefault();
    let style = event.currentTarget.getAttribute('data-style')
    setEditorState(RichUtils.toggleInlineStyle(editorState, style))
    switch (style) {
      case "ITALIC":
        setItalic(!italic)
        break
      case "BOLD":
        setBold(!bold)
        break
      case "CODE":
        setCode(!code)
        break
      case "UNDERLINE":
        setUnderline(!underline)
        break
      case "STRIKETHROUGH":
        setStrike(!strike)
        break
      default:
        break
    }
  }
  return <>
    <style jsx>{`
      .editor{
        width: 200px;
        height: 200px;
        background-color: moccasin;
        color: black;
      }
    `}</style>
      <div className="editor">
    <StyleHolder
      bold={bold}
      italic={italic}
      code={code}
      strike={strike}
      underline={underline}
      toggleInlineStyle={toggleInlineStyle}
    />
      <Editor
        editorState={editorState}
        onChange={setEditorState}
      />
    </div>
  </>
}