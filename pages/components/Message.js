import React from "react";

export default function Message({ dest, msg, time }) {
  return (
    <div
      className={
        dest === "send"
          ? "ml-auto bg-whatsapp-white rounded-md w-min mb-3 p-1"
          : "bg-whatsapp-primary rounded-md w-min mb-3 p-1"
      }
    >
      {msg}
      <span className="text-vsm text-grey-100">{time}</span>
    </div>
  );
}
