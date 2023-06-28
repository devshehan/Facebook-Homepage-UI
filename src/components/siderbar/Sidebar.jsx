import React from "react";
import "./sidebar.css";
import { MdRssFeed, MdGroups2, MdWork, MdSchool } from "react-icons/md";
import {
  BsChatSquareDotsFill,
  BsFillBookmarkFill,
  BsCalendarEvent,
  BsQuestionSquareFill,
} from "react-icons/bs";
import { BiSolidVideos } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <MdRssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <BsChatSquareDotsFill className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <BiSolidVideos className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <MdGroups2 className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <BsFillBookmarkFill className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <BsQuestionSquareFill className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <MdWork className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <BsCalendarEvent className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <MdSchool className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              src="./assests/person/5.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Anuradhaa Basnayake</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assests/person/3.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Dinusha Heshan</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assests/person/1.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Shehaan Avishka</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assests/person/7.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Chamod Ravihara</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assests/person/9.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Ajantha Silva</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assests/person/8.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Abdullah Jasmin</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assests/person/4.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Sineth Nimsara</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assests/person/9.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Binuri de Silva</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assests/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Gayal Sanjana</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
