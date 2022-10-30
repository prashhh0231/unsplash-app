import React, { useState } from "react";
const Navbar = (props: any) => {
  const [inputTxt, setInputTxt] = useState("");

  return (
    <div className="navbar_wrapper">
      <img src={require(".././asset/img.png")} width={30} height={30} />
      <div className="search_wrapper">
        <img
          src={require(".././asset/search.png")}
          width={25}
          height={25}
          className="search_icon"
          onClick={() => {
            props.fun(inputTxt);
          }}
        />
        <input
          type={"text"}
          placeholder="Search free high resolution photos"
          value={inputTxt}
          onChange={(e) => setInputTxt(e.target.value)}
        />
      </div>
      <div className="navbar_link1">
        <a href="#">Explore</a>
        <a href="#">Advertise</a>
        <a href="#">Unsplash+</a>
      </div>
      <div className="vr"></div>
      <div>
        <a href="#">Login /</a>
        <a href="#">Sign up</a>
      </div>
      <div>
        <div className="button">Submit a photo</div>
      </div>
      <img
        src={require(".././asset/humber.png")}
        width={30}
        height={30}
        className="humber_icon"
      />
    </div>
  );
};

export default Navbar;
