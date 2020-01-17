import * as React from "react";
import Link from "next/link"
import useUserJWT from "../hooks/useUserJWT"
import BenefitsCard from "../components/indexBenefitCard";
const Index = () => {
  let userJWT = useUserJWT()
  let benefits = [
    {
      text: "Add the links you used on your research",
      icon: "public"
    },
    {
      text: "Add your guests' social networks",
      icon: "account_circle"
    },
    {
      text: "Add any sponsors you have",
      icon: "loyalty"
    },
    {
      text: "Write your script and know how long it takes to read",
      icon: "assignment"
    }
  ]
  return (
    <>
      <style jsx>{`
        @media only screen 
        and (max-device-width : 736px) {
          .homeBanner{
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            height: 100vh;
          }
          .benefitsHolder{
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
          }
          .bannerCard{
            background-color: #181818;
            z-index: 2;
            width: 65%;
            height: 50%;
            justify-items: center;
            align-items: center;
            padding-left: 2%;
            padding-right: 2%;
            grid-column: 1 / span 2;
            grid-row: 1 / span 2;
            margin: auto;
          }
          .bannerimg{
            grid-column: 1 / span 1;
            grid-row: 1 / span 1;
            filter: blur(2px) grayscale(60%);
            z-index: 1;
            margin-top: -2%;
            margin-left: -2%;
            height: 100vh;
            overflow: hidden;
          }
          .cardCTA{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content:center;
          }
        }
        @media only screen 
        and (min-device-width : 736px) {  
          .homeBanner{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
          }
        .benefitsHolder{
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
        }
        .bannerCard{
          grid-column: 2/ span 2;
          grid-row: 1 / span 2;
        }
        .bannerimg{
          grid-column: 1 / span 2;
          grid-row: 1 / span 2;
          filter: blur(2px) grayscale(60%);
          z-index: 1;
          margin-top: -2%;
          margin-left: -2%;
          width: 120%;
        }
        .bannerCard{
          display: grid;
          background-color: #181818;
          z-index: 2;
          width: 65%;
          height: 25%;
          margin: auto;
          justify-items: center;
          align-items: center;
          padding-left: 2%;
          padding-right: 2%;
        }
      }
        .callToAction{
          display: flex;
          align-items: center;
          flex-direction: column;
          text-align: center;
        }
        button{
          background-color: #3549ff;
          color: white;
          border: none;
          padding-left: 2%;
          padding-right: 2%;
          padding-block: 1em;
          border-radius: 4px;
        }
        .bannerTitle{
          grid-column: 1/ span 2;
          grid-row: 1 / span 2;
        }
        .bannerText{
          grid-column: 1 / span 2;
          grid-row: 2 / span 2;
        }
      `}</style>
      <section className="homeBanner">
        <img
          className="bannerimg"
          src="/img/darkmic.jpg" />
        <div className="bannerCard">
          <h1 className="bannerTitle">
            Welcome to Shockmount
        </h1>
          <p className="bannerText">
            Congrats on deciding to share your knowledge and opinions to the world.
            We know a podcast might seem like a lot, from editing to publishing, but we're here to help.
      </p>
      <div className="cardCTA">

          <h2>Start now</h2>
          {userJWT
            ? <Link href="/create">
              <button>Create Podcast</button>
            </Link>
            : <Link href="/signup">
              <button>Create Account</button>
            </Link>
          }
          </div>
        </div>
      </section>
      <section>
        <h2>How it works</h2>
        <p><span>Shockmount</span> helps you plan your script, from your research to recording.</p>
        <div className="benefitsHolder">
          {benefits.map((benefit, index) =>
            <BenefitsCard text={benefit.text} icon={benefit.icon} key={index} />
          )}
        </div>
      </section>
      <section className="callToAction">
        <h2>Start now</h2>
        {userJWT
          ? <Link href="/create">
            <button>Create Podcast</button>
          </Link>
          : <Link href="/signup">
            <button>Create Account</button>
          </Link>
        }
      </section>
    </>
  )
}
export default Index;