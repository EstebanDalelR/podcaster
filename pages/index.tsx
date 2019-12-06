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
        .benefitsHolder{
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
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
          padding-inline: 2%;
          padding-block: 1em;
          border-radius: 4px;
        }
      `}</style>
      <h1>Welcome to Podcaster</h1>
      <p>
        Congrats on deciding to share your knowledge and opinions to the world.
        We know a podcast might seem like a lot, from editing to publishing, but we're here to help.
      </p>
      <section>
        <h2>How it works</h2>
        <p><span>Podscater</span> helps you plan your script, from your research to recording.</p>
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