import { Link } from "react-router-dom";
import Img from "../../assets/images/git.webp";
import BlogCard from "./BlogCard";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../features/blogs/blogsSlice";

function Home() {
  const { blogs, isLoading, isError } = useSelector((state) => state.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());

    return () => {};
  }, [dispatch]);

  return (
    <div>
      <section class="wrapper">
        <aside>
          <div class="sidebar-items">
            <div class="sidebar-content">
              <h4>Sort</h4>
              <select
                name="sort"
                id="lws-sort"
                class="w-full max-w-[150px] border-2 rounded-md text-gray-500"
              >
                <option value="">Default</option>
                <option value="newest">Newest</option>
                <option value="most_liked">Most Liked</option>
              </select>
            </div>
            <div class="sidebar-content">
              <h4>Filter</h4>
              <div class="radio-group">
                {/* <!-- handle filter on button click --> */}
                <div>
                  <input
                    type="radio"
                    name="filter"
                    id="lws-all"
                    checked
                    class="radio"
                  />
                  <label for="lws-all">All</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="filter"
                    id="lws-saved"
                    class="radio"
                  />
                  <label for="lws-saved">Saved</label>
                </div>
              </div>
            </div>
          </div>
        </aside>
        {/* <!-- posts container  --> */}
        <main class="post-container" id="lws-postContainer">
          {/* <!-- single post --> */}

          {/* <!-- Single Post Ends --> */}
          {blogs.map((item) => {
            return <BlogCard key={item.id} info={item}/>
          })}
        </main>
        {/* <!-- posts container ends --> */}
      </section>
    </div>
  );
}

export default Home;
