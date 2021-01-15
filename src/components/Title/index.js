import React from "react"

export default class Title extends React.Component {

  render() {
    return (
      <React.Fragment>
        <h1>{this.props.children}</h1>
        <hr></hr>
      </React.Fragment>
    )
  }
}