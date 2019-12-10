import i18n from "../i18n"
import Link from "next/link"
import { useEffect } from 'react';

import useUserJWT from "../hooks/useUserJWT"

export default function Layout(props) {
  useEffect(() =>
    console.log("i18n")
    , [i18n.isInitialized])
  const { children } = props
  let userJWT = useUserJWT()

  let social = {
    li: "https://www.linkedin.com/in/estebandalelr/",
    gh: "https://github.com/estebandalelr",
    tw: "https://twitter.com/estebandalelr",
    fb: "https://facebook.com/estebandalelr"
  }
  let socialKeys = Object.keys(social)
  return (
    <div className="background">
      <style jsx>{`
            @media only screen 
            and (max-device-width : 736px) {
              .links > button.secondary{
                border: solid #cbcbcb;
                color: #cbcbcb;
                background-color: #292929;
                margin-inline: auto;
                padding-inline: 10px;
                padding-block: 10px;
                border-radius: 4px;
                text-shadow: none;
              }
              .links > button.primary{
                border: solid #cbcbcb;
                color: #292929;
                background-color: #cbcbcb;
                margin-inline: auto;
                padding-inline: 10px;
                padding-block: 10px;
                text-shadow: none;
                font-weight: bold;
                border-radius: 4px;
              }
            }
            @media only screen 
            and (min-device-width : 736px) { 
              .links > button.secondary{
                border: solid #cbcbcb;
                color: #cbcbcb;
                background-color: #292929;
                margin-inline: auto;
                padding-inline: 2em;
                padding-block: 1em;
                border-radius: 4px;
                text-shadow: none;
              } 
              .links > button.primary{
                border: solid #292929;
                color: #292929;
                background-color: #cbcbcb;
                margin-inline: auto;
                padding-inline: 2em;
                padding-block: 1em;
                text-shadow: none;
                font-weight: bold;
                border-radius: 4px;
              }

            }
        .background{
          background: #292929;
          min-height: 100vh;
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
        }
        .container{
          height: 100%;
          min-height: 90%;
          padding: 2%;
        }
        footer{
          width: 100%;
          background-color: #060606;
          align-items: center;
          color: black;
          display: flex;
          justify-content: space-between;
        }
        footer > p{
          margin: 0;
          width: 50%;
          color: white;
          text-shadow: none;
        }
        img{
          width: 2em;
          height: 2em;
          margin: 0.5em;
        }
        .social{
          width: 50%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        .nav{
          display: flex;
          width: 100%;
          height: 4em;
          background-color: #181818;
          justify-content: space-between;
          align-items: center;
        }

        .links{
          min-width: 30%;
          align-items: center;
          display: flex;
          justify-content: space-around;
        }
        a> img{
          filter: invert(100%);
        }
        .brand{
          width: 4em;
          height: 4em;
          cursor: pointer;
        }
        `}</style>
      <nav className="nav">
        <Link href="/">
          <img src="/Podcaster.png" className="brand"></img>
        </Link>
        <div className="links">
          {userJWT
            ? <>
              <Link href="/podcasts">
                <button className="secondary">Your podcasts</button>
              </Link>
              <Link href="/create">
                <button className="primary">Create Podcast</button>
              </Link>
            </>
            : <>
              <Link href="/login">
                <button className="secondary">Login</button>
              </Link>
              <Link href="/signup">
                <button className="primary">Signup</button>
              </Link>
            </>
          }

        </div>
      </nav>
      <main className="container">
        {children}
      </main>
      <footer>
        <p>
          Created by Esteban Dalel R
          </p>
        <div className="social">
          {socialKeys.map((key, index) =>
            <div key={index}>
              <a href={social[key]} target="_blank" rel="noopener noreferrer">
                <img src={`/icons/${key}.svg`} alt="social icon" />
              </a>
            </div>)}
        </div>
      </footer>
    </div>
  )
}