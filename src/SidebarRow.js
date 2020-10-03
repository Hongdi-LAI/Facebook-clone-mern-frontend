import React from "react";
import "./SidebarRow.css";
import { Avatar } from "@material-ui/core";

function SidebarRow({ src, Icon, title }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {/* If we have an Icon, drop it in Tag <Icon /> */}
      {Icon && <Icon />}
      <p>{title}</p>
    </div>
  );
}

export default SidebarRow;
