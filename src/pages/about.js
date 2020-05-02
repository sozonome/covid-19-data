import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Heading, Pane, Paragraph, Button } from "evergreen-ui"
import { Link } from "gatsby"
import appIcon from "../images/v-19.png";

export default function about() {
  return (
    <Layout>
      <SEO title="About" />
      <Heading size={700} marginBottom={10}>
        About
      </Heading>
      <Pane marginBottom={20}>
        <Heading>COVID-19 Numbers / Statistics App</Heading>
        <Pane marginY={10}>
        <Paragraph>
          Developed by <a className="font-bold underline" href="https://agustinusnathaniel.com" target="_blank" rel="noopener noreferrer">@sozonome</a>
        </Paragraph>
        <Paragraph>
          Powered by{" "}
          <a className="font-bold underline" href="https://github.com/mathdroid/covid-19-api" target="_blank" rel="noopener noreferrer">@mathdroid</a>'s
          COVID-19-API
        </Paragraph>
        
        <img className="w-32" alt="App Icon" src={appIcon}/>
        <Paragraph>Icons made by <a className="font-bold underline" href="https://www.flaticon.com/authors/vitaly-gorbachev" title="Vitaly Gorbachev" target="_blank" rel="noopener noreferrer">Vitaly Gorbachev</a> from <a className="font-bold underline" href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noopener noreferrer">www.flaticon.com</a></Paragraph>
        <Paragraph>Data Source : John Hopkins University CSSE</Paragraph>
        </Pane>
        <Link to="/">
          <Button iconBefore="arrow-left">Home</Button>
        </Link>
      </Pane>
    </Layout>
  )
}
