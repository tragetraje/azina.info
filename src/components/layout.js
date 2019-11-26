import {React, Fragment} from "react"
import { css } from "@emotion/core"
import Header from "../components/header"
import { useStaticQuery, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

  export default ({ children }) => {
    const data = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `
    )
    return (
  <Fragment>
    <div css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1)};
        `}>
      <Header siteTitle={ data.site.siteMetadata.title } />
        <div css={css`
          padding-top: ${rhythm(4)};
        `}>
          {children}
        </div>
    </div>
  </Fragment>
  )}
