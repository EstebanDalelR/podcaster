import * as React from "react";
import Link from "next/link"
const Index = () => {
  return (
    <>
      <h1>Create a Podcast</h1>
      <div>
        <h3>Title</h3>
        <p>Give it a name, maybe add the issue number at the start.</p>
        <input type="text" />
      </div>
      <div>
      <h3>Link(s)</h3>
        <p>Search online, this will give you more material to talk about, and will help you make smarter questions to your invitees.</p>
        <input type="text" />
      </div>
      <div>
        <h3>Description</h3>
        <p>Help the listener know what this episode is about. Keep it short and simple.</p>
        <input type="text" />
      </div>
      <div>
        <h3>Guests</h3>
        <p>Are you having anyone over? Help them be found!</p>
        <input type="text" />
      </div>
      <div>
        <h3>Sponsors</h3>
        <p>Remember to mention them. We recommend flowing into the ad, not a full stop.</p>
        <input type="text" />
      </div>
      <div>
        <h3>Script</h3>
        <p>Finally, time to know what you'll say. Keep an eye on how long it will take, and your pace should be around 130 words per minute.</p>
        <input type="text" />
      </div>
      <div>
        <button>Save</button>
      </div>
    </>
  )
}
export default Index;