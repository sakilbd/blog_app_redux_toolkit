import React from "react";
import { Link } from 'react-router-dom';
import Img from '../../assets/images/git.webp';

function BlogCard({info}) {
  return (
    <div>
     
      <div class="lws-card">
        <Link to={`blog/${info.id}`}>
          <img src={info.image} class="lws-card-image" alt="" />
        </Link>
        <div class="p-4">
          <div class="lws-card-header">
            <p class="lws-publishedDate">{info.createdAt}</p>
            <p class="lws-likeCount">
              <i class="fa-regular fa-thumbs-up"></i>{info.likes}
            </p>
          </div>
          <Link to={`blog/${info.id}`} class="lws-postTitle">
            {info.title}
          </Link>
          <div class="lws-tags">
            {info.tags.map(item=>{
              return (<span>#{item},</span>)
            })}
            {/* <span>#python,</span> <span>#tech,</span> <span>#git</span> */}
          </div>
          {/* <!-- Show this element if post is saved --> */}
          <div class="flex gap-2 mt-4">
            <span class="lws-badge">{info.isSaved ? "Saved":"Not Saved"} </span>
          </div>
          {/* <!-- Show this element if post is saved Ends --> */}
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
