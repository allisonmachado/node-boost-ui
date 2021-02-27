import React from "react";
import Title from "../../util/Title";
import ErrorList from "../../util/ErrorList";
import LoadingLine from "../../util/LoadingLine";

import { useState } from "react";
import { useAuthState } from "../../../hooks/useAuthState";
import { useHistory, useLocation } from "react-router-dom";

export default function LoginPage({ authService }) {
  const auth = useAuthState();
  const [user, setUser] = useState({ email: '', password: '' });
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState([]);
  const [informError, setInformError] = useState(false);

  const history = useHistory();
  const location = useLocation();

  function handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    setUser({
      ...user,
      [name]: value
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setDisabled(true);
    setInformError(false);
    try {
      const authUser = await authService.authenticateUser(user.email, user.password);
      auth.signIn(authUser);
      const { destination } = location.state || { destination: { pathname: "/" } };
      history.replace(destination);
    } catch (error) {
      setError(error.message);
      setInformError(true);
      setDisabled(false);
    }
  }

  return (<>
    <Title>Login</Title>
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="emailInput">Email address</label>
        <input
          id="emailInput"
          type="email"
          name="email"
          className="form-control"
          value={user.email}
          disabled={disabled}
          onChange={handleInputChange} />
      </div>
      <div className="form-group">
        <label htmlFor="passwordInput">Password</label>
        <input
          id="passwordInput"
          type="password"
          name="password"
          className="form-control"
          value={user.password}
          disabled={disabled}
          onChange={handleInputChange} />
      </div>
      {informError && <ErrorList errors={[error]}></ErrorList>}
      <button type="submit" className="btn btn-primary" disabled={disabled}>Submit</button>
    </form>
    <br></br>
    {disabled && <LoadingLine>Loading...</LoadingLine>}
  </>);
}
