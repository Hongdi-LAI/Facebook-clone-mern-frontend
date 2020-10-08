import React, { useEffect, useState } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel.js";
import MessageSender from "./MessageSender.js";
import Post from "./Post.js";
import axios from "./axios.js";
import Pusher from "pusher-js";

const pusher = new Pusher("b696526d0a0e5ae1426a", {
  cluster: "ap1",
});

function Feed() {
  const [postsData, setPostsData] = useState([]);

  const syncFeed = () => {
    axios.get("/retrieve/posts").then((res) => {
      console.log(res.data);
      setPostsData(res.data);
    });
  };

  useEffect(() => {
    const channel = pusher.subscribe("posts");
    channel.bind("inserted", function (data) {
      syncFeed();
    });
  }, []);

  useEffect(() => {
    syncFeed();
  }, []);
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {postsData.map((entry) => (
        <Post
          profilePic={entry.avatar}
          message={entry.text}
          timestamp={entry.timestamp}
          imgName={entry.imgName}
          username={entry.user}
        />
      ))}
    </div>
  );
}

export default Feed;
