import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import axios from "axios";
import { API_URL } from "../functions/fetchApi";
import LoadingBox from "../components/loadingBox";
import moment from "moment";
import SEO from "../components/seo";
import Chart from "../components/chart";
import { Link } from "gatsby";
import AppButton from "../components/button";
import SectionTitle from "../components/sectionTitle";
import RateChart from "../components/RateChart";

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
            { date, total: deaths.total },
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
      })
      .then(()=>{
        setBusy(false);
      })
      .catch(() => {
        setBusy(false);
        alert("Please check your internet connection.");
      });
  }, []);

  return (
    <Layout>
      <SEO title="Report Charts" />
      <main className="px-4">
        <SectionTitle text="Charts" />
        {busy ? (
          <LoadingBox />
        ) : (
          <div>
            <h2 className="uppercase text-center text-4xl">Total</h2>
            <Chart data={confirmedTotal} title="Total Confirmed" />
            <Chart data={deathsTotal} title="Total Deaths" />
            <Chart data={incidentRateTotal} title="Incident Rate" takeRecent={100} />
            
            {/* <h2 className="uppercase text-center text-4xl">Rate</h2>
            <RateChart data={confirmedTotal} title="Confirmed" />
            <RateChart data={deathsTotal} title="Deaths" /> */}
            
            <Link to="/">
              <AppButton text="Home" small />
            </Link>
          </div>
        )}
      </main>
    </Layout>
  );
}
