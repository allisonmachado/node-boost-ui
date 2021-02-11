import React from "react"

import { Link, withRouter } from "react-router-dom";

class NavLink extends React.Component {
  constructor(props) {
    super(props);
    this.current = this.isActivePage(this.props.location.pathname);
  }

  isActivePage(path) {
    if (this.props.to === "/") {
      return this.props.location.pathname === "/";
    }
    return path.startsWith(this.props.to);
  }

  render() {
    this.current = this.isActivePage(this.props.location.pathname);
    return (
      <li className={this.current ? "nav-item active" : 'nav-item'}>
        <Link className="nav-link" to={this.props.to}>
          {this.props.children} {this.current ? <span className="sr-only">(current)</span> : null}
        </Link>
      </li>
    )
  }
}

export default withRouter(NavLink);