import React from "react"
import Title from "../Title"
import ErrorList from "../ErrorList"

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    // TODO: submit auth request
    event.preventDefault();
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
              value={this.state.email}
              className="form-control"
              onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="passwordInput">Password</label>
            <input 
              id="passwordInput"
              type="password"
              name="password"
              value={this.state.password}
              className="form-control"
              onChange={this.handleInputChange}/>
          </div>
          <ErrorList erros={["Invalid email or password"]}></ErrorList>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </React.Fragment>
    )
  }
}