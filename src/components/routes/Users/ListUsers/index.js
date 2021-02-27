import Title from "../../../util/Title";
import UsersTable from "./Table";
import LoadingLine from "../../../util/LoadingLine";
import PrivateComponent from "../../../util/PrivateComponent";
import ConfirmationModal from "../../../util/ConfirmationModal";

import { Link, useRouteMatch } from "react-router-dom";
import { useState, useEffect } from "react"

export default function ListUsers({ userService }) {
  const [selectedUser, setSelectedUser] = useState({
    id: 0, name: "", surname: "", email: ""
  });
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([])
  const { url } = useRouteMatch();

  useEffect(() => {
    async function fetchUsers() {
      const users = await userService.getUsers();
      setUsers(users);
      setLoading(false);
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
    {loading ? <LoadingLine>Loading...</LoadingLine> : <>
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
    </>}
  </>)
}
