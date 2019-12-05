import * as React from "react";
import Link from "next/link"
import useRoutePush from "../hooks/useRoutePush"
import useUserJWT from "../hooks/useUserJWT"

const Signup = () => {
  let userJWT = useUserJWT()
  let [password, setPassword] = React.useState("")
  let [email, setEmail] = React.useState("")
  let [errorField, setErrorField] = React.useState("")
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
    if (myJson.error) {
      switch (myJson.errorCode) {
        case 0:
          setErrorField("Email")
          break;
        case 1:
          setErrorField("Password")
          break;
        default:
          break;
      }
    } else {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem("podcasterUserJWT", JSON.stringify(myJson.podcasterUserJWT))
        useRoutePush('/create')
      }
    }
    return true
  }
  return (
    <>
      <style jsx>{`
      .error{
        border-color: red;
      }
      `}
      </style>
      <h1>Login to Podcaster</h1>
      <form onSubmit={sendUser}>
        <input
          className={`${errorField === "Email" ? "error" : null}`}
          type="text"
          name={"email"}
          value={email}
          placeholder={"Your registered mail"}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className={`${errorField === "Password" ? "error" : null}`}
          type="password"
          name={"password"}
          placeholder={"Your super secure password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Link href="/signup">
          <a>Perhaps you need to create an account?</a>
        </Link>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  )
}
export default Signup;