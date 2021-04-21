import React from "react";
import Avatar from "./Avatar";
function Chatmember({ data, index }) {
  return (
    <div
      key={index}
      className="flex flex-row items-center justify-between p-2 border-b border-whatsapp-whitesmoke hover:bg-whatsapp-chatbg"
    >
      <Avatar url={data.imageUrl} />
      <div className="flex flex-row items-center pl-5 justify-between w-full">
        <div className="flex flex-col">
          <h2 className="text-grey-100">{data.name}</h2>
          <h3 className="text-grey-100">{data.message}</h3>
        </div>
        <div className="items-center">
          <label className="text-grey-100">10.21</label>
          {data.messagecount == 0 ? (
            <></>
          ) : (
            <div className="rounded-full h-7 w-7 flex bg-whatsapp-green items-center justify-center">
              {data.messagecount}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Chatmember;
