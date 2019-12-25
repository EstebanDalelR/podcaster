export default
  function StyleButtons(props) {

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
      .highlight{
          text-decoration: line-through;
          text-decoration-color: rgba(255, 255, 0, 0.4);
          text-decoration-thickness: 1em;
          ${props.highlight
          ? `
            background-color: darkgrey;
            `
          : ""}
        }
    `}</style>
      {props.stylesArray.map(element =>
        <input
          title={`CTRL + ${element.shortcut}`}
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