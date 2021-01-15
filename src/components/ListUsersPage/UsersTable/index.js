import React from "react"

export default class UsersTable extends React.Component {
  render() {
    return (
      <table class="table table-hover table-responsive-sm">
        <thead class="thead-light">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>?</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>?</td>
          </tr>
          <tr>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>?</td>
          </tr>
        </tbody>
      </table>
    )
  }
}