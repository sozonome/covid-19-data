import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import axios from "axios";
import { API_URL } from "../functions/fetchApi";
import LoadingBox from "../components/loadingBox";
import moment from "moment";
import SEO from "../components/seo";
import Chart from "../components/chart";
import { Link } from "gatsby";

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
    axios(API_URL + `/daily`)
      .then(result => {
        const { data } = result;
        data.forEach(entry => {
          const { confirmed, deaths, incidentRate, reportDate } = entry;

          const date = moment(reportDate, "YYYY-MM-DD").format("MM/DD");

          setConfirmedTotal(confirmedTotal => [
            ...confirmedTotal,
            { date, total: confirmed.total },
          ]);
          setConfirmedInChina(confirmedInChina => [
            ...confirmedInChina,
            { date, total: confirmed.china },
          ]);
          setConfirmedOutsideChina(confirmedOutsideChina => [
            ...confirmedOutsideChina,
            { date, total: confirmed.outsideChina },
          ]);

          setDeathsTotal(deathsTotal => [
            ...deathsTotal,
            { date, total: confirmed.total },
          ]);
          setDeathsInChina(deathsInChina => [
            ...deathsInChina,
            { date, total: deaths.china },
          ]);
          setDeathsOutsideChina(deathsOutsideChina => [
            ...deathsOutsideChina,
            { date, total: deaths.outsideChina },
          ]);

          setIncidentRate(incidentRateTotal => [
            ...incidentRateTotal,
            { date, total: incidentRate.toFixed(2) },
          ]);
        });
        setBusy(false);
      })
      // .catch(() => {
      //   setBusy(false);
      //   toaster.danger("Please check your internet connection.");
      // });
  }, []);

  return (
    <Layout>
      <SEO title="Report Charts" />
      <Link to="/">
        <button iconBefore="arrow-left">Home</button>
      </Link>
      <div size={800} marginTop={12} marginBottom={32}>
        Charts
      </div>
      {busy ? (
        <LoadingBox />
      ) : (
        <div marginBottom={40}>
          <Chart
            data={confirmedTotal}
            title="Confirmed"
            subTitle="Total"
            backgroundColor="rgba(222, 115, 86, 0.4)"
          />
          <Chart
            data={confirmedInChina}
            title="Confirmed"
            subTitle="in China"
            backgroundColor="rgba(222, 115, 86, 0.4)"
          />
          <Chart
            data={confirmedOutsideChina}
            title="Confirmed"
            subTitle="Outside China"
            backgroundColor="rgba(222, 115, 86, 0.4)"
          />
          {/* <ChartMixed
            data={[confirmedTotal, confirmedInChina, confirmedOutsideChina]}
            title="Confirmed"
            label={['Total', 'Mainland China', 'Outside China']}
            backgroundColor="rgba(222, 115, 86, 0.4)"
          /> */}

          <Chart
            data={deathsTotal}
            title="Deaths"
            subTitle="Total"
            backgroundColor="rgba(171, 81, 89, 0.4)"
          />
          <Chart
            data={deathsInChina}
            title="Deaths"
            subTitle="in China"
            backgroundColor="rgba(171, 81, 89, 0.4)"
          />
          <Chart
            data={deathsOutsideChina}
            title="Deaths"
            subTitle="Outside China"
            backgroundColor="rgba(171, 81, 89, 0.4)"
          />

          <Chart
            data={incidentRateTotal}
            title="Incident Rate"
            takeRecent={100}
            backgroundColor="rgba(255, 217, 91, 0.4)"
          />

          <Link to="/">
            <button iconBefore="arrow-left">Home</button>
          </Link>
        </div>
      )}
    </Layout>
  );
}
