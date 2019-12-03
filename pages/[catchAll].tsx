import Link from "next/link";

export default function CatchAll() {
  return (
    <Link href="/">
      <a>
        Oops, seems you hit a bad route, click here to go back home.
      </a>
    </Link>
  )
}