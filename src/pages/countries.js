import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

export default function countries() {
  return (
    <Layout>
      <div>
        <Link to="/">
          <button height={40} iconBefore="arrow-left">
            back
          </button>
        </Link>
        <div marginY={20}>
          <div size={500}>Search Here</div>
          <div marginY={5}>
            <p>
              You can put multi-ingredients here, just separate using comma.
            </p>
            <input
              onBlur={event => {
                // setIngredientInput(event.target.value.split(/[., -]/))
              }}
              width="100%"
              height={50}
              placeholder="ingredients..."
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
