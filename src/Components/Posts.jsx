import React from 'react'

const Posts = ({post}) => {
  return (
    <div className='posts'>
        <div className="posts-img">
            <img className='post-img' src={post.img} alt="" />
            <span className='post-duration'> {post.duration} </span>
        </div>
        <div className="post-info">
            <img className='post-avatar' src={post.channel.avatar} alt="oufoto" />
            <div className="post-content">
                <span className='post-title'>{post.title}</span>
                <span className='post-chanel'>{post.channel.name}</span>
                <div  className='post-detailed'>
                  <span>{post.views}</span>
                  <span>{post.date}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Posts