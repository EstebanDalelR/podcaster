import * as React from "react";
import useUserJWT from "../hooks/useUserJWT"
import Podcast from "../components/podcast";
export default function Podcasts() {
  let userJWT = useUserJWT()
  let [podcasts, setPodcasts] = React.useState([])

  React.useEffect(() => {
    async function getPodcasts() {
      if (userJWT) {
        let data = {
          "jwt": userJWT
        }
        let resp = await fetch(
          "/api/getPodcasts",
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }
        )
        const myJson = await resp.json();
        setPodcasts(myJson)
      }
    }
    getPodcasts()
  }, [userJWT])
  return (
    <>
      <h1>Your podcasts</h1>
      {
        podcasts.length > 0
          ? podcasts.map((podcast, index) => <Podcast {...podcast} key={index} />)
          : <h3 style={{height: "100vh"}}>loading...</h3>
      }
    </>
  )
}