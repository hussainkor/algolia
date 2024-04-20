import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
export default function Footer() {
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
