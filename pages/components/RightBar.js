import { IconButton } from "@material-ui/core";
import { AttachFile, EmojiEmotions, MicRounded } from "@material-ui/icons";
import React from "react";
import Avatar from "./Avatar";
import Message from "./Message";

function RightBar() {
  return (
    <div className="flex-75 flex-col justify-between h-screen">
      <div className="bg-whatsapp-bgcolor flex flex-row p-2">
        <Avatar url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Ariana_Grande_Grammys_Red_Carpet_2020.png/220px-Ariana_Grande_Grammys_Red_Carpet_2020.png" />
        <div className="ml-3">
          <h2>Ariana</h2>
          <labe className="text-sm text-grey-100"> Online</labe>
        </div>
      </div>
      <div
        className="bg-whatsapp-chatbg bg-blend-soft-light h-5/6 p-7 overflow-y-auto bg-scroll"
        style={{
          backgroundImage:
            "url(https://web.whatsapp.com/img/bg-chat-tile-light_686b98c9fdffef3f63127759e2057750.png)",
        }}
      >
        {/* Message */}
        <Message dest="send" msg="hai" time="10.30" />
        <Message dest="received" msg="hello" time="10.32" />
        <Message dest="send" msg="hai" time="10.30" />
        <Message dest="received" msg="hello" time="10.32" />
        <Message dest="send" msg="hai" time="10.30" />
        <Message dest="received" msg="hello" time="10.32" />
        <Message dest="send" msg="hai" time="10.30" />
        <Message dest="received" msg="hello" time="10.32" />
        <Message dest="send" msg="hai" time="10.30" />
        <Message dest="received" msg="hello" time="10.32" />
        <Message dest="send" msg="hai" time="10.30" />
        <Message dest="received" msg="hello" time="10.32" />
        <Message dest="send" msg="hai" time="10.30" />
        <Message dest="received" msg="hello" time="10.32" />
        <Message dest="send" msg="hai" time="10.30" />
        <Message dest="received" msg="hello" time="10.32" />
        <Message dest="send" msg="hai" time="10.30" />
        <Message dest="received" msg="hello" time="10.32" />
        <Message dest="send" msg="hai" time="10.30" />
        <Message dest="received" msg="hello" time="10.32" />
        <Message dest="send" msg="hai" time="10.30" />
        <Message dest="received" msg="hello" time="10.32" />
        <Message dest="send" msg="hai" time="10.30" />
        <Message dest="received" msg="hello" time="10.32" />
        <Message dest="send" msg="hai" time="10.30" />
        <Message dest="received" msg="hello" time="10.32" />
        <Message dest="send" msg="hai" time="10.30" />
        <Message dest="received" msg="hello" time="10.32" />
        <Message dest="send" msg="hai" time="10.30" />
        <Message dest="received" msg="hello" time="10.32" />
        <Message dest="send" msg="hai" time="10.30" />
        <Message dest="received" msg="hello" time="10.32" />
        <Message dest="send" msg="hai" time="10.30" />
        <Message dest="received" msg="hello" time="10.32" />
      </div>
      <div className="bg-whatsapp-bgcolor flex flex-row items-center">
        <IconButton className="focus:outline-none">
          <EmojiEmotions />
        </IconButton>
        <IconButton className="focus:outline-none">
          <AttachFile />
        </IconButton>
        <div className="flex flex-row items-center rounded-full px-5 bg-whatsapp-white w-10/12">
          <input
            placeholder="Type a message"
            className="outline-none border-none w-full h-9 bg-whatsapp-white"
          />
        </div>
        <IconButton className="focus:outline-none">
          <MicRounded />
        </IconButton>
      </div>
    </div>
  );
}

export default RightBar;
