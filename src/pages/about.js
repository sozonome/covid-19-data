import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import appIcon from "../images/v-19.png";
import SectionTitle from "../components/sectionTitle";
import AppButton from "../components/button";

export default function about() {
  return (
    <Layout>
      <SEO title="About" />
      <div className="p-4">
        <SectionTitle text="About" />
        <div>
          <div className="mb-4">
            <p>
              Developed by{" "}
              <a
                className="font-bold underline"
                href="https://agustinusnathaniel.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                @sozonome
              </a>
            </p>
            <p>
              Powered by{" "}
              <a
                className="font-bold underline"
                href="https://github.com/mathdroid/covid-19-api"
                target="_blank"
                rel="noopener noreferrer"
              >
                @mathdroid
              </a>
              's COVID-19-API
            </p>
            <p>Data Source : John Hopkins University CSSE</p>

            <img className="w-32" alt="App Icon" src={appIcon} />
            <p>
              Icons made by{" "}
              <a
                className="font-bold underline"
                href="https://www.flaticon.com/authors/vitaly-gorbachev"
                title="Vitaly Gorbachev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vitaly Gorbachev
              </a>{" "}
              from{" "}
              <a
                className="font-bold underline"
                href="https://www.flaticon.com/"
                title="Flaticon"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.flaticon.com
              </a>
            </p>
          </div>
          <Link to="/">
            <AppButton text="Home" small />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
