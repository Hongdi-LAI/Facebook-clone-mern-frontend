import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel.js";
import MessageSender from "./MessageSender.js";
import Post from "./Post.js";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic=""
        message="hello!"
        timestamp="1601494538473"
        imgName="NO NAME"
        username="hongdi"
      />
      <Post
        profilePic=""
        message="hello!"
        timestamp="1601494538473"
        imgName="NO NAME"
        username="hongdi"
      />
      <Post
        profilePic=""
        message="hello!"
        timestamp="1601494538473"
        imgName="NO NAME"
        username="hongdi"
      />
      <Post
        profilePic=""
        message="hello!"
        timestamp="1601494538473"
        imgName="NO NAME"
        username="hongdi"
      />
    </div>
  );
}

export default Feed;
