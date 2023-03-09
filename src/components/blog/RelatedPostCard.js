import React from "react";
import Git from "../../assets/images/git.webp";
import { Link } from "react-router-dom";

function RelatedPostCard({ blogInfo }) {
  const { id, createdAt, image, tags, title } = blogInfo;
  return (
    <div>
      <div class="card">
        <Link to={`blog/${id}`}>
          <img src={image} class="card-image" alt="" />
        </Link>
        <div class="p-4">
          <Link
            to={`blog/${id}`}
            class="text-lg post-title lws-RelatedPostTitle"
          >
            {title}
          </Link>
          <div class="mb-0 tags">
            {tags.map((item) => {
              return <span>#{item}, </span>;
            })}
            {/* <span>#python,</span> <span>#tech,</span> <span>#git</span> */}
          </div>
        <p>{createdAt}</p>
        </div>
      </div>
    </div>
  );
}

export default RelatedPostCard;
