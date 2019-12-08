export default function BenefitsCard(props: { text, icon }) {
  return (
    <div className="card">
      <style jsx>{`
        .card{
          border-radius: 5px;
          box-shadow: 4px 5px 5px grey;
          background-color: white;
          padding: 2%;
          margin: 2%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          text-align: center;
        }
      `}</style>
        <img src={`/icons/${props.icon}.png`} alt={props.icon} />
        <p>
          {props.text}
        </p>
    </div>
  )
}