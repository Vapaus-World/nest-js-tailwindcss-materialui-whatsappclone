import { IconButton } from "@material-ui/core";
import { Chat, DonutLarge, MoreVert, Search } from "@material-ui/icons";
import React from "react";
import Avatar from "./Avatar";
import Chatmember from "./Chatmember";

function LeftBar() {
  const users = [
    {
      id: "1",
      name: "Ariana Grande",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Ariana_Grande_Grammys_Red_Carpet_2020.png/220px-Ariana_Grande_Grammys_Red_Carpet_2020.png",
      message: "Hai",
      messagecount: "2",
    },
    {
      id: "2",
      name: "Ed shereen",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFevyDaDNeQFLhuyWA2hZ8z34Xf2ae-0P83w&usqp=CAU",
      message: "whooa",
      messagecount: "5",
    },
    {
      id: "3",
      name: "Cardi B",
      imageUrl:
        "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTUzMDQ5MDQ5NDIxODQ5NjA3/cardi-b-arrives-at-the-2017-mtv-video-music-awards-at-the-forum-on-august-27-2017-in-inglewood-california-photo-by-gregg-deguire_getty-images-500.jpg",
      message: "trrrrrrrrrrr",
      messagecount: "0",
    },
    {
      id: "4",
      name: "Nikitha",
      imageUrl:
        "https://static.toiimg.com/thumb/msid-76105419,imgsize-287048,width-800,height-600,resizemode-75/76105419.jpg",
      message: "some thing like this",
      messagecount: "19",
    },
    {
      id: "1",
      name: "Sudhi K",
      imageUrl:
        "https://lh3.googleusercontent.com/ogw/ADGmqu-yt9DuZVtZtgnvOunHa7bADqIkzRAGGq6ZJlvdYA=s83-c-mo",
      message: "Hai",
      messagecount: "0",
    },
    {
      id: "2",
      name: "Ed shereen",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFevyDaDNeQFLhuyWA2hZ8z34Xf2ae-0P83w&usqp=CAU",
      message: "whooa",
      messagecount: "0",
    },
    {
      id: "3",
      name: "Cardi B",
      imageUrl:
        "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTUzMDQ5MDQ5NDIxODQ5NjA3/cardi-b-arrives-at-the-2017-mtv-video-music-awards-at-the-forum-on-august-27-2017-in-inglewood-california-photo-by-gregg-deguire_getty-images-500.jpg",
      message: "trrrrrrrrrrr",
      messagecount: "0",
    },
    {
      id: "4",
      name: "Nikitha",
      imageUrl:
        "https://static.toiimg.com/thumb/msid-76105419,imgsize-287048,width-800,height-600,resizemode-75/76105419.jpg",
      message: "some thing like this",
      messagecount: "19",
    },
    {
      id: "2",
      name: "Ed shereen",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFevyDaDNeQFLhuyWA2hZ8z34Xf2ae-0P83w&usqp=CAU",
      message: "whooa",
      messagecount: "0",
    },
    {
      id: "3",
      name: "Cardi B",
      imageUrl:
        "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTUzMDQ5MDQ5NDIxODQ5NjA3/cardi-b-arrives-at-the-2017-mtv-video-music-awards-at-the-forum-on-august-27-2017-in-inglewood-california-photo-by-gregg-deguire_getty-images-500.jpg",
      message: "trrrrrrrrrrr",
      messagecount: "0",
    },
    {
      id: "4",
      name: "Nikitha",
      imageUrl:
        "https://static.toiimg.com/thumb/msid-76105419,imgsize-287048,width-800,height-600,resizemode-75/76105419.jpg",
      message: "some thing like this",
      messagecount: "19",
    },
    {
      id: "2",
      name: "Ed shereen",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFevyDaDNeQFLhuyWA2hZ8z34Xf2ae-0P83w&usqp=CAU",
      message: "whooa",
      messagecount: "0",
    },
    {
      id: "3",
      name: "Cardi B",
      imageUrl:
        "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTUzMDQ5MDQ5NDIxODQ5NjA3/cardi-b-arrives-at-the-2017-mtv-video-music-awards-at-the-forum-on-august-27-2017-in-inglewood-california-photo-by-gregg-deguire_getty-images-500.jpg",
      message: "trrrrrrrrrrr",
      messagecount: "0",
    },
    {
      id: "4",
      name: "Nikitha",
      imageUrl:
        "https://static.toiimg.com/thumb/msid-76105419,imgsize-287048,width-800,height-600,resizemode-75/76105419.jpg",
      message: "some thing like this",
      messagecount: "19",
    },
    {
      id: "2",
      name: "Ed shereen",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFevyDaDNeQFLhuyWA2hZ8z34Xf2ae-0P83w&usqp=CAU",
      message: "whooa",
      messagecount: "0",
    },
    {
      id: "3",
      name: "Cardi B",
      imageUrl:
        "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTUzMDQ5MDQ5NDIxODQ5NjA3/cardi-b-arrives-at-the-2017-mtv-video-music-awards-at-the-forum-on-august-27-2017-in-inglewood-california-photo-by-gregg-deguire_getty-images-500.jpg",
      message: "trrrrrrrrrrr",
      messagecount: "0",
    },
    {
      id: "4",
      name: "Nikitha",
      imageUrl:
        "https://static.toiimg.com/thumb/msid-76105419,imgsize-287048,width-800,height-600,resizemode-75/76105419.jpg",
      message: "some thing like this",
      messagecount: "19",
    },
    {
      id: "2",
      name: "Ed shereen",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFevyDaDNeQFLhuyWA2hZ8z34Xf2ae-0P83w&usqp=CAU",
      message: "whooa",
      messagecount: "0",
    },
    {
      id: "3",
      name: "Cardi B",
      imageUrl:
        "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTUzMDQ5MDQ5NDIxODQ5NjA3/cardi-b-arrives-at-the-2017-mtv-video-music-awards-at-the-forum-on-august-27-2017-in-inglewood-california-photo-by-gregg-deguire_getty-images-500.jpg",
      message: "trrrrrrrrrrr",
      messagecount: "0",
    },
    {
      id: "4",
      name: "Nikitha",
      imageUrl:
        "https://static.toiimg.com/thumb/msid-76105419,imgsize-287048,width-800,height-600,resizemode-75/76105419.jpg",
      message: "some thing like this",
      messagecount: "19",
    },
    {
      id: "2",
      name: "Ed shereen",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFevyDaDNeQFLhuyWA2hZ8z34Xf2ae-0P83w&usqp=CAU",
      message: "whooa",
      messagecount: "0",
    },
    {
      id: "3",
      name: "Cardi B",
      imageUrl:
        "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTUzMDQ5MDQ5NDIxODQ5NjA3/cardi-b-arrives-at-the-2017-mtv-video-music-awards-at-the-forum-on-august-27-2017-in-inglewood-california-photo-by-gregg-deguire_getty-images-500.jpg",
      message: "trrrrrrrrrrr",
      messagecount: "0",
    },
    {
      id: "4",
      name: "Nikitha",
      imageUrl:
        "https://static.toiimg.com/thumb/msid-76105419,imgsize-287048,width-800,height-600,resizemode-75/76105419.jpg",
      message: "some thing like this",
      messagecount: "19",
    },
  ];
  return (
    <div className="flex-25">
      <div className="flex flex-row justify-between bg-whatsapp-bgcolor p-2">
        <Avatar url="https://lh3.googleusercontent.com/ogw/ADGmqu-yt9DuZVtZtgnvOunHa7bADqIkzRAGGq6ZJlvdYA=s83-c-mo" />
        <div className="items-center">
          <IconButton className="focus:outline-none">
            <DonutLarge />
          </IconButton>
          <IconButton className="focus:outline-none">
            <Chat />
          </IconButton>
          <IconButton className="focus:outline-none">
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="bg-whatsapp-whitesmoke p-2">
        <div className="flex flex-row items-center rounded-full px-5 bg-whatsapp-white">
          <Search color="disabled" />
          <input
            placeholder="Search or Start a new chat"
            className="outline-none border-none w-full h-9 bg-whatsapp-white"
          />
        </div>
      </div>
      <div className="overflow-y-auto h-5/6 bg-scroll">
        {/* Chatmember */}
        {users.map((data, index) => (
          <Chatmember data={data} index={index} />
        ))}
      </div>
    </div>
  );
}

export default LeftBar;
