import React from "react"

export default class LoadingLine extends React.Component {
  render() {
    return (
      <div class="d-flex align-items-center">
        <strong>{this.props.children}</strong>
        <div class="spinner-border ml-3" role="status" aria-hidden="true"></div>
      </div>
    )
  }
}