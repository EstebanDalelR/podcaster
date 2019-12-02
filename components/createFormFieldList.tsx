import { useState } from "react";

import Field from "./createFormField"

const Fields = ({ fieldTexts }) => {
  let initialFields = {}
  for (let index = 0; index < fieldTexts.length; index++) {
    const element = fieldTexts[index];
    initialFields[element.name] = ""
  }
  let [fields, setFields] = useState(initialFields)

  let handleChange = (event) => {
    let newFields = { ...fields }
    newFields[event.target.name] = event.target.value
    setFields(newFields);
  }

  return (
    <form>
      {fieldTexts.map((element, index) => {
        let { title, description, name } = element
        return <Field
          key={index}
          title={title}
          description={description}
          name={name}
          handleChange={handleChange}
          fieldValue={fields[name]}
        />
      })}
    </form>
  )
}
export default Fields