import React, { Component } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "./styles/Register.css";

class RegisterPage extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      error: ""
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: "" });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: "Username is required" });
    }

    if (!this.state.password) {
      return this.setState({ error: "Password is required" });
    }

    axiosWithAuth()
      .post("https://gigapet-3.herokuapp.com/api/auth/register", {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        console.log(res.status);
        this.props.history.push("/login");
      })
      .catch(errors => console.log(errors));

    return this.setState({ error: "" });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value
    });
  }

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value
    });
  }

  render() {
    return (
      <div className="Register">
        <form className="register-form" onSubmit={this.handleSubmit}>
          <h2 className="register-h2">Register Now!</h2>
          <h4>Email</h4>
          <input
            type="text"
            data-test="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <h4>Create Username</h4>
          <input
            type="text"
            data-test="username"
            value={this.state.username}
            onChange={this.handleUserChange}
          />
          <br />
          <label className="register-label">Create Password</label>
          <input
            type="password"
            data-test="password"
            value={this.state.password}
            onChange={this.handlePassChange}
          />
          <br />
          <input type="submit" value="Register" data-test="submit" />
        </form>
      </div>
    );
  }
}

export default RegisterPage;
