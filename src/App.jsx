import { useState } from "react";
import Typewriter from "typewriter-effect";
import shops from "./data/shop-data";
import reviews from "./data/review";
import frontDocument from "./data/frontdocument";
import frontendData from "./data/frontend-data";
import "./App.css";
import {
  FaUser,
  FaSearch,
  FaChevronUp,
  FaChevronDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowAltCircleRight,
  FaBook,
  FaDev,
  FaCode,
  FaIntercom,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import logo from "./assets/Algolia-logo-white.png";
import alltrails from "./assets/client/alltrails.svg";
import cultureking from "./assets/client/culture-king.svg";
import decathlon from "./assets/client/decathlon.webp";
import gymshark from "./assets/client/gymshark.svg";
import manomano from "./assets/client/ManoMano.webp";
import medium from "./assets/client/medium.svg";
import slack from "./assets/client/slack.svg";
import swedol from "./assets/client/swedol.webp";
import easytouse from "./assets/Easy_to_Use-min.avif";
import fastmin from "./assets/Fast-min.avif";
import scalable from "./assets/Scalable-min.avif";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <OneStopShop />
      <ScalingData />
      <EnterpriseReview />
      <StartUps />
      <BuildFaster />
      <Merchandise />
      <GetStarted />
      <Footer />
    </>
  );
}

export default App;

function Header() {
  return (
    <header>
      <div className="header-top">
        <ul>
          <li>
            <a href="#">Company</a>
          </li>
          <li>
            <a href="#">Partners</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">
              <FaUser />
              Login
            </a>
          </li>
          <li>
            <select>
              <option>English</option>
              <option>Francais</option>
              <option>Deutsch</option>
            </select>
          </li>
        </ul>
      </div>
      <div className="header-bottom">
        <div className="header-left">
          <a href="#">
            <img src={logo} alt="Logo" className="main-logo" />
          </a>
          <ul className="nav">
            <li>
              <a href="#">Solutions</a>
            </li>
            <li>
              <a href="#">Industries</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Developers</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
        </div>
        <div className="header-right">
          <button className="btn btn-search">
            <FaSearch size={20} />
          </button>
          <button className="btn btn-border">Let`s Chat</button>
          <button className="btn">Start Free</button>
        </div>
      </div>
    </header>
  );
}

function Banner() {
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

function OneStopShop() {
  const [shopTab, setShopTab] = useState(1);
  const [lastPushedValue, setLastPushedValue] = useState([]);
  const arr = [];
  function handleShopTab(id) {
    setShopTab(shopTab === id ? null : id);
    arr.push(id);
    if (shopTab !== null) {
      setLastPushedValue(id);
    }
  }

  return (
    <section className="shop">
      <div className="one-stop-shop">
        <div className="shop-details">
          <h2>The one-stop shop for AI search</h2>
          <p>Algolia’s AI search suite has unique strengths</p>
          <div className="home-tabbing">
            {shops.map((shop) => (
              <ShopTabbing
                key={shop.id}
                shop={shop}
                onShopTab={handleShopTab}
                shopTab={shopTab}
              />
            ))}
          </div>
          <button className="btn">Read More</button>
        </div>
        <div className="shop-related-photo">
          {shopTab === 1 && <img src={easytouse} alt="easy to use" />}
          {shopTab === 2 && <img src={fastmin} alt="fastmin" />}
          {shopTab === 3 && <img src={scalable} alt="scalable" />}
          {!shopTab && lastPushedValue === 1 && (
            <img src={easytouse} alt="easy to use" />
          )}
          {!shopTab && lastPushedValue === 2 && (
            <img src={fastmin} alt="easy to use" />
          )}
          {!shopTab && lastPushedValue === 3 && (
            <img src={scalable} alt="easy to use" />
          )}
        </div>
      </div>
    </section>
  );
}

function ShopTabbing({ shop, onShopTab, shopTab }) {
  return (
    <div className="tabs">
      <h3 onClick={() => onShopTab(shop.id)}>
        {shop.name}
        {shopTab === shop.id ? (
          <FaChevronUp size={16} />
        ) : (
          <FaChevronDown size={16} />
        )}
      </h3>
      <p>{shopTab === shop.id && shop.details}</p>
    </div>
  );
}

function ScalingData() {
  return (
    <div className="scaling-data">
      <h2>Scaling ahead of your needs</h2>
      <p>
        Customers depend on Algolia to handle more queries than any other hosted
        search engine.
      </p>
      <div className="data-content">
        <div className="data-box">
          <h3>1.7+ trillion</h3>
          <p>searches every year</p>
        </div>
        <div className="data-box">
          <h3>99.999%</h3>
          <p>uptime SLA available</p>
        </div>
        <div className="data-box">
          <h3>17,000+</h3>
          <p>customers across 150+ countries</p>
        </div>
      </div>
      <div className="data-content">
        <div className="data-box">
          <h3>30+ billion</h3>
          <p>records indexed</p>
        </div>
        <div className="data-box">
          <h3>100%</h3>
          <p>compliant & secure Alliance</p>
        </div>
        <div className="data-box">
          <h3>382%</h3>
          <p>ROI according to Forrester Research</p>
        </div>
      </div>
      <button className="btn">Contact Sales</button>
    </div>
  );
}

function EnterpriseReview() {
  return (
    <div className="interprice-section">
      <div className="enterprise-manage">
        <div className="enterprise-details">
          <h2>Enterprises, delight your customers</h2>
          <p>
            Grow your customer satisfaction - and sales. Because when your
            customers feel understood, they click and they come back.
          </p>
          <p>Get help from our experts to start fast and run efficiently.</p>
          <button className="btn">Contact Sales</button>
        </div>
        <div className="enterprise-review">
          <Review />
        </div>
      </div>
    </div>
  );
}

function Review() {
  const [count, setReview] = useState(0);
  const { image, name, text, brand } = reviews[count];
  function handleReviewPrev() {
    setReview(count === 0 ? reviews.length - 1 : count - 1);
  }
  function handleReviewNext() {
    setReview(count === reviews.length - 1 ? 0 : count + 1);
  }

  return (
    <>
      <img src={image} />
      <div className="review-text">
        <button className="arrow-btn" onClick={handleReviewPrev}>
          <FaArrowLeft size={15} />
        </button>
        <h4>{text}</h4>
        <button className="arrow-btn" onClick={handleReviewNext}>
          <FaArrowRight size={15} />
        </button>
      </div>
      <h3>{name}</h3>
      <p>{brand}</p>
    </>
  );
}

function StartUps() {
  return (
    <div className="scaling-data">
      <h2>For startups - all the power, none of the headache</h2>
      <p>
        Startups, you can get going in minutes and scale for decades. Whatever
        your future demands, and however much you grow - Algolia has you
        covered.
      </p>
      <p>
        Eligible startups can begin with $10k of credits from Algolia and $100k
        from startup partners.
      </p>
      <div className="startup-brands">
        <img
          className="brand-size"
          src="https://res.cloudinary.com/hilnmyskv/image/upload/v1711452135/ui-library/logos/brex.svg"
          alt=""
        />
        <img
          className="brand-size2"
          src="https://res.cloudinary.com/hilnmyskv/image/upload/f_auto/v1711452135/ui-library/logos/notion.png"
          alt=""
        />
        <img
          className="brand-size2"
          src="https://res.cloudinary.com/hilnmyskv/image/upload/f_auto/v1711452135/ui-library/logos/y-combinator.png"
          alt=""
        />
        <img
          className="brand-size"
          src="https://res.cloudinary.com/hilnmyskv/image/upload/v1711452135/ui-library/logos/retool.svg"
          alt=""
        />
        <img
          className="brand-size"
          src="https://res.cloudinary.com/hilnmyskv/image/upload/v1711452135/ui-library/logos/asana.svg"
          alt=""
        />
      </div>
      <button className="btn">Learn more</button>
    </div>
  );
}

function BuildFaster() {
  return (
    <div className="build-faster">
      <h2>Build faster and better</h2>
      <p>
        AI search made simple. Index your content with our API clients or
        partner integrations, fine-tune your rankings and launch with our UI
        components. All in minutes.
      </p>
      <div className="build-manage">
        <div className="frontend-details">
          <FrontWorks />
        </div>
        <div className="frontend-tabbing">
          <Documentation />
        </div>
      </div>
    </div>
  );
}

function FrontWorks() {
  const [getData, setGetData] = useState(1);
  function handleGetDataId(id) {
    setGetData(id);
  }
  return (
    <>
      <ul className="data-list">
        <h3>Front-end</h3>
        {frontendData.map((fdata) => (
          <li
            onClick={() => handleGetDataId(fdata.id)}
            key={fdata.id}
            className={getData === fdata.id ? "activedata" : ""}
          >
            <img src={fdata.icon} alt={fdata.title} />
            <a href="javascript:void()">{fdata.name}</a>
          </li>
        ))}
      </ul>
      <div className="data-details">
        {getData === 1 && (
          <img src="https://miro.medium.com/v2/resize:fit:770/1*WShtVM-qEorxn97wdTKyMA.png" />
        )}
        {getData === 2 && (
          <img src="https://simpat.tech/wp-content/uploads/2021/08/reactjs-example.jpg" />
        )}
        {getData === 3 && (
          <img src="https://miro.medium.com/v2/resize:fit:1040/1*tJzVwO-BXbPBnTYopXz2wQ.png" />
        )}
        {getData === 4 && (
          <img src="https://www.c-sharpcorner.com/article/debugging-angular-11-application-in-visual-studio-code/Images/Debugging%20Angular%2011%20Application%20In%20Visual%20Studio%20Code06.gif" />
        )}
      </div>
    </>
  );
}

function Documentation() {
  const [docCount, setDocCount] = useState(0);

  function handleDocTab(number) {
    setDocCount(number === docCount ? null : number);
  }

  return (
    <>
      {frontDocument.map((doc, num) => (
        <div key={num} className="doc-tab">
          <h4
            onClick={() => handleDocTab(num)}
            className={docCount !== num ? "hover-effect" : ""}
          >
            {num === 0 && <FaBook className="tab-svg" />}
            {num === 1 && <FaDev className="tab-svg" />}
            {num === 2 && <FaCode className="tab-svg" />}
            {num === 3 && <FaIntercom className="tab-svg" />}
            {doc.title}
            {docCount === num ? (
              <FaChevronUp size={16} className="doc-svg" />
            ) : (
              <FaChevronDown size={16} className="doc-svg" />
            )}
          </h4>
          <p>{docCount === num && doc.text}</p>
          {docCount === num && (
            <a
              href={doc.url}
              style={docCount === num ? { paddingBottom: "20px" } : {}}
            >
              <span>See more</span>
              <span>
                <FaArrowAltCircleRight size={22} />
              </span>
            </a>
          )}
        </div>
      ))}
    </>
  );
}

function Merchandise() {
  return (
    <div className="scaling-data">
      <div className="flex-content">
        <div className="box1">
          <h2>Make merchandising effortless</h2>
          <p>
            Combine the art of merchandising with the science of algorithms.
            Design online journeys that start with audience understanding - and
            end with better business outcomes.
          </p>
          <button className="btn">Discover the Merchandise Studio</button>
        </div>
        <div className="box2">
          <img
            src="https://res.cloudinary.com/hilnmyskv/image/upload/v1698769699/Algolia_com_Website_assets/images/rules/New%20website/Features_Do_it_visually_35.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

function GetStarted() {
  return (
    <div className="shop txtCenter">
      <h2>Get started</h2>
      <div className="start-flex">
        <div>
          <h3>Use an API client</h3>
          <p>
            Index your content, customize rankings - and launch quickly with our
            customized UI’s
          </p>
          <button className="btn">Start Now</button>
        </div>
        <div>
          <h3>Use our integrations</h3>
          <p>With Shopify, Salesforce Commerce Cloud, and more</p>
          <button className="btn">Start Now</button>
        </div>
        <div>
          <h3>Talk to sales</h3>
          <p>About meeting your needs and a deep-dive demo</p>
          <button className="btn">Get a demo</button>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-box">
          <h4>Solutions</h4>
          <ul>
            <li>
              <a href="#">Overview</a>
            </li>
            <li>
              <a href="#">AI Search</a>
            </li>
            <li>
              <a href="#">AI Browse</a>
            </li>
            <li>
              <a href="#">AI Recommendations</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="footer-box">
          <h4>Developers</h4>
          <ul>
            <li>
              <a href="#">Developer Hub</a>
            </li>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">Integrations</a>
            </li>
            <li>
              <a href="#">Engineering blog</a>
            </li>
            <li>
              <a href="#">Discord community</a>
            </li>
          </ul>
        </div>
        <div className="footer-box">
          <h4>Integrations</h4>
          <ul>
            <li>
              <a href="#">Salesforce B2C</a>
            </li>
            <li>
              <a href="#">Shopify</a>
            </li>
            <li>
              <a href="#">Adobe Commerce</a>
            </li>
            <li>
              <a href="#">Netlify</a>
            </li>
            <li>
              <a href="#">Commercetools</a>
            </li>
          </ul>
        </div>
        <div className="footer-box">
          <h4>Industries</h4>
          <ul>
            <li>
              <a href="#">Overview</a>
            </li>
            <li>
              <a href="#">B2C ecommerce</a>
            </li>
            <li>
              <a href="#">B2B ecommerce</a>
            </li>
            <li>
              <a href="#">Marketplaces</a>
            </li>
            <li>
              <a href="#">SaaS</a>
            </li>
          </ul>
        </div>
        <div className="footer-box">
          <h4>Contact</h4>
          <p>Atlanta, Canada - 7856</p>
          <p>+1 93456721</p>
          <p>info@algolia.com</p>
          <h4>Social networks</h4>
          <p>
            <a href="https://twitter.com/algolia" target="_blank">
              <FaTwitter />
            </a>
            <a href="https://www.facebook.com/algolia/" target="_blank">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/algolia.search/">
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/channel/UCTNkiq-SO8hay1PRx-it9Cw"
              target="_blank"
            >
              <FaYoutube />
            </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          ©2024 Algolia - All rights reserved. &nbsp; | &nbsp;
          <a href="#">Cookie settings</a> &nbsp; | &nbsp;{" "}
          <a href="#">Privacy policy</a> &nbsp; | &nbsp;
          <a href="#">Terms of service</a>
        </p>
      </div>
    </footer>
  );
}
