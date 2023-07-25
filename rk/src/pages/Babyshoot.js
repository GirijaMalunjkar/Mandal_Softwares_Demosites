import React, { useState } from "react";
import "../assets/css/gallery.css";

import CloseIcon from "@mui/icons-material/Close";

export const Babyshoot = () => {
  let data = [
    {
      id: 1,
      imgSrc: require("../assets/images/Kids/kid.webp"),
    },
    {
      id: 2,
      imgSrc: require("../assets/images/Kids/kid2.webp"),
    },
    {
      id: 3,
      imgSrc: require("../assets/images/Kids/kid3.webp"),
    },
    {
      id: 4,
      imgSrc: require("../assets/images/Kids/kid4.webp"),
    },
    {
      id: 5,
      imgSrc: require("../assets/images/Kids/kid5.webp"),
    },
    {
      id: 6,
      imgSrc: require("../assets/images/Kids/kid6.webp"),
    },
    {
      id: 7,
      imgSrc: require("../assets/images/Kids/kid7.webp"),
    },
    {
      id: 8,
      imgSrc: require("../assets/images/Kids/kid8.webp"),
    },
    {
      id: 9,
      imgSrc: require("../assets/images/Kids/kid9.webp"),
    },
    {
      id: 10,
      imgSrc: require("../assets/images/Kids/kid10.webp"),
    },
    {
      id: 11,
      imgSrc: require("../assets/images/Kids/kid11.webp"),
    },
    {
      id: 12,
      imgSrc: require("../assets/images/Kids/kid12.webp"),
    },
    {
      id: 13,
      imgSrc: require("../assets/images/Kids/kid13.webp"),
    },
    {
      id: 14,
      imgSrc: require("../assets/images/Kids/kid14.webp"),
    },
    {
      id: 15,
      imgSrc: require("../assets/images/Kids/kid15.webp"),
    },
    {
      id: 16,
      imgSrc: require("../assets/images/Kids/kid16.webp"),
    },
    {
      id: 17,
      imgSrc: require("../assets/images/Kids/kid17.webp"),
    },
    {
      id: 18,
      imgSrc: require("../assets/images/Kids/kid18.webp"),
    },
    {
      id: 19,
      imgSrc: require("../assets/images/Kids/kid19.webp"),
    },
    {
      id: 20,
      imgSrc: require("../assets/images/Kids/kid20.webp"),
    },
    {
      id: 21,
      imgSrc: require("../assets/images/Kids/kid21.webp"),
    },
    {
      id: 22,
      imgSrc: require("../assets/images/Kids/kid22.webp"),
    },
    {
      id: 23,
      imgSrc: require("../assets/images/Kids/kid23.webp"),
    },
    {
      id: 24,
      imgSrc: require("../assets/images/Kids/kid24.webp"),
    },
    {
      id: 25,
      imgSrc: require("../assets/images/Kids/kid25.webp"),
    },
    {
      id: 26,
      imgSrc: require("../assets/images/Kids/kid26.webp"),
    },
    {
      id: 27,
      imgSrc: require("../assets/images/Kids/kid27.webp"),
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
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt="error" />
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {data.map((item, index) => {
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

export default Babyshoot;
