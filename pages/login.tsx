import * as React from "react";
import Link from "next/link"
const Signup = () => {
  let [email, setEmail] = React.useState("")
  let [password, setPassword] = React.useState("")

  async function sendUser(e) {
    e.preventDefault()

    let data = {
      "Email": email,
      "Password": password
    }
    let resp = await fetch(
      "/api/login",
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
      window.localStorage.setItem("podcasterUserJWT", JSON.stringify(myJson.podcasterUserJWT))
    }
    return true
  }
  return (
    <>
      <h1>Login to Podcaster</h1>
      <form onSubmit={sendUser}>
        <input
          type="text"
          name={"email"}
          value={email}
          placeholder={"Your registered mail"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name={"password"}
          placeholder={"Your super secure password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  )
}
export default Signup;