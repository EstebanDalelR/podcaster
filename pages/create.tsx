import * as React from "react";
import Fields from "../components/createFormFieldList"
const Create = () => {
  // this will eventually come from DB or external file
  let fieldTexts = [
    {
      value:"",
      name: "title",
      title: "Title",
      description: "Give it a name, maybe add the issue number at the start."
    },
    {
      value:"",
      name: "links",
      title: "Link(s)",
      description: "Search online, this will give you more material to talk about, and will help you make smarter questions to your guests."
    },
    {
      value:"",
      name: "description",
      title: "Description",
      description: "elp the listener know what this episode is about. Keep it short and simple."
    },
    {
      value:"",
      name: "guests",
      title: "Guests",
      description: "Are you having anyone over? Help them be found!"
    },
    {
      value:"",
      name: "sponsors",
      title: "Sponsors",
      description: "Remember to mention them. We recommend flowing into the ad, not a full stop."
    },
    {
      value:"",
      name: "script",
      title: "Script",
      description: "Finally, time to know what you'll say. Keep an eye on how long it will take, and your pace should be around 130 words per minute."
    },
  ]

  let SaveButton = () => {
    return (
      <button>Save</button>
    )
  }
  return (
    <>
      <h1>Create a Podcast</h1>
      <Fields fieldTexts={fieldTexts} />
      <SaveButton />
    </>
  )
}
export default Create;