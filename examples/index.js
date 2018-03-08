// tools
import React from "react"
import { render } from "react-dom"
import { Switch, Route, BrowserRouter } from "react-router-dom"

// link component
import LinkFilter from "../src/index"
const Link = props =>
  <LinkFilter domain="localhost:3002" {...props}>
    {props.children}
  </LinkFilter>

const Main = props => {
  return (
    <div>
      <Link to="https://www.analog.cafe">External website</Link>
      <br />
      <Link to="http://localhost:3002/page">Internal link (from absolute)</Link>
      <br />
      <Link to="localhost:3002/page">
        Internal link (from absolute, invalid/missing http://)
      </Link>
      <br />
      <Link to="/page">Internal link (from relative)</Link>
      <br />
      <Link>Empty link</Link>
      <br />
      <Link to="#anchor">Anchor link</Link>
      <br />
      <Link to="analog.cafe">Fixed invalid link (missing http://)</Link>
    </div>
  )
}
const Page = props => {
  return <Link to="/">Go back</Link>
}

render(
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/page" component={Page} />
      </Switch>
    </BrowserRouter>
  </div>,
  window.document.getElementById("app")
)
