import React from "react";

function RelatedPostCard() {
  return (
    <div>
      <div class="card">
        <a href="post.html">
          <img src={Git} class="card-image" alt="" />
        </a>
        <div class="p-4">
          <a href="post.html" class="text-lg post-title lws-RelatedPostTitle">
            Top Github Alternatives
          </a>
          <div class="mb-0 tags">
            <span>#python,</span> <span>#tech,</span> <span>#git</span>
          </div>
          <p>2010-03-27</p>
        </div>
      </div>
    </div>
  );
}

export default RelatedPostCard;
