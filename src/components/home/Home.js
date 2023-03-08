import { Link } from 'react-router-dom';
import React from 'react';
import Img from '../../assets/images/git.webp';

function Home() {
  return (
    <div>
       <section class="wrapper">
        <aside>
            <div class="sidebar-items">
                <div class="sidebar-content">
                    <h4>Sort</h4>
                    <select name="sort" id="lws-sort" class="w-full max-w-[150px] border-2 rounded-md text-gray-500">
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
                            <input type="radio" name="filter" id="lws-all" checked class="radio" />
                            <label for="lws-all">All</label>
                        </div>
                        <div>
                            <input type="radio" name="filter" id="lws-saved" class="radio" />
                            <label for="lws-saved">Saved</label>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
        {/* <!-- posts container  --> */}
        <main class="post-container" id="lws-postContainer">
            {/* <!-- single post --> */}
            <div class="lws-card">
                <Link to="blog/1">
                    <img src={Img} class="lws-card-image" alt="" />
                </Link>
                <div class="p-4">
                    <div class="lws-card-header">
                        <p class="lws-publishedDate">2023-05-01</p>
                        <p class="lws-likeCount"><i class="fa-regular fa-thumbs-up"></i>100</p>
                    </div>
                    <Link to="blog/1" class="lws-postTitle"> Top Github Alternatives </Link>
                    <div class="lws-tags"><span>#python,</span> <span>#tech,</span> <span>#git</span></div>
                    {/* <!-- Show this element if post is saved --> */}
                    <div class="flex gap-2 mt-4">
                        <span class="lws-badge"> Saved </span>
                    </div>
                    {/* <!-- Show this element if post is saved Ends --> */}
                </div>
            </div>
            {/* <!-- Single Post Ends --> */}

            {/* <!-- single post --> */}
          
            {/* <!-- Single Post Ends --> */}

        </main>
        {/* <!-- posts container ends --> */}
    </section>
    </div>
  )
}

export default Home
