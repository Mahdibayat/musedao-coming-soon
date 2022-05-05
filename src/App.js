import React, { useEffect, useState } from "react";
import "./App.css";
import { ssCountdown } from "./timer";

import { css } from "@emotion/react";
import PacmanLoader from "react-spinners/PacmanLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ssCountdown();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="container">
      <img src="assets/muse+dao.png" alt="musedao" className="musedao_app" />

      <div className="timer_div">
        <div className="s-into__title">
          <strong>WEBSITE IS UNDER CONSTRUCTION UNTIL</strong>
        </div>
        <div className="s-intro__content">
          <div className="counter">
            <div className="counter__time">
              <span className="ss-days">10</span>
              <span>DAYS</span>
            </div>
            <div className="counter__time">
              <span className="ss-hours">01</span>
              <span>HOURS</span>
            </div>
            <div className="counter__time minutes">
              <span className="ss-minutes">01</span>
              <span>MINUTES</span>
            </div>
            <div className="counter__time">
              <span className="ss-seconds">55</span>
              <span>SECONDS</span>
            </div>
          </div>
        </div>
      </div>

      <header class="social_area">
        <a href="https://www.muse-dao.co/">
          <img src="assets/mdi_web.png" alt="" />
        </a>
        <a href="https://discord.gg/VqdZfM5B6j">
          <img src="assets/discord.png" alt="" />
        </a>
        <a href="https://twitter.com/muse_token_DAO">
          <img src="assets/twitter.png" alt="" />
        </a>
        <a href="https://t.me/musedaoteam">
          <img src="assets/telegram.png" alt="" />
        </a>
      </header>

      <div
        className="loading"
        style={loading ? { display: "visible" } : { display: "none" }}
      >
        <PacmanLoader
          color={"#fff"}
          loading={true}
          css={override}
          size={30}
          speedMultiplier={2}
        />
      </div>
    </div>
  );
};

export default App;
