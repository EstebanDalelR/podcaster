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
    <div>
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