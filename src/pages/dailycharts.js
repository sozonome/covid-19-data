import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import axios from "axios";
import { API_URL } from "../functions/fetchApi";
import LoadingBox from "../components/loadingBox";
import moment from "moment";
import SEO from "../components/seo";
import Chart from "../components/chart";
import { Link } from "gatsby";
import { AppTheme } from "../styles/themeColor";
import AppButton from "../components/button";

export default function DailyCharts() {
  const [confirmedTotal, setConfirmedTotal] = useState([]);
  const [confirmedInChina, setConfirmedInChina] = useState([]);
  const [confirmedOutsideChina, setConfirmedOutsideChina] = useState([]);

  const [deathsTotal, setDeathsTotal] = useState([]);
  const [deathsInChina, setDeathsInChina] = useState([]);
  const [deathsOutsideChina, setDeathsOutsideChina] = useState([]);

  const [incidentRateTotal, setIncidentRate] = useState([]);

  const [busy, setBusy] = useState(true);

  useEffect(() => {
    // axios(API_URL + `/daily`)
    //   .then(result => {
    //     const { data } = result;
    //     data.forEach(entry => {
    //       const { confirmed, deaths, incidentRate, reportDate } = entry;

    //       const date = moment(reportDate, "YYYY-MM-DD").format("MM/DD");

    //       setConfirmedTotal(confirmedTotal => [
    //         ...confirmedTotal,
    //         { date, total: confirmed.total },
    //       ]);
    //       setConfirmedInChina(confirmedInChina => [
    //         ...confirmedInChina,
    //         { date, total: confirmed.china },
    //       ]);
    //       setConfirmedOutsideChina(confirmedOutsideChina => [
    //         ...confirmedOutsideChina,
    //         { date, total: confirmed.outsideChina },
    //       ]);

    //       setDeathsTotal(deathsTotal => [
    //         ...deathsTotal,
    //         { date, total: confirmed.total },
    //       ]);
    //       setDeathsInChina(deathsInChina => [
    //         ...deathsInChina,
    //         { date, total: deaths.china },
    //       ]);
    //       setDeathsOutsideChina(deathsOutsideChina => [
    //         ...deathsOutsideChina,
    //         { date, total: deaths.outsideChina },
    //       ]);

    //       setIncidentRate(incidentRateTotal => [
    //         ...incidentRateTotal,
    //         { date, total: incidentRate.toFixed(2) },
    //       ]);
    //     });
    //     setBusy(false);
    //   })
    //   .catch(() => {
    //     setBusy(false);
    //     // toaster.danger("Please check your internet connection.");
    //   });
    setBusy(false)
  }, []);

  return (
    <Layout>
      <SEO title="Report Charts" />
      <main className="px-4">
        <Link to="/">
          <AppButton text="Home" />
        </Link>
        <div className="mt-2 uppercase font-semibold tracking-wider">
          Charts
        </div>
        {busy ? (
          <LoadingBox />
        ) : (
          <div marginBottom={40}>

            <p>
              In Development
            </p>

            <Link to="/">
              <AppButton text="Home" />
            </Link>
          </div>
        )}
      </main>
    </Layout>
  );
}
