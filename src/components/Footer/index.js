import React from "react"

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer mt-auto py-3 bg-light">
        <div className="container">
          <div className="row my-4">
            <div className="col-sm">
              <a className="text-secondary font-weight-bold" href="/">GitHub</a>
            </div>
            <div className="col-sm">
              <a className="text-secondary font-weight-bold" href="/">About</a>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              Designed and built with love by <a href="https://github.com/allisonmachado">Allison Machado</a>.
                Currently v0.1.0. Code licensed <a href="/">MIT</a>.
              </div>
          </div>
        </div>
      </footer>
    )
  }
}