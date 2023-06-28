import React from "react";
import "./post.css";
import { FiMoreVertical } from "react-icons/fi";

const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="/assests/person/6.jpeg" className="postProfileImg" />
            <span className="postUserName">Shehaan Avishka</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <FiMoreVertical />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Here is my first post :)</span>
          <img src="./assests/post/1.jpeg" alt="" className="postImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="./assests/like.png" alt="" className="likeIcon" />
            <img src="./assests/heart.png" alt="" className="likeIcon" />
            <span className="postLikeCounter">243 people like it</span>
          </div>
          <div className="postBottonRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
