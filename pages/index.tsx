import * as React from "react";
import Link from "next/link"
import useUserJWT from "../hooks/useUserJWT"
const Index = () => {
  let userJWT = useUserJWT()
  return (
    <>
      <style jsx>{`
        h1, h2, h3, h4, h5{
          text-shadow: 1px 1px 2px white;
          font-family: 'Copse', sans-serif;
        }
        p, ul{
          text-shadow: 1px 1px 2px white;
          font-family: "Rubik";
        }
      `}</style>
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
      {userJWT
        ? <Link href="/create">
          <button>Create Podcast</button>
        </Link>
        : <Link href="/signup">
          <button>Create Account</button>
        </Link>
      }
    </>
  )
}
export default Index;