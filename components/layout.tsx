export default function Layout (props) {
  const { children } = props
  console.log(children)
  return(
    <div className="background">
      <style global jsx>{`
        html, body{
          margin:0;
        }
      `}</style>
      <style jsx>{`
        .background{
          background-color: whitesmoke;
          height: 100vh;
          width: 100%;
        }
      `}</style>
      {children}
    </div>
  )
}