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
  const [highlight, setHighlight] = useState(false)
  const [hOne, setHOne] = useState(false)
  const [hTwo, setHTwo] = useState(false)
  const [hThree, setHThree] = useState(false)
  const [hFour, setHFour] = useState(false)
  const [hFive, setHFive] = useState(false)
  const [hSix, setHSix] = useState(false)
  const [blockquote, setBlockquote] = useState(false)
  const [ul, setUl] = useState(false)
  const [ol, setOl] = useState(false)
  const styleMap = {
    'HIGHLIGHT': {
      'backgroundColor': '#faed27',
    }
  }
  const toggleInlineStyle = (event) => {
    event.preventDefault()
    let style = event.currentTarget.getAttribute('data-style')
    setEditorState(RichUtils.toggleInlineStyle(editorState, style))
    toggleStyleValue(style)
  }
  const toggleStyleValue = (styleValue) => {
    switch (styleValue) {
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
      case "HIGHLIGHT":
        setHighlight(!highlight)
        break
      default:
        break
    }
  }
  const toggleBlockType = (event) => {
    event.preventDefault();
    let block = event.currentTarget.getAttribute('data-block')
    setEditorState(RichUtils.toggleBlockType(editorState, block))
    toggleBlockValue(block)
  }
  const toggleBlockValue = (blockValue) => {
    setHOne(false)
    setHTwo(false)
    setHThree(false)
    setHFour(false)
    setHFive(false)
    setHSix(false)
    setBlockquote(false)
    setUl(false)
    setOl(false)

    switch (blockValue) {
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
    // inline formatting key commands handles bold, italic, underline
    let newEditorState = RichUtils.handleKeyCommand(editorState, command)
    // inline formatting key commands handles strikethrough, code
    if (!newEditorState) {
      if (command.type === "style") {
        newEditorState = RichUtils.toggleInlineStyle(editorState, command.value.toUpperCase())
        toggleStyleValue(command.value.toUpperCase())
      } else {
        newEditorState = RichUtils.toggleBlockType(editorState, command.value)
        toggleBlockValue(command.value)
      }
    }
    if (newEditorState) {
      setEditorState(newEditorState)
      return 'handled';
    }

    return 'not-handled';
  }
  let keyBindingFunction = (event) => {
    if (KeyBindingUtil.hasCommandModifier(event)) {
      switch (event.key) {
        case "s":
          event.preventDefault()
          return { type: "style", value: 'strikethrough' }
        case "i":
          event.preventDefault()
          return { type: "style", value: 'italic' }
        case "b":
          event.preventDefault()
          return { type: "style", value: 'bold' }
        case "j":
          event.preventDefault()
          return { type: "style", value: 'code' }
        case "h":
          event.preventDefault()
          return { type: "style", value: 'highlight' }
        case "1":
          event.preventDefault()
          return { type: "block", value: 'header-one' }
        case "2":
          event.preventDefault()
          return { type: "block", value: 'header-two' }
        case "3":
          event.preventDefault()
          return { type: "block", value: 'header-three' }
        case "4":
          event.preventDefault()
          return { type: "block", value: 'header-four' }
        case "5":
          event.preventDefault()
          return { type: "block", value: 'header-five' }
        case "6":
          event.preventDefault()
          return { type: "block", value: 'header-six' }
        case "q":
          event.preventDefault()
          return { type: "block", value: 'blockquote' }
        case "u":
          event.preventDefault()
          return { type: "block", value: 'unordered-list-item' }
        case "i":
          event.preventDefault()
          return { type: "block", value: 'ordered-list-item' }
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
        highlight={highlight}
        toggleInlineStyle={toggleInlineStyle}
        toggleBlockType={toggleBlockType}
        hOne={hOne}
        hTwo={hTwo}
        hThree={hThree}
        hFour={hFour}
        hFive={hFive}
        hSix={hSix}
        blockquote={blockquote}
        ul={ul}
        ol={ol}
      />
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        handleKeyCommand={handleKeyCommand}
        keyBindingFn={keyBindingFunction}
        customStyleMap={styleMap}
      />
    </div>
  </>
}