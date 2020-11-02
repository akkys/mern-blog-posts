import React from "react";
import { Link } from "react-router-dom";

const Blogs = (props) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div
          className="container"
          style={{
            backgroundColor: "#cce0ff",
            marginBottom: 25,
            paddingBottom: 15,
            paddingTop: 15,
          }}
        >
          <h2 style={{ color: "#0066ff", fontWeight: "500" }}>
            {props.blog.title}
          </h2>
          <span style={{ color: "#737373" }}>
            Posted On :
            <span
              style={{ color: "#737373", fontWeight: "bold", marginLeft: 5 }}
            >
              {props.blog.date.substring(0, 10)}
            </span>
          </span>{" "}
          |{" "}
          <span style={{ color: "#737373" }}>
            By :
            <span
              style={{ color: "#737373", fontWeight: "bold", marginLeft: 5 }}
            >
              {props.blog.username}
            </span>
          </span>
          <div className="right">
            <Link
              to={"/update/" + props.blog._id}
              className="edit-logo"
              style={{
                color: "green",
              }}
            >
              <i className="fa fa-pencil-square-o fa-lg" />
            </Link>
            <span style={{ fontWeight: "bolder" }}>|</span>
            <Link
              to=""
              onClick={() => props.deleteBlog(props.blog._id)}
              className="delete-logo"
              style={{
                color: "red",
              }}
            >
              <i className="fa fa-trash-o fa-lg" />
            </Link>
          </div>
          <br />
          <br />
          <h5 style={{ fontWeight: "500" }}>{props.blog.description}</h5>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
