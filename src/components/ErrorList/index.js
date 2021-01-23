import React from "react"

export default class ErrorList extends React.Component {
  render() {
    return (
      <div className="text-danger">
        <ul>{this.props.erros.map((err, index) => <li key={index}>{err}</li>)}</ul>
      </div>
    )
  }
}