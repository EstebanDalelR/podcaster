import { Trans } from 'react-i18next';
import i18n from "../i18n"
import { useEffect } from 'react';

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
        `}</style>
        <div className="langs">
          <p style={{margin:0}}>Viewing in {i18n.language}</p>
        </div>
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
              <a href={social[key]} target="_blank">
                <img src={`/icons/${key}.svg`} alt="social icon" />
              </a>
            </div>)}
        </div>
      </footer>
    </div>
  )
}