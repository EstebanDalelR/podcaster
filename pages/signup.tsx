import * as React from "react";
import Link from "next/link"
import { useRouter } from 'next/router'
import useUserJWT from "../hooks/useUserJWT"

const Signup = () => {
  let userJWT = useUserJWT()
  let router = useRouter()
  let [email, setEmail] = React.useState("")
  let [password, setPassword] = React.useState("")
  async function sendUser(e) {
    e.preventDefault()

    let data = {
      "fields": {
        "Email": email,
        "Password": password
      }
    }
    let resp = await fetch(
      "/api/createUser",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    )
    const myJson = await resp.json()
    if (typeof window !== 'undefined') {
      window.localStorage.setItem("podcasterUserJWT", myJson.podcasterUserJWT)
      router.push("/create")
    }
    return true
  }
  return (
    <>
      <h1>Become a Podcaster</h1>
      <form onSubmit={sendUser}>
        <p>
          Create a quick account to save all of your scripts
      </p>
        <input
          type="text"
          name={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <p>
          Do we need to tell you to create a secure password?
      </p>
        <input
          type="password"
          name={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div>
          <Link href="/login">
            <a>Or maybe you already have an account?</a>
          </Link>
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
      </form>
    </>
  )
}
export default Signup;