import React, { Component } from "react";
import Input from "./common/Input";
import Button from "./common/Button";
import axios from "axios";
import { apiEndpoint } from "../utils/apiEndpoint";

class Register extends Component {
  state = {
    name: "",
    password: "",
    confirmPassword: "",
    email: "",
  };

  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.id]: e.target.value });
  };

  handleSubmit = async (e) => {
    // make an api call /api/users to register user

    const body = JSON.stringify(this.state);

    // make an api call here
    const res = await axios({
      method: "POST",
      url: apiEndpoint + "/api/users",
      headers: {
        "Content-Type": "application/json",
      },
      data: body,
    });
    console.log(res.data);
    this.setState({
      ...this.state,
      name: "",
      password: "",
      confirmPassword: "",
      email: "",
    });
  };

  render() {
    return (
      <div className="bg-brand-deep-blue h-screen">
        <div className="mx-4">
          <Input
            name="Name"
            id="name"
            type="text"
            placeholder="Enter your name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <Input
            name="Email"
            id="email"
            type="text"
            placeholder="name@example.com"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <Input
            name="Password"
            id="password"
            type="password"
            placeholder="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <Input
            name="confirm password"
            id="confirmPassword"
            type="password"
            placeholder="confirm password"
            onChange={this.handleChange}
            value={this.state.confirmPassword}
          />
          <Button name="REGISTER" onClick={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default Register;
