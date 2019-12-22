import React, { useState } from 'react'
import {
  Editor, EditorState, RichUtils,
  getDefaultKeyBinding, KeyBindingUtil
} from 'draft-js'
function BlockButtons(props) {
  const blockTypeButtons = [
    {
      value: 'Heading One',
      name: "H1",
      classname: "hOne",
      block: 'header-one'
    },

    {
      value: 'Heading Two',
      classname: "hTwo",
      name: "H2",
      block: 'header-two'
    },

    {
      value: 'Heading Three',
      classname: "hThree",
      name: "H3",
      block: 'header-three'
    },
    {
      value: 'Heading Four',
      classname: "hFour",
      name: "H4",
      block: 'header-four'
    },
    {
      value: 'Heading Five',
      classname: "hFive",
      name: "H5",
      block: 'header-five'
    },
    {
      value: 'Heading Six',
      classname: "hSix",
      name: "H6",
      block: 'header-six'
    },
    {
      value: 'Blockquote',
      classname: "blockquote",
      name: `""`,
      block: 'blockquote'
    },

    {
      value: 'Unordered List',
      classname: "ul",
      name: "UL",
      block: 'unordered-list-item'
    },

    {
      value: 'Ordered List',
      classname: "ol",
      name: "OL",
      block: 'ordered-list-item'
    }
  ]
  return (
    <>
      <style jsx>{`
  input{
    background-color: lightgrey;
    border: 1px solid darkgrey;
  }

    .hOne{
      ${props.hOne
          ? `      background-color: darkgrey;`
          : ""}
    }
    .hTwo{
      ${props.hTwo
          ? `      background-color: darkgrey;`
          : ""}
    }
    .hThree{
      ${props.hThree
          ? `      background-color: darkgrey;`
          : ""}
    }
    .hFour{
      ${props.hFour
          ? `      background-color: darkgrey;`
          : ""}
    }
    .hFive{
      ${props.hFive
          ? `      background-color: darkgrey;`
          : ""}
    }
    .hSix{
      ${props.hSix
          ? `      background-color: darkgrey;`
          : ""}
    }

    .blockquote{
      ${props.blockqoute
          ? `      background-color: darkgrey;`
          : ""}
    }
    .ul{
      ${props.ul
          ? `      background-color: darkgrey;`
          : ""}
    }
    .ol{
      ${props.ol
          ? `      background-color: darkgrey;`
          : ""}
    }
`}</style>
      {blockTypeButtons.map(element =>

        <input
          type="button"
          className={element.classname}
          value={element.name}
          data-block={element.block}
          onMouseDown={props.toggleBlockType}
          key={element.block}
        />
      )}
    </>
  )
}
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
function StyleHolder(props) {

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
          toggleInlineStyle={props.toggleInlineStyle}
        />
        <BlockButtons
          toggleBlockType={props.toggleBlockType}
          hOne={props.hOne}
          hTwo={props.hTwo}
          hThree={props.hThree}
          hFour={props.hFour}
          hFive={props.hFive}
          hSix={props.hSix}
          ul={props.ul}
          ol={props.ol}

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
    console.log(block)
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