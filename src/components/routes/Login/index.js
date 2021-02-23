import React from "react"
import Title from "../../util/Title"
import ErrorList from "../../util/ErrorList"
import LoadingLine from "../../util/LoadingLine";

import { Redirect } from "react-router-dom";
import { useState } from "react"
import { useAuthState } from "../../../hooks/useAuthState";

export default function LoginPage({ authService }) {
  const auth = useAuthState()
  const [user, setUser] = useState({ email: '', password: '' });
  const [disabled, setDisabled] = useState(false);
  const [informError, setInformError] = useState(false);

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
    setDisabled(true)
    setInformError(false)
    try {
      const authUser = await authService.authenticateUser(user.email, user.password);
      auth.signIn(authUser)
    } catch (error) {
      setInformError(true)
      setDisabled(false)
    }
  }

  const redirect = <Redirect to={{ pathname: "/" }} />
  const thisPage = <>
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
      {informError && <ErrorList errors={["Invalid email or password"]}></ErrorList>}
      <button type="submit" className="btn btn-primary" disabled={disabled}>Submit</button>
    </form>
    <br></br>
    {disabled && <LoadingLine>Loading...</LoadingLine>}
  </>

  return (!auth.user ? thisPage : redirect)
}
