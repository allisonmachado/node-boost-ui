import Title from "../../../util/Title";
import UsersTable from "./Table";
import PrivateComponent from "../../../util/PrivateComponent";
import ConfirmationModal from "../../../util/ConfirmationModal";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react"

export default function ListUsers(props) {
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState({ id: 0, name: "", surname: "", email: "" })

  useEffect(() => {
    async function fetchUsers() {
      const users = await props.userService.getUsers();
      setUsers(users);
    }
    fetchUsers()
  }, [props.userService]);

  function deleteUser(user) {
    console.log("TODO: delete", user);
  }

  return (<>
    <Title>Users</Title>
    <UsersTable
      users={users}
      deleteHandler={setSelectedUser}>
    </UsersTable>
    <PrivateComponent>
      <Link to={`/create`}>
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
