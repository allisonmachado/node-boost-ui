import React from "react"

export default class UsersTable extends React.Component {
  render() {
    return (
      <React.Fragment>
        <table className="table table-hover table-responsive-sm">
          <thead className="thead-light">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Surname</th>
              <th scope="col">Email</th>
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map(user => <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.email}</td>
              <td>
                <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#confirmationModal" onClick={() => this.props.deleteHandler(user)}>
                  <i className="bi-trash"></i>
                </button>
              </td>
            </tr>)}
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}