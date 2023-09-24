import React from 'react'

export default function Skeleton() {
  const counter = 8;
  const FeedSkeloton = () => {
    return (
        <div className='post-sk'>
            <div className="post-sk-img"></div>
            <div className="post-sk-info">
                <div className="post-sk-avatar"></div>
                <div className="post-sk-detail">
                    <div className="post-sk-text"></div>
                    <div className="post-sk-text-sm"></div>
                </div>
            </div>
        </div>
      );
  } 
  return Array(counter).fill(<FeedSkeloton/>)
}