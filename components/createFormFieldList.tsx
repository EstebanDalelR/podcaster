import * as React from "react";

import Field from "./createFormField"
import { useRouter } from 'next/router'
interface Props {
  fieldTexts: Array<{ name, title, description }>,
  savedFields?: string,
  userJWT: string
}
const Fields = ({ fieldTexts, savedFields, userJWT }: Props) => {
  let router = useRouter()
  // must be a controlled field so we must pass a "" to each input
  let initialFields = { title: "", links: "", summary: "", guests: "", sponsors: "", script: "" }
  if (savedFields) {
    initialFields = JSON.parse(savedFields)
  } else {
    for (let index = 0; index < fieldTexts.length; index++) {
      const element = fieldTexts[index];
      initialFields[element.name] = ""
    }
  }
  let [fields, setFields] = React.useState<{ title, links, summary, guests, sponsors, script }>(initialFields)

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
        index === keys.length - 1 ? fieldsString += `}` : fieldsString += `,`
      }
      window.localStorage.setItem("podcasterCreateFields", fieldsString)
    }
  }
  let SaveButton = () => {
    return (<>
      <style jsx>{`
      @media only screen 
      and (max-device-width : 736px) {
      
        button{
          color: white;
          background-color:#0027FF;
          border-radius: 10px;
          border: none;
          padding-block: 10px;
          padding-inline: 20px;
          width: 100%;
          margin-bottom: 20px;
        }
      }
      @media only screen 
      and (min-device-width : 736px) { 
      button{
        color: white;
        background-color:#0027FF;
        border-radius: 10px;
        border: none;
        padding-block: 1%;
        padding-inline: 2%;
      }
    }
      `}
      </style>
      <button type="submit">Save</button>
    </>
    )
  }

  async function sendPodcast(e) {
    e.preventDefault()
    if (userJWT) {
      let { title, links, summary, guests, sponsors, script } = fields
      let data = {
        "fields": {
          "Title": title,
          "Links": links,
          "Summary": summary,
          "Guests": guests,
          "Sponsors": sponsors,
          "Script": script,
        },
        "jwt": userJWT
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
      if (typeof window !== 'undefined') {
        if (localStorage) {
          localStorage.removeItem("podcasterCreateFields")
          setFields({ title: "", links: "", summary: "", guests: "", sponsors: "", script: "" })
          router.push("/podcasts")
        }
      }
    } else {
      router.push("/create")
    }

  }
  let readTime = ""
  let words = fields.script.split(" ")
  if (words.length < 30) {
    readTime = "less than a minute"
  } else if (words.length * 0.5 > 60) {
    readTime = `about ${Math.round(words.length / 120)} minute${Math.round(words.length / 120) > 1 ? "s" : ""}`
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
      <p>According to your script, it would take {readTime} to finish reading this.</p>
      <SaveButton />

    </form>
  )
}
export default Fields