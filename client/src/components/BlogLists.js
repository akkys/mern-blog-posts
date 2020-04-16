import React, { Component } from "react";
import axios from "axios";
import Blogs from "./Blogs";

class BlogLists extends Component {
  state = {
    blogs: [],
  };

  componentDidMount() {
    document.title = "Blog Lists";
    axios
      .get("http://localhost:5000/blogs/")
      .then((res) => {
        this.setState({
          blogs: res.data,
        });
        console.log(this.state.blogs);
      })
      .catch((err) => console.log(err));
  }

  deleteBlog = (id) => {
    axios
      .delete("http://localhost:5000/blogs/" + id)
      .then((res) => console.log(res.data));

    this.setState({
      blogs: this.state.blogs.filter((el) => el._id !== id),
    });
  };

  render() {
    const { blogs } = this.state;
    return (
      <div className="container">
        <h2
          style={{
            borderBottom: "1px solid grey",
            paddingBottom: 10,
            fontWeight: "500",
            marginBottom: 20,
          }}
        >
          List of Personal Blogs
        </h2>
        {blogs.length === 0 ? (
          <div>
            <h2>No Blogs in List</h2>
          </div>
        ) : (
          <div>
            {blogs.map((blog) => {
              return (
                <Blogs
                  blog={blog}
                  key={blog._id}
                  deleteBlog={this.deleteBlog}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default BlogLists;
