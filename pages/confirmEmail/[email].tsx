import { useRouter } from 'next/router'
export default function ConfirmEmail(props) {
  const router = useRouter()
  const { email } = router.query
  async function validateUser() {
    let resp = await fetch(
      "/api/confirmEmail",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
      }
    )
    const myJson = await resp.json()

    if (typeof window !== 'undefined') {
      if (myJson.email) router.push('/create')
      else router.push('/')
    }

    return true
  }
  validateUser()
  return (
    <><h1>
      Validating...
      </h1>
      <h5>
        {email}
      </h5>
    </>
  )
}