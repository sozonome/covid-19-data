import React, { useState, useEffect } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import axios from "axios";
import { API_URL } from "../functions/fetchApi";
import DataBox from "../components/dataBox";
import LoadingBox from "../components/loadingBox";
import CountrySearch from "../components/countrySearch";
import DailySummaryBox from "../components/dailySummaryBox";
import { Link } from "gatsby";
import HeroImg from '../images/medical-mask-pana.svg';
import { AppTheme } from "../styles/themeColor";
import DataBoxCountry from "../components/dataBoxCountry";

const IndexPage = () => {
  const [busy, setBusy] = useState(true);
  const [data, setData] = useState();
  const [countries, setCountries] = useState();
  const [countryBusy, setCountryBusy] = useState(true);
  const [searchByCountry, setSearchByCountry] = useState(false);
  const [countryData, setCountryData] = useState();

  const [dailySummary, setDailySummary] = useState();

  const [countryFlag, setCountryFlag] = useState();

  useEffect(() => {
    axios
      .all([
        axios.get(API_URL),
        axios.get(API_URL + `/countries`),
        axios.get(API_URL + `/daily`),
      ])
      .then(
        axios.spread((...result) => {
          setData(result[0].data);
          setCountries(result[1].data.countries);
          setDailySummary(result[2].data);
          setBusy(false);
        })
      );
    // .catch(() => {
    //   setBusy(false);
    //   toaster.danger("Please check your Internet connections.");
    // });
  }, []);

  function showDataPerCountry(country) {
    setSearchByCountry(true);
    // setCountryFlag(selectedCountry[0]);
    axios(API_URL + `/countries/${country}`).then(result => {
      setCountryData(result.data);
      setCountryBusy(false);
    });
    // .catch(() => {
    //   toaster.warning("Something's wrong");
    //   setCountryBusy(false);
    // });
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        {busy ? (
          <LoadingBox />
        ) : data ? (
          <div>
            <div className="flex">
              <img className="w-7/12" src={HeroImg} alt=""/>
              <p className="flex self-center text-sm sm:text-2xl font-medium">Stay safe <br/>Keep Social Distancing</p>
            </div>
            <DataBox
              title="🌐 Global Stats"
              lastUpdate={true}
              data={data}
            />
            <div>
              <CountrySearch
                countries={countries}
                // callBack function
                callDataPerCountry={selectedCountry =>
                  showDataPerCountry(selectedCountry)
                }
              />
            </div>
            {searchByCountry ? (
              countryBusy ? (
                <LoadingBox />
              ) : (
                <DataBoxCountry data={countryData} />
              )
            ) : null}
            {/* <DailySummaryBox data={dailySummary} /> */}
          </div>
        ) : (
          <p>Can't Found Anything</p>
        )}
        {/* <div className="p-4">
          <Link to="/dailycharts">
            <button className="text-white rounded-lg p-2 w-1/2 sm:w-1/3 font-medium" style={{backgroundColor:AppTheme.mainDarkBlue}}>View Charts</button>
          </Link>
        </div> */}
      </div>
    </Layout>
  );
};

export default IndexPage;
