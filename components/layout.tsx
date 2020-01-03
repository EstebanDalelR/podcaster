import i18n from "../i18n"
import { useEffect } from 'react';

import useUserJWT from "../hooks/useUserJWT"
import { Router } from "next/router";
import Nav from "./layout/nav";

export default function Layout(props) {
  useEffect(() =>
    console.log("i18n")
    , [i18n.isInitialized])
  const { children } = props

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
            
        .background{
          background: #292929;
          overflow: hidden;
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

        a> img{
          filter: invert(100%);
        }

        `}</style>
     <Nav />
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