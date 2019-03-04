import React from "react";
import Icons from "./icons";

const style = {
  display: "inline-block",
  width: "1em",
  height: "1em",
  strokeWidth: 0,
  stroke: "currentColor",
  fill: "currentColor"
};

const ZwIcon = ({ icon, ...props }) => {
  const iconPath = Icons[icon].path;
  const iconViewBox = "0 0 24 24";

  const attributes = { ...props };

  attributes.className = (props.className || "") + (" icon icon-" + icon);
  attributes.viewBox = iconViewBox;
  attributes.style = {
    ...style,
    ...(props.style || {})
  };

  const path = React.createElement("path", {
    d: iconPath
  });

  return React.createElement("svg", attributes, path);
};

export default ZwIcon;
