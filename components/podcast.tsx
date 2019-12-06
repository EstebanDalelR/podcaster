interface Props {
  id: string,
  fields: {
    Title?: string,
    Links?: string,
    Summary?: string,
    Guests?: string,
    Sponsors?: string,
    Script?: string
  }
}
export default function Podcast({ id, fields }: Props) {
  let fieldKeys = Object.keys(fields)
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
          justify-content: flex-start;
          align-items: flex-start;
          flex-direction: column;
        }
      `}</style>
      <h3>
        {fields.Title}
      </h3>
      {fieldKeys.map((field, index)=>
        <div key={index}>
          <h5>{field}</h5>
          <p>{fields[field]}</p>
        </div>
      )}
    </div>
  )
}