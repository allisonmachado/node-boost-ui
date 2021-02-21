import React, { useState } from "react";
import Title from "../../../util/Title";

import LoadingLine from "../../../util/LoadingLine";
import ErrorList from "../../../util/ErrorList";

export default function CreateUser() {
  const [user, setUser] = useState({
    name: '', surname: '', email: '', password: ''
  });
  const [disabled, setDisabled] = useState(false);
  const [informError, setInformError] = useState(false);

  function handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    setUser({
      ...user, [name]: value
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setDisabled(true)
    setInformError(false)
    try {
      console.log(user);
      // TODO: Save user
    } catch (error) {
      setInformError(true)
      setDisabled(false)
    }
  }

  return (<>
    <Title>Create User</Title>
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
        <label htmlFor="passwordInput">Email</label>
        <input
          id="passwordInput"
          className="form-control"
          type="password"
          name="password"
          value={user.password}
          disabled={disabled}
          onChange={handleInputChange} />
      </div>

      {informError && <ErrorList erros={["Invalid email or password"]}></ErrorList>}
      <button type="submit" className="btn btn-primary" disabled={disabled}>Submit</button>
    </form>

    <br></br>
    {disabled && <LoadingLine>Loading...</LoadingLine>}
  </>);
}
