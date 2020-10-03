import React from "react";
import "./Widget.css";

function Widget() {
  return (
    <div className="widget">
      <iframe
        src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId`}
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden", borderRadius: "10px" }}
        scrolling="no"
        frameBorder="0"
        allowTransparency="true"
        allow="encryted-media"
      ></iframe>
    </div>
  );
}

export default Widget;
