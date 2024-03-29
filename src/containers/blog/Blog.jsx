import React from "react";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import { Article } from "../../components";
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article image={blog01} />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article image={blog02} />
          <Article image={blog03} />
          <Article image={blog04} />
          <Article image={blog05} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
