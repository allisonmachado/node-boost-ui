import React from "react"
import Title from "../Title"
import ErrorList from "../ErrorList"
import LoadingLine from "../LoadingLine";

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: false,
      informError: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ disabled: true });
    this.setState({ informError: false });
    try {
      const access = await this.props.authService.authenticateUser(this.state.email, this.state.password);
      // TODO: save access token and redirect
    } catch (error) {
      this.setState({ informError: true });
    } finally {
      this.setState({ disabled: false });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Title>Login</Title>
        <form onSubmit={this.handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="emailInput">Email address</label>
            <input
              id="emailInput"
              type="email"
              name="email"
              className="form-control"
              value={this.state.email}
              disabled={this.state.disabled}
              onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="passwordInput">Password</label>
            <input
              id="passwordInput"
              type="password"
              name="password"
              className="form-control"
              value={this.state.password}
              disabled={this.state.disabled}
              onChange={this.handleInputChange} />
          </div>
          {this.state.informError && <ErrorList erros={["Invalid email or password"]}></ErrorList>}
          <button type="submit" className="btn btn-primary" disabled={this.state.disabled}>Submit</button>
        </form>
        <br></br>
        {this.state.disabled && <LoadingLine>Loading...</LoadingLine>}
      </React.Fragment>
    )
  }
}