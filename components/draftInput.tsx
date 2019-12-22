import React, { useState } from 'react'
import {
  Editor, EditorState, RichUtils,
  getDefaultKeyBinding, KeyBindingUtil
} from 'draft-js'

function StyleHolder(props) {
  function StyleButtons(props) {
    let stylesArray = [
      {
        value: 'Bold',
        style: 'BOLD'
      },

      {
        value: 'Italic',
        style: 'ITALIC'
      },

      {
        value: 'Underline',
        style: 'UNDERLINE'
      },

      {
        value: 'Strikethrough',
        style: 'STRIKETHROUGH'
      },

      {
        value: 'Code',
        style: 'CODE'
      }
    ]
    return (
      <>
        <style jsx>{`
      input{
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
      .strikethrough{
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
        {stylesArray.map(element =>
          <input
            type="button"
            className={element.style.toLowerCase()}
            value={element.style[0]}
            data-style={element.style}
            onMouseDown={props.toggleInlineStyle}
            key={element.style}
          />
        )}
      </>
    )
  }

  return (
    <>
      <style jsx>{`
      .styleHolder{
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
    `}</style>
      <div className="styleHolder">
        <StyleButtons
          bold={props.bold}
          italic={props.italic}
          code={props.code}
          strike={props.strike}
          underline={props.underline}
          toggleInlineStyle={props.toggleInlineStyle} />
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
  let handleKeyCommand = (command) => {
    // inline formatting key commands handles bold, italic, code, underline
    let newEditorState = RichUtils.handleKeyCommand(editorState, command)
    // inline formatting key commands handles strikethrough
    if (!newEditorState)
    switch (command) {
      case 'strikethrough':
        newEditorState = RichUtils.toggleInlineStyle(editorState, 'STRIKETHROUGH')        
        break
      case 'code':
        newEditorState = RichUtils.toggleInlineStyle(editorState, 'CODE')        
        break;
    
      default:
        break;
    }
    if (newEditorState) {
      setEditorState(newEditorState)
      switch (`${command}`.toUpperCase()) {
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
      return 'handled';
    }

    return 'not-handled';
  }
  let keyBindingFunction = (event) => {
    if (KeyBindingUtil.hasCommandModifier(event)) {
      switch (event.key) {
        case "s":
          event.preventDefault()
          return 'strikethrough';
        case "c":
          event.preventDefault()
          return 'code';
        default:
          break;
      }
    }
    return getDefaultKeyBinding(event);
  }


  return <>
    <style jsx>{`
      .editor{
        width: 50%;
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
        handleKeyCommand={handleKeyCommand}
        keyBindingFn={keyBindingFunction}
      />
    </div>
  </>
}