export default function Footer() {
  let social = {
    li: "https://www.linkedin.com/in/estebandalelr/",
    gh: "https://github.com/estebandalelr",
    tw: "https://twitter.com/estebandalelr",
    fb: "https://facebook.com/estebandalelr"
  }
  let socialKeys = Object.keys(social)
  return (
    <>
      <style jsx>{`
      .social{
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
      footer{
        width: 100%;
        background-color: #060606;
        align-items: flex-end;
        color: black;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
      }
      footer > p{
        margin: 0;
        width: 70%;
        text-align: right;
        color: white;
        text-shadow: none;
      }
      img{
        width: 2em;
        height: 2em;
        margin: 0.5em;
      }

      a> img{
        filter: invert(100%);
      }
  `}</style>
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
    </>
  )
}