import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Pane, Heading, Text, Paragraph, Spinner, toaster } from "evergreen-ui"
import axios from "axios"
import { API_URL } from "../functions/fetchApi"
import formatDate from "../functions/formatDate"
import formatNumber from "../functions/formatNumber"

const IndexPage = () => {
  const [busy, setBusy] = useState(true)
  const [data, setData] = useState()

  useEffect(() => {
    axios(API_URL)
      .then(result => {
        setBusy(false)
        setData(result.data)
      })
      .catch(() => {
        setBusy(false)
        toaster.danger(
          "Cannot Connect to Data Source :(. Please try again or refresh the page or check your Internet connections."
        )
      })
  }, [])

  // console.log(data.lastUpdate);

  return (
    <Layout>
      <SEO title="Home" />
      <Pane>
        {/* <Pane marginY={20}>
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
        </Pane> */}
        {busy ? (
          <Pane>
            <Paragraph textAlign="center">Please Wait...</Paragraph>
            <Spinner marginX="auto" marginY={120} />
          </Pane>
        ) : data ? (
          <Pane marginBottom={20}>
            <Pane>
              <Heading size={700}>Global Stats</Heading>
              <Text>Last Update : {formatDate(data.lastUpdate)}</Text>
              <Pane display="flex">
                <Pane>
                  <Heading>Confirmed</Heading>
                  <Heading>{formatNumber(data.confirmed.value)}</Heading>
                </Pane>
                <Pane></Pane>
              </Pane>
            </Pane>
          </Pane>
        ) : (
          <Paragraph>Can't Found Anything</Paragraph>
        )}
      </Pane>
    </Layout>
  )
}

export default IndexPage
