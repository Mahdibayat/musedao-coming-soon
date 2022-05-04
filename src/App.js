import React, { useEffect } from "react";
import "./App.css";
import { ssCountdown } from "./timer";

const App = () => {
  useEffect(() => {
    ssCountdown();
  }, []);
  return (
    <div className="container">
      <img src="/muse+dao.png" alt="musedao" className="musedao_app" />

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
          <img src="/mdi_web.png" alt="" />
        </a>
        <a href="#">
          <img src="/discord.png" alt="" />
        </a>
        <a href="https://twitter.com/muse_token_DAO">
          <img src="/twitter.png" alt="" />
        </a>
        <a href="https://t.me/musedaoteam">
          <img src="/telegram.png" alt="" />
        </a>
      </header>
    </div>
  );
};

export default App;
