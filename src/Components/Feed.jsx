import {React, useState, useEffect} from 'react'
import Posts from './Posts'
import axios from 'axios';
import Skeleton from './Skeleton';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setİsLoading] = useState(false)

  useEffect(() => {

     const getPosts = async () => {
      setİsLoading(true);
      try {
        const res = await axios.get("/api/videos")
        setPosts(res.data)
    } catch (error) {
      console.log(error)
    }
    setİsLoading(false)
     };
     getPosts();
  }, [])  
  return (
    <>
        <div className='MainFeed'>
            <div className='feed-container'>
            {isLoading ? <Skeleton/> : posts.map((post,index) =>{
                  return <Posts key={index} post={post} />
              }) }          
            </div>
        </div>
    </>
  )
}

export default Feed