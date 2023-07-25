import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "../assets/css/gallery.css";

export const Portraits = () => {
  let data = [
    {
      id: 1,
      imgSrc: require("../assets/images/Portrait/portrait.webp"),
      alt: "portrait.webp",
    },
    {
      id: 2,
      imgSrc: require("../assets/images/Portrait/portrait2.webp"),
    },

    {
      id: 3,
      imgSrc: require("../assets/images/Portrait/portrait3.webp"),
    },
    {
      id: 4,
      imgSrc: require("../assets/images/Portrait/portrait4.webp"),
    },
    {
      id: 5,
      imgSrc: require("../assets/images/Portrait/portrait5.webp"),
    },
    {
      id: 6,
      imgSrc: require("../assets/images/Portrait/portrait6.webp"),
    },

    {
      id: 7,
      imgSrc: require("../assets/images/Portrait/portrait7.webp"),
    },
    {
      id: 8,
      imgSrc: require("../assets/images/Portrait/portrait8.webp"),
    },
    {
      id: 9,
      imgSrc: require("../assets/images/Portrait/portrait9.webp"),
    },
    {
      id: 10,
      imgSrc: require("../assets/images/Portrait/portrait10.webp"),
    },
    {
      id: 11,
      imgSrc: require("../assets/images/Portrait/portrait11.webp"),
    },
    {
      id: 12,
      imgSrc: require("../assets/images/Portrait/portrait12.webp"),
    },
    {
      id: 13,
      imgSrc: require("../assets/images/Portrait/portrait13.webp"),
    },
    {
      id: 14,
      imgSrc: require("../assets/images/Portrait/portrait14.webp"),
    },
    {
      id: 15,
      imgSrc: require("../assets/images/Portrait/portrait15.webp"),
    },
    {
      id: 16,
      imgSrc: require("../assets/images/Portrait/portrait16.webp"),
    },
    {
      id: 17,
      imgSrc: require("../assets/images/Portrait/portrait17.webp"),
    },
    {
      id: 18,
      imgSrc: require("../assets/images/Portrait/portrait18.webp"),
    },
    {
      id: 19,
      imgSrc: require("../assets/images/Portrait/portrait19.webp"),
    },
    {
      id: 20,
      imgSrc: require("../assets/images/Portrait/portrait20.webp"),
    },
    {
      id: 21,
      imgSrc: require("../assets/images/Portrait/portrait21.webp"),
    },
    {
      id: 22,
      imgSrc: require("../assets/images/Portrait/portrait22.webp"),
    },
    {
      id: 23,
      imgSrc: require("../assets/images/Portrait/portrait23.webp"),
    },
    {
      id: 24,
      imgSrc: require("../assets/images/Portrait/portrait24.webp"),
    },
    {
      id: 25,
      imgSrc: require("../assets/images/Portrait/portrait25.webp"),
    },
    {
      id: 26,
      imgSrc: require("../assets/images/Portrait/portrait26.webp"),
    },
    {
      id: 27,
      imgSrc: require("../assets/images/Portrait/portrait27.webp"),
    },
    {
      id: 28,
      imgSrc: require("../assets/images/Portrait/portrait28.webp"),
    },
    {
      id: 29,
      imgSrc: require("../assets/images/Portrait/portrait29.webp"),
    },
    {
      id: 30,
      imgSrc: require("../assets/images/Portrait/portrait30.webp"),
    },
    {
      id: 31,
      imgSrc: require("../assets/images/Portrait/portrait31.webp"),
    },
  ];

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <div
        style={{ display: tempimgSrc == "" ? "none" : "block" }}
        className={model ? "galleryTempImg model open" : "galleryTempImg model"}
      >
        <div
          className="imgModalWrapper"
          style={{
            position: "relative",
            height: "100vh",
            width: "100vw",
            padding: "0",
          }}
        >
          <img src={tempimgSrc} alt="selected image" />
          <CloseIcon
            style={{
              zIndex: 9999,
              position: "absolute",
              right: "100px",
              top: "50px",
              border: "lightgray solid 1px",
              borderRadius: "3px",
            }}
            onClick={() => {
              console.log("close clicked");
              setModel(false);
              setTempImgSrc("");
            }}
          />
        </div>
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          console.log(item, index);
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} style={{ width: "100%" }} alt=" " />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Portraits;
