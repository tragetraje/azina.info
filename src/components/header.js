import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"


export default({siteTitle}) => {
  return (
    <h3 css={css`
      padding-top: ${rhythm(1)}
      padding-bottom: ${rhythm(1)}
    `}>
      { siteTitle }
    </h3>
  )
}
