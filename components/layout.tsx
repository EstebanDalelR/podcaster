import i18n from "../i18n"
import { useEffect } from 'react';

import useUserJWT from "../hooks/useUserJWT"
import { Router } from "next/router";
import Nav from "./layout/nav";
import Footer from "./layout/footer";

export default function Layout(props) {
  useEffect(() =>
    console.log("i18n")
    , [i18n.isInitialized])
  const { children } = props


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
        `}</style>
      <Nav />
      <main className="container">
        {children}
      </main>
      <Footer />
    </div>
  )
}