import React from "react"
import { Link } from "gatsby"
import { Heading } from "evergreen-ui"

export default function Footer() {
  return (
    <footer>
      <Heading>
        © {new Date().getFullYear()} - <Link to="about" className="font-bold underline">About</Link>
      </Heading>
    </footer>
  )
}
