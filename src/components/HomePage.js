import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from "../assets/logo.svg";
import mit from "../assets/mit-license.png";
import github from "../assets/github-mark.png";
import formplusmemories from "../assets/F+M.svg";
import version from "../assets/version.svg";
import x from "../assets/x.svg";

const HomePage = () => {
  const [showNews, setShowNews] = useState(true);

  const toggleNews = () => {
    setShowNews(!showNews);
  };


  return (
    <>
    <div className="news">

      {showNews && (
          <div className="news-window">
          <button className="close-button" onClick={toggleNews}>
            {" "}
            <img src={x} alt="X" className="x" />
          </button>

          <h3>DONT KNOW WHERE TO START?</h3>
          <p className="news-paragraph">
            Check out the "Getting Started" page under "Documentation". You will find some examples
            and a template.
          </p>
        </div>
      )}
      </div>

      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="relative-positioned-div main-logo">
          <img src={logo} alt="Logo" className="logo" />
          <img src={version} className="absolute-top-right" alt="New SVG" />
        </div>
        <p className="mt-4 text-center description">
          A free and opensource tool for generating data sculptures.
        </p>
      </div>

      <div className="logos start-0 p-3">
        <div className="row align-items-center">
          <div className="col">
            <a
              href="https://github.com/taaaf/TotemGen/tree/main"
              target="_blank"
            >
              <img src={github} className="images" alt="GitHub page" />
            </a>
          </div>

          <div className="col">
            <a
              href="https://github.com/taaaf/TotemGen/blob/main/LICENSE"
              target="_blank"
            >
              <img src={mit} className="images" alt="MIT License" />
            </a>
          </div>

          <div className="col">
            <a
              href="https://www.instagram.com/form____plusmemories/"
              target="_blank"
            >
              <img
                src={formplusmemories}
                className="images"
                alt="GitHub page"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
