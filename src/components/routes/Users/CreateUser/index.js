import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import LoadingLine from "../../../util/LoadingLine";
import ErrorList from "../../../util/ErrorList";
import Title from "../../../util/Title";
import Alert from "../../../util/Alert";

export default function CreateUser({ userService }) {
  const [user, setUser] = useState({
    name: '', surname: '', email: '', password: ''
  });
  const [saved, setSaved] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState([]);
  const [informError, setInformError] = useState(false);
  const history = useHistory();

  function handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    setUser({
      ...user, [name]: value
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setDisabled(true);
    setInformError(false);
    try {
      await userService.createUser(user);
      setSaved(true);
    } catch (error) {
      setError(error.message);
      setInformError(true);
      setDisabled(false);
    }
  }

  return (<>
    <Title>Create User</Title>
    {saved && <Alert type="success" message="User saved successfully" />}
    <form onSubmit={handleSubmit} noValidate>

      <div className="form-group">
        <label htmlFor="nameInput">Name</label>
        <input
          id="nameInput"
          className="form-control"
          type="text"
          name="name"
          value={user.name}
          disabled={disabled}
          onChange={handleInputChange} />
      </div>
      <div className="form-group">
        <label htmlFor="surnameInput">Surname</label>
        <input
          id="surnameInput"
          className="form-control"
          type="text"
          name="surname"
          value={user.surname}
          disabled={disabled}
          onChange={handleInputChange} />
      </div>
      <div className="form-group">
        <label htmlFor="emailInput">Email</label>
        <input
          id="emailInput"
          className="form-control"
          type="email"
          name="email"
          value={user.email}
          disabled={disabled}
          onChange={handleInputChange} />
      </div>
      <div className="form-group">
        <label htmlFor="passwordInput">Password</label>
        <input
          id="passwordInput"
          className="form-control"
          type="password"
          name="password"
          value={user.password}
          disabled={disabled}
          onChange={handleInputChange} />
      </div>

      {informError && <ErrorList errors={[error]}></ErrorList>}
      {saved || <button type="submit" className="btn btn-primary" disabled={disabled}>Submit</button>}
    </form>
  
    {saved && <button className="btn btn-secondary" onClick={() => history.goBack()}>Back</button>}
    <br></br>
    {disabled && !saved && <LoadingLine>Loading...</LoadingLine>}
  </>);
}
