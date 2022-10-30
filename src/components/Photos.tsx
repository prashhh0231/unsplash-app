import React from "react";
const Photos = (props: any) => {
  return (
    <div className="photo_container">
      <img src={`${props.url}`} style={{ width: "100%", display: "block" }} />
      <div className="bottom-left">
        <img
          src={`${props.profile_image}`}
          width={30}
          height={30}
          className="thumbnails"
        />
        {props.firstName} {props.lastName}
      </div>
      <div className="top-right">
        <div className="like_container">
          <span className="heart_icon">&#x2764;</span>
          <span className="gray_txt">{props.likes}</span>
        </div>
        <div className="like_container">
          <span className="plus_icon">&#43;</span>
          <span className="gray_txt">Collect</span>
        </div>
      </div>
      <a
        href={`${props.download_url}`}
        className="bottom-right"
        target="_blank"
      >
        <span className="download_icon"> &darr;</span>
      </a>
    </div>
  );
};

export default Photos;
