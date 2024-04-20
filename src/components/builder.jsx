import { useState } from "react";
import frontDocument from "../data/frontdocument";
import frontendData from "../data/frontend-data";
import {
  FaChevronUp,
  FaChevronDown,
  FaArrowAltCircleRight,
  FaBook,
  FaDev,
  FaCode,
  FaIntercom,
} from "react-icons/fa";

export default function BuildFaster() {
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
