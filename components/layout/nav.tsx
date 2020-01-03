import Link from "next/link"
import { useRouter } from 'next/router'

import useUserJWT from "../../hooks/useUserJWT"

export default function Nav() {
  const router = useRouter()
  let userJWT = useUserJWT()

  return (
    <>
      <style jsx>{`
      @media only screen 
      and (max-device-width : 736px) {
        .links > button.tertiary{
          border:none;
          color: #cbcbcb;
          background-color: #292929;
          margin-right: auto;
          margin-left: auto;
          padding-left: 1em;
          padding-right: 1em;
          padding-top: 1em;
          padding-bottom: 1em;
          text-shadow: none;
          border-radius: 4px;
        }
        .links > button.secondary{
          border: solid #cbcbcb;
          color: #cbcbcb;
          background-color: #292929;
          margin-right: 2px;
          margin-left: 2px;
          padding-left: 10px;
          padding-right: 10px;
          padding-top: 10px;
          padding-bottom: 10px;
          min-height: 80%;
          border-radius: 4px;
          text-shadow: none;
        }
        .links > button.primary{
          border: solid #cbcbcb;
          min-height: 80%;
          color: #292929;
          background-color: #cbcbcb;
          margin-right: 2px;
          margin-left: 2px;
          padding-left: 10px;
          padding-right: 10px;
          padding-top: 10px;
          padding-bottom: 10px;
          text-shadow: none;
          font-weight: bold;
          border-radius: 4px;
        }
      }
      @media only screen 
      and (min-device-width : 736px) { 
        .links > button.tertiary{
          border:none;
          color: #cbcbcb;
          background-color: #292929;
          margin-right: auto;
          margin-left: auto;
          padding-left: 1em;
          padding-right: 1em;
          padding-top: 1em;
          padding-bottom: 1em;
          text-shadow: none;
          border-radius: 4px;
        }
        .links > button.secondary{
          border: solid #cbcbcb;
          color: #cbcbcb;
          background-color: #292929;
          margin-right: auto;
          margin-left: auto;
          padding-left: 2em;
          padding-right: 2em;
          padding-top: 1em;
          padding-bottom: 1em;
          border-radius: 4px;
          text-shadow: none;
        } 
        .links > button.primary{
          border: solid #292929;
          color: #292929;
          background-color: #cbcbcb;
          margin-right: auto;
          margin-left: auto;
          padding-left: 2em;
          padding-right: 2em;
          padding-top: 1em;
          padding-bottom: 1em;
          text-shadow: none;
          font-weight: bold;
          border-radius: 4px;
        }

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
              <button onClick={() => {
                window.localStorage.removeItem("podcasterUserJWT")
                router.push("/")
              }}
                className="tertiary"
              >Logout</button>
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
    </>
  )
}