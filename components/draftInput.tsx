import React, { useState } from 'react'
import {
  Editor, EditorState, RichUtils,
  getDefaultKeyBinding, KeyBindingUtil
} from 'draft-js'
import StyleHolder from './draft/StyleHolder'

export default function MyEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [bold, setBold] = useState(false)
  const [italic, setItalic] = useState(false)
  const [code, setCode] = useState(false)
  const [underline, setUnderline] = useState(false)
  const [strike, setStrike] = useState(false)
  const [hOne, setHOne] = useState(false)
  const [hTwo, setHTwo] = useState(false)
  const [hThree, setHThree] = useState(false)
  const [hFour, setHFour] = useState(false)
  const [hFive, setHFive] = useState(false)
  const [hSix, setHSix] = useState(false)
  const [blockquote, setBlockquote] = useState(false)
  const [ul, setUl] = useState(false)
  const [ol, setOl] = useState(false)
  const toggleInlineStyle = (event) => {
    event.preventDefault()
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
  const toggleBlockType = (event) => {
    event.preventDefault();
    let block = event.currentTarget.getAttribute('data-block')
    setEditorState(RichUtils.toggleBlockType(editorState, block))
    switch (block) {

      case 'header-one':
        setHOne(!hOne)
        break
      case 'header-two':
        setHTwo(!hTwo)
        break
      case 'header-three':
        setHThree(!hThree)
        break
      case 'header-four':
        setHFour(!hFour)
        break
      case 'header-five':
        setHFive(!hFive)
        break
      case 'header-six':
        setHSix(!hSix)
        break
      case 'blockquote':
        setBlockquote(!blockquote)
        break
      case 'unordered-list-item':
        setUl(!ul)
        break
      case 'ordered-list-item':
        setOl(!ol)
        break

      default:
        break;
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
          return 'strikethrough'
        case "c":
          event.preventDefault()
          return 'code'
        default:
          break
      }
    }
    return getDefaultKeyBinding(event)
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
        toggleBlockType={toggleBlockType}
        hOne={hOne}
        hTwo={hTwo}
        hThree={hThree}
        hFour={hFour}
        hFive={hFive}
        hSix={hSix}
        ul={ul}
        ol={ol}
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