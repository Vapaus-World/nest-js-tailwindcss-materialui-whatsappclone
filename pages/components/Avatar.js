import React from "react";

function Avatar({ url }) {
  return (
    <img src={url} className="flex rounded-full w-10 h-10 cursor-pointer" />
  );
}

export default Avatar;
