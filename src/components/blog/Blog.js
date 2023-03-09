import { Link, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import Mern from "../../assets/images/mern.webp";
import Git from "../../assets/images/git.webp";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog } from "../../features/blog/blogSlice";
import RelatedPostCard from "./RelatedPostCard";


function Blog() {
  const {blog,isLoading,isError,error} = useSelector(state=>state.blog);

  
  const {blogId} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlog(blogId))
  
    return () => {
      
    }
  }, [dispatch])
  console.log(blog);
  return (
    <div>
      
      <div class="container mt-8">
        <Link
          to="/"
          class="inline-block text-gray-600 home-btn"
          id="lws-goHome"
        >
          <i class="mr-2 fa-solid fa-house"></i>Go Home
        </Link>
      </div>
      <section class="post-page-container">
        {/* <!-- detailed post  --> */}
        <main class="post">
          <img
            src={blog.image}
            alt="githum"
            class="w-full rounded-md"
            id="lws-megaThumb"
          />
          <div>
            <h1 class="mt-6 text-2xl post-title" id="lws-singleTitle">
             {blog.title}
            </h1>
            <div class="tags" id="lws-singleTags">
            {blog.tags.map(item=>{
              return (<span>#{item}, </span>)
            })}
            </div>
            <div class="btn-group">
              {/* <!-- handle like on button click --> */}
              <button class="like-btn" id="lws-singleLinks">
                <i class="fa-regular fa-thumbs-up"></i> {blog.likes}
              </button>
              {/* <!-- handle save on button click --> */}
              {/* <!-- use ".active" class and "Saved" text  if a post is saved, other wise "Save" --> */}
              <button class={`${blog.isSaved && 'active'} save-btn`} id="lws-singleSavedBtn">
                <i class="fa-regular fa-bookmark"></i>{blog.isSaved ? ' Saved':' Save'}
              </button>
            </div>
            <div class="mt-6">
              <p>
                {blog.description}
              </p>
            </div>
          </div>
        </main>
        {/* <!-- detailed post ends --> */}
        {/* <!-- related posts --> */}
        <aside>
          <h4 class="mb-4 text-xl font-medium" id="lws-relatedPosts">
            Related Posts
          </h4>
          <div class="space-y-4 related-post-container">
            {/* <!-- related post  --> */}
            
            <RelatedPostCard/>
            {/* <!-- related post ends --> */}
          </div>
        </aside>
        {/* <!-- related posts ends --> */}
      </section>
    </div>
  );
}

export default Blog;
