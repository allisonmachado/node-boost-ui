import React from "react"

export default class UsersTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  async componentDidMount() {
    const users = await this.props.userService.getUsers();
    this.setState({ users });
  }

  render() {
    return (
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
            <td>?</td>
          </tr>)}
        </tbody>
      </table>
    )
  }
}