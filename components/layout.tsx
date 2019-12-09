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
        .background{
          background: linear-gradient(to bottom right, rgba(0,0,255, 0.5) 15%, transparent 15%, whitesmoke 25%),
            url(/podcastermic.png);
          height: 100%;
          width: 100%;
        }
        .container{
          padding: 2%;
        }
        footer{
          width: 100%;
          background-color: #70ffe7;
          align-items: center;
          color: black;
          display: flex;
          justify-content: space-between;
        }
        footer > p{
          margin: 0;
          width: 50%;
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
          width: 100;
          height: 3.5em;
          background-color: #35b8ff;
          justify-content: space-between;
          align-items: center;
        }
        .links > button{
          border: white;
          color: white;
          background-color: #3549ff;
          margin-inline: auto;
          padding-inline: 2em;
          padding-block: 1em;
          border-radius: 4px;
        }
        .links{
          min-width: 30%;
          align-items: center;
          display: flex;
          justify-content: space-around;
        }
        `}</style>
      <nav className="nav">
        {i18n.language
          ? <p style={{ margin: 0 }}>Viewing in {`${i18n.language}`}</p>
          : <div />
        }
        <div className="links">
          {userJWT
            ? <>
              <Link href="/create">
                <button>Create Podcast</button>
              </Link>
              <Link href="/podcasts">
                <button>Your podcasts</button>
              </Link>
            </>
            : <Link href="/signup">
              <button>Create Account</button>
            </Link>
          }

        </div>
      </nav>
      <div className="container">
        {children}
      </div>
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