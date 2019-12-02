import * as React from "react";

import Field from "./createFormField"
interface Props {
  fieldTexts: Array<{ name, title, description }>,
  savedFields?: string
}
const Fields = ({ fieldTexts, savedFields }: Props) => {
  // must be a controlled field so we must pass a "" to each input
  let initialFields = {}
  if (savedFields) {
    initialFields = JSON.parse(savedFields)
  } else {
    for (let index = 0; index < fieldTexts.length; index++) {
      const element = fieldTexts[index];
      initialFields[element.name] = ""
    }
  }
  let [fields, setFields] = React.useState(initialFields)

  let handleChange = (event) => {
    let newFields = { ...fields }
    newFields[event.target.name] = event.target.value
    setFields(newFields);
    if (typeof window !== 'undefined') {
      let fieldsString = ""
      let keys = Object.keys(newFields)
      for (let index = 0; index < keys.length; index++) {
        const element = keys[index];
        if (index === 0) fieldsString += "{"
        fieldsString += `"${element}":"${newFields[element]}"`
        index === keys.length-1 ? fieldsString += `}` : fieldsString += `,`
      }
      window.localStorage.setItem("podcasterCreateFields", fieldsString)
    }
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