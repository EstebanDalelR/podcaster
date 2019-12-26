export default function BlockButtons(props) {
  const blockTypeButtons = [
    {
      value: 'Heading One',
      name: "H1",
      shortcut: "1",
      classname: "hOne",
      block: 'header-one'
    },

    {
      value: 'Heading Two',
      classname: "hTwo",
      shortcut: "2",
      name: "H2",
      block: 'header-two'
    },

    {
      value: 'Heading Three',
      classname: "hThree",
      shortcut: "3",
      name: "H3",
      block: 'header-three'
    },
    {
      value: 'Heading Four',
      classname: "hFour",
      shortcut: "4",
      name: "H4",
      block: 'header-four'
    },
    {
      value: 'Heading Five',
      classname: "hFive",
      shortcut: "5",
      name: "H5",
      block: 'header-five'
    },
    {
      value: 'Heading Six',
      classname: "hSix",
      shortcut: "6",
      name: "H6",
      block: 'header-six'
    },
    {
      value: 'Blockquote',
      classname: "blockquote",
      shortcut: "Q",
      name: `""`,
      block: 'blockquote'
    },
    {
      value: 'Unordered List',
      classname: "ul",
      shortcut: "U",
      name: "UL",
      block: 'unordered-list-item'
    },

    {
      value: 'Ordered List',
      classname: "ol",
      shortcut: "O",
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
      {blockTypeButtons.map(element =>

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