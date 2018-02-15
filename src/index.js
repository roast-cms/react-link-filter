// tools
import React from "react"
import { NavLink } from "react-router-dom"

// helpers
import { makeRelative } from "./utils"

// return
export default props => {
  // filter out invalid props
  const { activeClassName, connectionStatus, ...validProps } = props
  // all links within analog.cafe domain should become relative
  let address = makeRelative(validProps.to, validProps.domain)

  if (address.includes("http"))
    // external links
    return (
      <a
        href={address}
        target="_blank"
        rel="nofollow noopener noreferrer"
        title={address}
        {...validProps}
      >
        {validProps.children}
      </a>
    )
  else if (address === "#")
    // empty link
    return (
      <a {...validProps}>
        {validProps.children}
      </a>
    )
  else if (address.includes("#"))
    // anchor tags
    return (
      <a href={address} title={address} {...validProps}>
        {validProps.children}
      </a>
    )
  else if (address.startsWith("/")) {
    // since `to` prop has changed, new props need to be generated
    const { to, ...newProps } = validProps
    // internal links (no title attribute necessary)
    return (
      <NavLink exact to={address} {...newProps}>
        {validProps.children}
      </NavLink>
    )
  } else {
    // fix invalid links
    return (
      <a
        href={"http://" + address}
        target="_blank"
        rel="nofollow noopener noreferrer"
        title={"http://" + address}
        {...validProps}
      >
        {validProps.children}
      </a>
    )
  }
}
