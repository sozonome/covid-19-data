import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Pane,
  Heading,
  Paragraph,
  Spinner,
  toaster,
  Button,
  Select,
} from "evergreen-ui"
import axios from "axios"
import { API_URL } from "../functions/fetchApi"
import { Link } from "gatsby"
import DataBox from "../components/dataBox"
import LoadingBox from "../components/loadingBox"
import CountrySearch from "../components/countrySearch"

const IndexPage = () => {
  const [busy, setBusy] = useState(true)
  const [data, setData] = useState()
  const [countries, setCountries] = useState()
  const [countryBusy, setCountryBusy] = useState(true)
  const [searchByCountry, setSearchByCountry] = useState(false)
  const [countryData, setCountryData] = useState()

  useEffect(() => {
    axios
      .all([axios.get(API_URL), axios.get(API_URL + `/countries`)])
      .then(
        axios.spread((...result) => {
          setData(result[0].data)
          setCountries(result[1].data.countries)
          setBusy(false)
        })
      )
      .catch(() => {
        setBusy(false)
        toaster.danger("Please check your Internet connections.")
      })
  }, [])

  function showDataPerCountry(country) {
    setSearchByCountry(true)
    axios(API_URL + `/countries/${country}`)
      .then(result => {
        setCountryData(result.data)
        setCountryBusy(false)
      })
      .catch(() => {
        toaster.warning("Something's wrong")
        setCountryBusy(false)
      })
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Pane>
        {busy ? (
          <LoadingBox marginY={120} />
        ) : data ? (
          <Pane marginBottom={20}>
            <DataBox type="global" title="Global Stats" lastUpdate={true} data={data} />
            <Pane marginY={20}>
              <Pane marginBottom={10}>
                <CountrySearch
                  countries={countries}
                  // callBack function
                  callDataPerCountry={selectedCountry =>
                    showDataPerCountry(selectedCountry)
                  }
                />
              </Pane>
              {searchByCountry ? (
                countryBusy ? (
                  <LoadingBox marginY={20} />
                ) : (
                  <DataBox type="country" data={countryData} />
                )
              ) : null}
            </Pane>
            <Link to="dailySummary">
              <Button>Daily Summary</Button>
            </Link>
          </Pane>
        ) : (
          <Paragraph>Can't Found Anything</Paragraph>
        )}
      </Pane>
    </Layout>
  )
}

export default IndexPage
