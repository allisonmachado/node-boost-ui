import React from "react"
import NavLink from "./NavLink"


export default class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a className="navbar-brand" href="/">Node Boost</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/users">Users</NavLink>
              <NavLink to="/login">Login</NavLink>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}