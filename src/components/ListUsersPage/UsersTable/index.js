import React from "react"

export default class UsersTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      userSelected: null,
    }
    this.deleteButtonClick = this.deleteButtonClick.bind(this);
  }

  async componentDidMount() {
    const users = await this.props.userService.getUsers();
    this.setState({ users });
  }

  deleteButtonClick(user) {
    this.setState(() => ({
      userSelected: user,
    }));
  }

  deleteUser(user) {
    this.setState({ users: [] });
  }

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
            {this.state.users.map(user => <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.email}</td>
              <td>
                <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#confirmationModal" onClick={() => this.deleteButtonClick(user)}>
                  <i className="bi-trash"></i>
                </button>
              </td>
            </tr>)}
          </tbody>
        </table>
        <div className="modal fade" id="confirmationModal" tabIndex={-1} aria-labelledby="confirmationModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="confirmationModalLabel">Confirm</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                {this.state.userSelected ? <span>Delete user "{this.state.userSelected.name + this.state.userSelected.surname}"?</span> : <span></span> }
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => this.deleteUser(this.state.userSelected)}>Yes</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}