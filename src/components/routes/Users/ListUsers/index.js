import Title from "../../../util/Title";
import UsersTable from "./Table";
import PrivateComponent from "../../../util/PrivateComponent";
import ConfirmationModal from "../../../util/ConfirmationModal";

import { Link, useRouteMatch } from "react-router-dom";
import { useState, useEffect } from "react"

export default function ListUsers({ userService }) {
  const { url } = useRouteMatch();
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState({ id: 0, name: "", surname: "", email: "" })

  useEffect(() => {
    async function fetchUsers() {
      const users = await userService.getUsers();
      setUsers(users);
    }
    fetchUsers()
  }, [userService]);

  async function deleteUser(user) {
    await userService.deleteUser(user.id);
    const currentUsers = users.filter(u => u.id !== user.id);
    setUsers(currentUsers);
  }

  return (<>
    <Title>Users</Title>
    <UsersTable
      users={users}
      deleteHandler={setSelectedUser}>
    </UsersTable>
    <PrivateComponent>
      <Link to={`${url}/create`}>
        <button type="button" className="btn btn-primary float-right">
          Create
      </button>
      </Link>
    </PrivateComponent>
    <ConfirmationModal
      title="Confirmation"
      action="Delete"
      item={selectedUser}
      name={selectedUser.name + " " + selectedUser.surname}
      deleteHandler={deleteUser} />
  </>)
}
