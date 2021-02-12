import Title from "../../../util/Title";
import UsersTable from "./Table";
import ConfirmationModal from "../../../util/ConfirmationModal";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react"

export default function ListUsers(props) {
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState({ id: 0, name: "", surname: "", email: "" })

  useEffect(() => { fetchUsers() });

  async function fetchUsers() {
    const users = await props.userService.getUsers();
    setUsers(users)
  }

  function deleteUser(user) {
    console.log("TODO: delete", user);
  }

  return (<>
    <Title>Users</Title>
    <UsersTable
      users={users}
      deleteHandler={setSelectedUser}>
    </UsersTable>
    <Link to={`/create`}>
      <button type="button" className="btn btn-primary float-right">
        Create
      </button>
    </Link>
    <ConfirmationModal
      title="Confirmation"
      action="Delete"
      item={selectedUser}
      name={selectedUser.name + " " + selectedUser.surname}
      deleteHandler={deleteUser}></ConfirmationModal>
  </>)
}
