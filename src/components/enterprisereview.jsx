import { useState } from "react";
import reviews from "../data/review";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function EnterpriseReview() {
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
