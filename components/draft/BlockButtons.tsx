export default function BlockButtons(props) {

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
      ${props.blockquote
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
      {props.blockTypeButtons.map(element =>

        <input
        title={`CTRL+ ${element.shortcut}`}
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