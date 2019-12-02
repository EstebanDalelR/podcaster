import * as React from "react";
import Link from "next/link"
const Index = () => {
  return (
    <>
      <h1>Welcome to Podcaster</h1>
      <p>
        Congrats on deciding to share your knowledge and opinions to the world.
        We know a podcast might seem like a lot, from editing to publishing, but we're here to help.
      </p>
      <h2>How it works</h2>
      <p><span>Podscater</span> helps you plan your script, from your research to recording.</p>
      <ul>
        <li>Add the links you used on your research</li>
        <li>Add your guests' social networks</li>
        <li>Add any sponsors you have</li>
        <li>Write your script, and know how long it takes to read</li>
      </ul>
      <h2>Start now</h2>
      <Link href="/create">
        <button>Create</button>
      </Link>
    </>
  )
}
export default Index;