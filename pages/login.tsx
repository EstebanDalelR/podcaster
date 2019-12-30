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
        background-image: url("/img/localstudio_wkgcyu/localstudio_wkgcyu_c_scale,w_1048.jpg");
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
      .imgContainer>img{
        height: 100%;
      }  
      }
    @media only screen 
    and (min-device-width : 736px) {    
      .background{
        background-color: #292929;
        height: 100%;
        width: 100%;
        grid-column: 1 / span 2;
        grid-row: 1 / span 1;
      }    
      .imgContainer{
        height: 100%;
        width: 100%;
        margin:auto;
      }
      .imgContainer>img{
        height: 100%;
        width: 100%;
      }
    }
    `}</style>
      <div className="imgContainer">
        <img
          sizes="(max-width: 2560px) 100vw, 2560px"
          srcSet={`
          /img/localstudio_wkgcyu/localstudio_wkgcyu_c_scale,w_600.jpg 600w,
          /img/localstudio_wkgcyu/localstudio_wkgcyu_c_scale,w_843.jpg 843w,
          /img/localstudio_wkgcyu/localstudio_wkgcyu_c_scale,w_1048.jpg 1048w,
          /img/localstudio_wkgcyu/localstudio_wkgcyu_c_scale,w_1232.jpg 1232w,
          /img/localstudio_wkgcyu/localstudio_wkgcyu_c_scale,w_1393.jpg 1393w,
          /img/localstudio_wkgcyu/localstudio_wkgcyu_c_scale,w_1541.jpg 1541w,
          /img/localstudio_wkgcyu/localstudio_wkgcyu_c_scale,w_1671.jpg 1671w,
          /img/localstudio_wkgcyu/localstudio_wkgcyu_c_scale,w_1790.jpg 1790w,
          /img/localstudio_wkgcyu/localstudio_wkgcyu_c_scale,w_1918.jpg 1918w,
          /img/localstudio_wkgcyu/localstudio_wkgcyu_c_scale,w_2022.jpg 2022w,
          /img/localstudio_wkgcyu/localstudio_wkgcyu_c_scale,w_2132.jpg 2132w,
          /img/localstudio_wkgcyu/localstudio_wkgcyu_c_scale,w_2228.jpg 2228w,
          /img/localstudio_wkgcyu/localstudio_wkgcyu_c_scale,w_2318.jpg 2318w,
          /img/localstudio_wkgcyu/localstudio_wkgcyu_c_scale,w_2414.jpg 2414w,
          /img/localstudio_wkgcyu/localstudio_wkgcyu_c_scale,w_2498.jpg 2498w,
          /img/localstudio_wkgcyu/localstudio_wkgcyu_c_scale,w_2533.jpg 2533w,
          /img/localstudio_wkgcyu/localstudio_wkgcyu_c_scale,w_2560.jpg 2560w
            `}
          src="localstudio_wkgcyu_c_scale,w_2560.jpg"
          alt="" />
      </div>
    </div>
  )
}

const Login = () => {
  let userJWT = useUserJWT()
  const router = useRouter()
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
        window.localStorage.setItem("podcasterUserJWT", myJson.podcasterUserJWT)
        router.push('/create')
      }
    }
    return true
  }
  return (
    <div className="login">
      <style jsx>{`
      .error{
        border-color: red;
      }
      @media only screen 
      and (max-device-width : 736px) {
        .login{
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;  
          justify-items: center;
        }   
        .loginCard{
          grid-column: 1 / span 2;
          grid-row: 1 / span 1;
          background-color: #18181818;
          height: 100%;
          width: 95%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          justify-content: center;
        } 
        button{
          border: none;
          color: white;
          background-color: #3549ff;
          margin-left: auto;
          margin-right: auto;
          margin-top: 1em;
          margin-bottom: 1em;
          padding-left: 2em;
          padding-right: 2em;
          padding-top: 1em;
          padding-bottom: 1em;
          border-radius: 4px;
          width: 100%;
        }
        input{
          width: 100%;
          border-radius: 4px;
          border: none;
          min-height: 2em;
          margin-top: 1em;
          margin-bottom: 1em;
          padding-top: 1em;
          padding-bottom: 1em;
        }
        p, a{
          margin-top: 1em;
          margin-bottom: 1em;
          color: whitesmoke;
        }
        .loginCard>*{
          width: 80%;
        }
        h1{
          text-align: center;
        } 
        }
      @media only screen 
      and (min-device-width : 736px) {    
        .login{
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;  
          justify-items: center;
        }   
        .loginCard{
          grid-column: 2 / span 1;
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
          margin-left: auto;
          margin-right: auto;
          margin-top: 1em;
          margin-bottom: 1em;
          padding-left: 2em;
          padding-right: 2em;
          padding-bottom: 1em;
          padding-top: 1em;
          border-radius: 4px;
          width: 100%;
        }
        input{
          width: 100%;
          border-radius: 4px;
          min-height: 2em;
          border: none;
          margin-top: 1em;
          margin-bottom: 1em;
          padding-top: 1em;
          padding-bottom: 1em;
        }
        p, a{
          margin-top: 1em;
          margin-bottom: 1em;
          color: whitesmoke;
        }
        .loginCard>*{
          width: 80%;
        }
        h1{
          text-align: center;
        }
      `}
      </style>
      <BackgroundCard />
      <div className="loginCard">
        <h1>Login to Podcaster</h1>
        <form onSubmit={sendUser}>
          <input
            className={`${errorField === "Email" ? "error" : null}`}
            type="email"
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
      </div>
    </div>
  )
}
export default Login;