import React from "react";
import { BsSearch, BsFillPersonFill, BsFillChatFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import "./topbar.css";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">DevSocial</span>
      </div>

      <div className="topbarCenter">
        <div className="searchBar">
          <BsSearch className="searchIcon" />
          <input
            type="text"
            placeholder="Search for friend,post or video "
            className="searchInput"
          />
        </div>
      </div>

      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Timeline</span>
        </div>

        <div className="topbarIcons">
          <div className="topbarIconItem">
            <BsFillPersonFill />
            <span className="topbarIconBadge">1</span>
          </div>

          <div className="topbarIconItem">
            <BsFillChatFill />
            <span className="topbarIconBadge">1</span>
          </div>

          <div className="topbarIconItem">
            <IoIosNotifications />
            <span className="topbarIconBadge">3</span>
          </div>
        </div>
        <img src="assests/person/1.jpeg" alt="" className="topbarImage" />
      </div>
    </div>
  );
};

export default Topbar;
