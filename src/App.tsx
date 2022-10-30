import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Photos from "./components/Photos";
import Masonry from "react-responsive-masonry";
import apiKey from "./constants";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "./Redux/store";
import { searchByTxt } from "./Redux/feature";

function App() {
  const search_word = useSelector((state: RootState) => state.search_txt.value);
  const dispatch = useDispatch();
  // states
  const [randomImage, setRandomImage] = useState([]);
  const [inputTxt, setInputTxt] = useState(search_word);
  const [isLoading, setIsLoading] = useState(false);
  // Document title
  document.title = "Unsplash";
  const getData = async () => {
    setIsLoading(true);
    const response = await fetch(
      `https://api.unsplash.com/photos/?client_id=${apiKey}&per_page=30`
    );
    const data = await response.json();
    setRandomImage(data);
    setIsLoading(false);
  };

  const search_handler = async (inputTxt: any) => {
    setIsLoading(true);
    dispatch(searchByTxt(inputTxt));
    const response = await fetch(
      `https://api.unsplash.com/photos/?client_id=${apiKey}&query=${search_word}&per_page=20`
    );
    const data = await response.json();
    setRandomImage(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Navbar fun={search_handler} />
      {/* banner */}
      <div className="banner">
        <div>
          <h1>Unsplash</h1>
          <h4>
            The internet’s source for visuals.
            <br /> Powered by creators everywhere.
          </h4>
          <div className="search_container">
            <img
              src={require("./asset/search.png")}
              width={30}
              height={30}
              className="search_icon"
              onClick={() => search_handler(inputTxt)}
            />
            <input
              type={"text"}
              placeholder="Search free resolution photos"
              className="search_input"
              value={inputTxt}
              onChange={(e) => setInputTxt(e.target.value)}
            />
          </div>
          <h5>Trending: FlowerWallpapersBackgroundsHappyLove</h5>
        </div>
      </div>
      {/* images */}

      {!isLoading ? (
        <Masonry columnsCount={3} gutter="10px">
          {randomImage.map((val: any, i: any) => {
            return (
              <Photos
                url={val?.urls?.full}
                firstName={val?.user?.first_name}
                lastName={val?.user?.last_name}
                likes={val?.likes}
                profile_image={val.user?.profile_image?.small}
                download_url={val?.links?.download}
              />
            );
          })}
        </Masonry>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

export default App;
