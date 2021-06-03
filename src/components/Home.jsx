import React, { Component } from "react";
import axios from "axios";
import { apiEndpoint } from "../utils/apiEndpoint";
import Modal from "react-modal";
import { Redirect } from "react-router";
import Input from "./common/Input";
import Button from "./common/Button";
import Posts from "./Posts";

class Home extends Component {
  async componentDidMount() {
    if (!localStorage.getItem("token")) {
      window.location = "/";
    }
    this.setState({ ...this.state, userId: this.props.state.user.id });

    const res = await axios({
      method: "GET",
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
      url: `${apiEndpoint}/api/posts`,
    });

    const posts = res.data;
    this.setState({ ...this.state, posts });
    console.log(this.state);
  }

  state = {
    isOpen: false,
    title: "",
    data: "",
    userId: "",
    posts: [],
  };

  handleOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.id]: e.target.value });
  };

  handleLogout = () => {
    localStorage.removeItem("token");
    window.location = "/";
  };

  handleSubmit = async (e) => {
    const { data, title, userId } = this.state;
    const body = JSON.stringify({ data: data, title: title });
    console.log(body);
    try {
      const res = await axios({
        method: "POST",
        url: `${apiEndpoint}/api/posts/${userId}`,
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
        data: body,
      });

      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#0D0C1D",
      },
    };

    if (!this.props.state.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <div className="h-screen w-screen flex">
        <div className="w-1/6 h-screen p-2 flex flex-col">
          <button className="p-1 bg-brand-pink" onClick={this.handleOpen}>
            Add post
          </button>
          <div className="m-2">
            <Button name="LOGOUT" onClick={this.handleLogout} />
          </div>
          <Modal
            isOpen={this.state.isOpen}
            style={customStyles}
            onRequestClose={this.handleClose}
            ariaHideApp={false}
          >
            <h1 className="text-xl m-2 text-brand-peach">
              Please post something
            </h1>
            <Input
              name="Title"
              id="title"
              placeholder="please enter the title of the post"
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <div className="my-control">
              <label htmlFor="data" className="my-label">
                Please write something
              </label>
              <textarea
                id="data"
                rows={7}
                cols={10}
                value={this.state.data}
                onChange={this.handleChange}
              />
            </div>
            <Button name="SUBMIT" onClick={this.handleSubmit} />
          </Modal>
        </div>
        <div className="w-5/6 h-screen bg-pink-100">
          <h1>My Posts</h1>
          <Posts data={this.state.posts} />
        </div>
      </div>
    );
  }
}

export default Home;
