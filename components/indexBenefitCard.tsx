export default function BenefitsCard(props: { text, icon }) {
  return (
    <div className="card">
      <style jsx>{`
        .card{
          border-radius: 5px;
          border: thin solid #444444;
          background-color: #181818;
          padding: 2%;
          margin: 2%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          text-align: center;
        }
        img{
          filter: invert(100%);
          width: 96px;
          height: 96px;
        }
      `}</style>
        <img src={`/icons/${props.icon}.png`} alt={props.icon}  width="96px" height="96px" />
        <p>
          {props.text}
        </p>
    </div>
  )
}