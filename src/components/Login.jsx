import React, { Component } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import "./styles/Login.css";

class LoginPage extends Component {
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
      .post("https://gigapet-3.herokuapp.com/api/auth/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        localStorage.setItem("token", res.data.token);
        this.props.history.push("/dashboard");
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
      <div className="Login">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <h2 className="login-h2">Log In!</h2>
          <label className="login-label">Username</label>
          <input
            type="text"
            data-test="username"
            value={this.state.username}
            onChange={this.handleUserChange}
          />
          <label className="login-label">Password</label>
          <input
            type="password"
            data-test="password"
            value={this.state.password}
            onChange={this.handlePassChange}
          />
          <input type="submit" value="Log In" data-test="submit" />
        </form>
      </div>
    );
  }
}

export default LoginPage;
