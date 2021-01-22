import React from "react"

export default class ConfirmationModal extends React.Component {
  render() {
    return (
      <div className="modal fade" id="confirmationModal" tabIndex={-1} aria-labelledby="confirmationModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="confirmationModalLabel">{this.props.title}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              {this.props.action}: <span className="font-weight-bold">{this.props.name}</span>?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => this.props.deleteHandler(this.props.item)}>Yes</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}