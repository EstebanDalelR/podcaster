import * as React from "react";
import Link from "next/link"
import { useRouter } from 'next/router'
import useUserJWT from "../hooks/useUserJWT"
const BackgroundCard = () => {
  return (
    <div className="background">
      <style jsx>{`
    @media only screen 
    and (max-device-width : 736px) {
      .background{
      background-color: #292929;
      height: 100%;
      grid-column: 1 / span 2;
      grid-row: 1 / span 1;
    }    
    .imgContainer{
      height: 100%;
    }
    .imgContainer>img{
      padding-right: 800px;
      height: 100%;
    }    
      }
    @media only screen 
    and (min-device-width : 736px) {    
      .background{
        background-color: #292929;
        width: 100%;
        grid-column: 1 / span 2;
        grid-row: 1 / span 1;
      }    
      .imgContainer{
        width: 90%;
        margin:auto;
      }
      .imgContainer>img{
        width: 100%;
      }
    `}</style>
      <div className="imgContainer">
        <img
          sizes="(max-width: 2560px) 100vw, 2560px"
          srcSet={`
            /img/lonestudio_oggith/lonestudio_oggith_c_scale,w_600.jpg 600w,
            /img/lonestudio_oggith/lonestudio_oggith_c_scale,w_848.jpg 848w,
            /img/lonestudio_oggith/lonestudio_oggith_c_scale,w_1059.jpg 1059w,
            /img/lonestudio_oggith/lonestudio_oggith_c_scale,w_1249.jpg 1249w,
            /img/lonestudio_oggith/lonestudio_oggith_c_scale,w_1421.jpg 1421w,
            /img/lonestudio_oggith/lonestudio_oggith_c_scale,w_1589.jpg 1589w,
            /img/lonestudio_oggith/lonestudio_oggith_c_scale,w_1726.jpg 1726w,
            /img/lonestudio_oggith/lonestudio_oggith_c_scale,w_1860.jpg 1860w,
            /img/lonestudio_oggith/lonestudio_oggith_c_scale,w_2006.jpg 2006w,
            /img/lonestudio_oggith/lonestudio_oggith_c_scale,w_2128.jpg 2128w,
            /img/lonestudio_oggith/lonestudio_oggith_c_scale,w_2259.jpg 2259w,
            /img/lonestudio_oggith/lonestudio_oggith_c_scale,w_2376.jpg 2376w,
            /img/lonestudio_oggith/lonestudio_oggith_c_scale,w_2496.jpg 2496w,
            /img/lonestudio_oggith/lonestudio_oggith_c_scale,w_2553.jpg 2553w,
            /img/lonestudio_oggith/lonestudio_oggith_c_scale,w_2560.jpg 2560w`}
          src="lonestudio_oggith_c_scale,w_2560.jpg"
          alt="" />
      </div>
    </div>
  )
}
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
    <div className="signup">
      <style jsx>{`
    @media only screen 
    and (max-device-width : 736px) {
      .signup{
        display: grid;
        grid-template-columns: 1fr;
        width: 100%;  
        justify-items: center;
      }   
      .signupCard{
        grid-column: 1 / span 2;
        grid-row: 1 / span 1;
        background-color: #18181818;
        height: 100%;
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      } 
      button{
        border: none;
        color: white;
        background-color: #3549ff;
        margin-inline: auto;
        margin-block: 1em;
        padding-inline: 2em;
        padding-block: 1em;
        border-radius: 4px;
        width: 100%;
      }
      input{
        width: 100%;
        border-radius: 4px;
        border: none;
        margin-block: 1em;
        padding-block: 1em;
      }
      p, a{
        margin-block: 1em;
        color: whitesmoke;
      } 
      }
    @media only screen 
    and (min-device-width : 736px) {    
      .signup{
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;  
        justify-items: center;
      }   
      .signupCard{
        grid-column: 1 / span 1;
        grid-row: 1 / span 1;
        background-color: #181818;
        height: 100%;
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      } 
      button{
        border: none;
        color: white;
        background-color: #3549ff;
        margin-inline: auto;
        margin-block: 1em;
        padding-inline: 2em;
        padding-block: 1em;
        border-radius: 4px;
        width: 100%;
      }
      input{
        width: 100%;
        border-radius: 4px;
        border: none;
        margin-block: 1em;
        padding-block: 1em;
      }
      p, a{
        margin-block: 1em;
        color: whitesmoke;
      }
    `}</style>
      <BackgroundCard />
      <div className="signupCard">
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
            <Link href="/login">
              <a>Or maybe you already have an account?</a>
            </Link>
          <div>
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Signup;