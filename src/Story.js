import { Avatar } from "@material-ui/core";
import React from "react";
import "./Story.css";

function Story({ image, profilePic, title }) {
  return (
    /* inline styling */
    <div className="story" style={{ backgroundImage: `url(${image})` }}>
      <Avatar src={profilePic} className="story__avatar" />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
