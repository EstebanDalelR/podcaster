import * as React from "react";
interface Props {
  title: string,
  description: string,
  name: string,
  fieldValue: string,
  handleChange: (event: any) => void
}
const Field = ({ title, description, name, fieldValue, handleChange }: Props) => {
  return (
    <div className={name}>
      <style jsx>{`
        @media only screen 
        and (max-device-width : 736px) {
          input{
            width: 90%;
            margin: auto;
          }
        }
        input{
          height: 3em;
        }
      `}</style>
      <h3>{title}</h3>
      <p>{description}</p>
      <input
        type="text"
        name={name}
        value={fieldValue}
        onChange={handleChange}
      />
    </div>
  )
}
export default Field