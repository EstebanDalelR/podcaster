import BlockButtons from './BlockButtons'
import StyleButtons from './StyleButtons'

export default function StyleHolder(props) {

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
          code={props.code}
          italic={props.italic}
          strike={props.strike}
          underline={props.underline}
          highlight={props.highlight}
          stylesArray={props.stylesArray}
          toggleInlineStyle={props.toggleInlineStyle}
        />
        <BlockButtons
          ol={props.ol}
          ul={props.ul}
          hOne={props.hOne}
          hTwo={props.hTwo}
          hThree={props.hThree}
          hFour={props.hFour}
          hFive={props.hFive}
          hSix={props.hSix}
          blockquote={props.blockquote}
          toggleBlockType={props.toggleBlockType}
          blockTypeButtons={props.blockTypeButtons}
        />
      </div>
    </>
  )
}