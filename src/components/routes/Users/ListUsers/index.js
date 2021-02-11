import React from "react"
import Title from "../../../util/Title";
import UsersTable from "./Table";
import ConfirmationModal from "../../../util/ConfirmationModal";

import { Link, withRouter } from "react-router-dom";

class ListUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      userSelected: {
        id: 0,
        name: "",
        surname: "",
        email: "",
      },
    }
    this.deleteUserClick = this.deleteUserClick.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  async componentDidMount() {
    const users = await this.props.userService.getUsers();
    this.setState({ users });
  }

  deleteUserClick(user) {
    this.setState(() => ({
      userSelected: user,
    }));
  }

  deleteUser(user) {
    console.log("TODO: delete", user);
    this.setState({ users: [] });
  }

  render() {
    const { path, url } = this.props.match;

    return (<>
      <Title>Users</Title>
      <UsersTable
        users={this.state.users}
        deleteHandler={this.deleteUserClick}>
      </UsersTable>
      <Link to={`${url}/create`}>
        <button type="button" className="btn btn-primary float-right">
          Create
          </button>
      </Link>
      <ConfirmationModal
        title="Confirmation"
        action="Delete"
        item={this.state.userSelected}
        name={this.state.userSelected.name + " " + this.state.userSelected.surname}
        deleteHandler={this.deleteUser}></ConfirmationModal>
    </>)
  }
}

export default withRouter(ListUsers);