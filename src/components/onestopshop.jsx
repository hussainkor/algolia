import { useState } from "react";
import shops from "../data/shop-data";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import easytouse from "../assets/Easy_to_Use-min.avif";
import fastmin from "../assets/Fast-min.avif";
import scalable from "../assets/Scalable-min.avif";

export default function OneStopShop() {
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
