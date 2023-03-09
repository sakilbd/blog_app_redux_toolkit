import React, { useEffect } from 'react'
import RelatedPostCard from './RelatedPostCard'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedBlogs } from '../../features/relatedBlogs/relatedBlogsSlice';

function RelatedPosts({tags,blogId}) {

    const {relatedBlogs} = useSelector(state=>state.relatedBlogs);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchRelatedBlogs({tags,id:blogId}))
      return () => {
        
      }
    }, [])
    // console.log(relatedBlogs)
  return (
    <div>
        {blogId}
        {/* {tags} */}
       <div class="space-y-4 related-post-container">
            {/* <!-- related post  --> */}
            {relatedBlogs.map(item=>{
                return <RelatedPostCard key={item.id} blogInfo={item}/>
            })}
            
            {/* <!-- related post ends --> */}
          </div>
    </div>
  )
}

export default RelatedPosts
