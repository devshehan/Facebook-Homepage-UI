import React from "react";
import "./share.css";
import {HiPhoto} from 'react-icons/hi2'
import {BsTagsFill, BsFillEmojiHeartEyesFill} from 'react-icons/bs'
import {FaLocationDot} from 'react-icons/fa6'

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assests/person/1.jpeg" className="shareProfileImg" />
          <input
            type="text"
            placeholder="What's on your mind Shehaan"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareButtom">
          <div className="shareOptions">
            <div className="shareOption">
              <HiPhoto style={{color: "red"}} className="shareIcon"/>
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <BsTagsFill style={{color: "blue"}} className="shareIcon"/>
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <FaLocationDot style={{color: "green"}} className="shareIcon"/>
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <BsFillEmojiHeartEyesFill style={{color: "gold"}} className="shareIcon"/>
              <span className="shareOptionText">Feelings</span>
            </div>
            <button className="shareButton">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
