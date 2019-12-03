import * as React from "react";

import Field from "./createFormField"
interface Props {
  fieldTexts: Array<{ name, title, description }>,
  savedFields?: string
}
const Fields = ({ fieldTexts, savedFields }: Props) => {
  // must be a controlled field so we must pass a "" to each input
  let initialFields ={title:"", links:"", summary:"", guests:"", sponsors:"", script:""}
  if (savedFields) {
    initialFields = JSON.parse(savedFields)
  } else {
    console.log(initialFields)
    for (let index = 0; index < fieldTexts.length; index++) {
      const element = fieldTexts[index];
      initialFields[element.name] = ""
    }
  }
  let [fields, setFields] = React.useState<{title, links, summary, guests, sponsors, script}>(initialFields)

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
  let SaveButton = () => {
    return (<>
      <style jsx>{`
      button{
        color: white;
        background-color:#0027FF;
        border-radius: 10px;
        border: none;
        padding-block: 1%;
        padding-inline: 2%;
      }
      `}
      </style>
      <button type="submit">Save</button>
    </>
    )
  }
  let checkLogged = () => {
    if (typeof window !== 'undefined') {
      if (localStorage) {
        return localStorage.getItem("userId")
      }
    }
    /* Candidate for JS Optional Chaining, but experimental
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
    */
    return false
  }
  
  async function sendPodcast(e) {
    e.preventDefault()
    
      let {title, links, summary, guests, sponsors, script} = fields
      let data = {
        "fields": {
          "Title": title,
          "Links": links,
          "Summary": summary,
          "Guests": guests,
          "Sponsors": sponsors,
          "Script": script,
        }
      }
      let resp = await fetch(
        "/api/createPodcast",
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
      )
      return true

  }
  return (
    <form onSubmit={sendPodcast}>
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
      <SaveButton />

    </form>
  )
}
export default Fields