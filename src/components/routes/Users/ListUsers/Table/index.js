import { Link, useRouteMatch } from "react-router-dom";

import PrivateComponent from "../../../../util/PrivateComponent";

export default function UsersTable({ users, deleteHandler }) {
  const { url } = useRouteMatch();

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
        {users.map(user => <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.surname}</td>
          <td>{user.email}</td>
          <td>
            <Link to={`${url}/${user.id}`} role="button" className="btn btn-light mr-1">
              <i className="bi-eye"></i>
            </Link>
            <PrivateComponent>
              <Link to={`${url}/edit/${user.id}`} role="button" className="btn btn-light mr-1">
                <i className="bi-pencil"></i>
              </Link>
            </PrivateComponent>
            <PrivateComponent>
              <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#confirmationModal" onClick={() => deleteHandler(user)}>
                <i className="bi-trash"></i>
              </button>
            </PrivateComponent>
          </td>
        </tr>)}
      </tbody>
    </table>
  );
}
