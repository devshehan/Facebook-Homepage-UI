import React from "react";
import "./rightbar.css";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="assests/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Kavika</b> and <b>2 others</b> have a birthday today.
          </span>
        </div>
        <img src="./assests/ad.png" alt="" className="rightbarAd" />

        <h4 className="rightbarTitle">Online Friends</h4>

        <ul className="rightbarFriendList">

          <li className="rightbarFriend">
            <div className="righbarProfileImgContainer">
              <img
                src="assests/person/9.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnlineBadge"></span>
            </div>
            <span className="rightbarUserName">Keyan Gisad</span>
          </li>

          <li className="rightbarFriend">
            <div className="righbarProfileImgContainer">
              <img
                src="assests/person/7.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnlineBadge"></span>
            </div>
            <span className="rightbarUserName">Keyan Gisad</span>
          </li>

          <li className="rightbarFriend">
            <div className="righbarProfileImgContainer">
              <img
                src="assests/person/6.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnlineBadge"></span>
            </div>
            <span className="rightbarUserName">Keyan Gisad</span>
          </li>

          <li className="rightbarFriend">
            <div className="righbarProfileImgContainer">
              <img
                src="assests/person/10.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnlineBadge"></span>
            </div>
            <span className="rightbarUserName">Keyan Gisad</span>
          </li>

          <li className="rightbarFriend">
            <div className="righbarProfileImgContainer">
              <img
                src="assests/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnlineBadge"></span>
            </div>
            <span className="rightbarUserName">Keyan Gisad</span>
          </li>

          <li className="rightbarFriend">
            <div className="righbarProfileImgContainer">
              <img
                src="assests/person/5.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnlineBadge"></span>
            </div>
            <span className="rightbarUserName">Keyan Gisad</span>
          </li>

          <li className="rightbarFriend">
            <div className="righbarProfileImgContainer">
              <img
                src="assests/person/2.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnlineBadge"></span>
            </div>
            <span className="rightbarUserName">Keyan Gisad</span>
          </li>

          <li className="rightbarFriend">
            <div className="righbarProfileImgContainer">
              <img
                src="assests/person/1.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnlineBadge"></span>
            </div>
            <span className="rightbarUserName">Keyan Gisad</span>
          </li>

          <li className="rightbarFriend">
            <div className="righbarProfileImgContainer">
              <img
                src="assests/person/8.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnlineBadge"></span>
            </div>
            <span className="rightbarUserName">Keyan Gisad</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
