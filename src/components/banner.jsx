import Typewriter from "typewriter-effect";
import alltrails from "../assets/client/alltrails.svg";
import cultureking from "../assets/client/culture-king.svg";
import decathlon from "../assets/client/decathlon.webp";
import gymshark from "../assets/client/gymshark.svg";
import manomano from "../assets/client/ManoMano.webp";
import medium from "../assets/client/medium.svg";
import slack from "../assets/client/slack.svg";
import swedol from "../assets/client/swedol.webp";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-details">
          <h1>Show users what they need</h1>
          <p>with AI search that understands them</p>
          <button className="btn">Start free</button>
          <button className="btn btn-border">Lets chat</button>
        </div>
        <div className="banner-animate">
          <div className="banner-search">
            <AutoTypeText />
          </div>
        </div>
      </div>
      <div className="banner-client">
        <div className="client-logo">
          <img src={alltrails} alt="" />
          <img src={decathlon} alt="" />
          <img src={cultureking} alt="" />
          <img src={gymshark} alt="" />
          <img src={manomano} alt="" />
          <img src={medium} alt="" />
          <img src={slack} alt="" />
          <img src={swedol} alt="" />
        </div>
      </div>
    </div>
  );
}

function AutoTypeText() {
  return (
    <h4>
      <Typewriter
        options={{
          strings: [
            "Motivating workout tunes",
            "Best headphones gift",
            "Wooden bridge hike near me",
            "SKU 14290, 27381, 98063",
            "Top goal scorer in women’s cup",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </h4>
  );
}
