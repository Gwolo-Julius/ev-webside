import "./hero.css";
import arrow_btn from "../../assets/arrow_btn.png";
import play_icon from "../../assets/play_icon.png";
import pause_icon from "../../assets/pause_icon.png";

const Hero = ({
  setPlayStatus,
  heroData,
  heroCount,
  setHeroCount,
  playStatus,
}) => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>{heroData.text1}</h1>
        <h1>{heroData.text2}</h1>
      </div>
      <div className="hero-explore">
        <p>Explore the features</p>
        <img src={arrow_btn} alt="play icon" />
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li
            onClick={() => setHeroCount(0)}
            className={heroCount === 0 ? "hero-dot blue" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(1)}
            className={heroCount === 1 ? "hero-dot blue" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(2)}
            className={heroCount === 2 ? "hero-dot blue" : "hero-dot"}
          ></li>
        </ul>
        <div className="hero-play">
          <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus ? pause_icon : play_icon} alt="play icon or pause icon" />
          <p>see the video</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
