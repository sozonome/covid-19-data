/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

/* eslint-disable react/no-danger */
import React from 'react'
import { extractStyles } from 'evergreen-ui'

export const onRenderBody = ({ setHeadComponents }) => {
  // Get the css and hydration script from Evergreen.
  const { css, hydrationScript } = extractStyles()

  // Takes an array of components as its first argument which are added to
  // the headComponents array which is passed to the html.js component.
  setHeadComponents([
    // We need a key here for Gatsby to stop complaining.
    <React.Fragment key="evergreen-ssr">
      <style id="evergreen-css" dangerouslySetInnerHTML={{ __html: css }} />
      {hydrationScript}
    </React.Fragment>,
  ])
}