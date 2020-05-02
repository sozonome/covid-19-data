import React from "react"
import { Pane, Heading, Text, SearchInput, Button } from "evergreen-ui"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default function countries() {
  return (
    <Layout>
      <Pane>
        <Link to="/">
          <Button height={40} iconBefore="arrow-left">back</Button>
        </Link>
        <Pane marginY={20}>
          <Heading size={500}>Search Here</Heading>
          <Pane marginY={5}>
            <Text>
              You can put multi-ingredients here, just separate using comma.
            </Text>
            <SearchInput
              onBlur={event => {
                // setIngredientInput(event.target.value.split(/[., -]/))
              }}
              width="100%"
              height={50}
              placeholder="ingredients..."
            />
          </Pane>
        </Pane>
      </Pane>
    </Layout>
  )
}
