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
          italic={props.italic}
          code={props.code}
          strike={props.strike}
          underline={props.underline}
          highlight={props.highlight}
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
          blockquote={props.blockquote}
          ul={props.ul}
          ol={props.ol}
        />
      </div>
    </>
  )
}