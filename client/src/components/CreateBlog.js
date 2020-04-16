import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

class CreateBlog extends Component {
  state = {
    username: "",
    title: "",
    description: "",
    date: new Date(),
    blogs: [],
  };

  componentDidMount() {
    document.title = "Create Blog";
  }

  handleUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handleTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  handleDate = (date) => {
    this.setState({
      date: date,
    });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();

    const blog = {
      username: this.state.username,
      title: this.state.title,
      description: this.state.description,
      date: this.state.date,
    };
    console.log(blog);

    axios
      .post("http://localhost:5000/blogs/add", blog)
      .then((res) => console.log(res.data));

    this.setState({
      username: "",
      title: "",
      description: "",
      date: new Date(),
    });
  };

  render() {
    return (
      <div className="container">
        <h3
          style={{
            fontWeight: "500",
            borderBottom: "1px solid grey",
            paddingBottom: 10,
            marginBottom: 20,
          }}
        >
          Create New Blog
        </h3>
        <form onSubmit={this.onHandleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Title</label>
                <div>
                  <input
                    type="text"
                    required
                    className="form-control"
                    value={this.state.title}
                    onChange={this.handleTitle}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Username</label>
                <div>
                  <input
                    type="text"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.handleUsername}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Date</label>
                <div>
                  <DatePicker
                    selected={this.state.date}
                    onChange={this.handleDate}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Description</label>
                <div>
                  <textarea
                    type="text"
                    required
                    rows="4"
                    className="form-control"
                    value={this.state.description}
                    onChange={this.handleDescription}
                  />
                </div>
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  value="Create Log"
                  className="btn btn-primary"
                >
                  <i className="fa fa-plus fa-md" /> Create Blog
                </button>
                <Link to="/" className="btn btn-secondary btn-md">
                  <i className="fa fa-caret-left fa-md" /> Back
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateBlog;
