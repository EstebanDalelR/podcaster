export default function Layout(props) {
  const { children } = props
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
          padding-left: 2%;
          padding-top: 2%;
        }
      `}</style>
      <div className="container">
        {children}
      </div>
    </div>
  )
}