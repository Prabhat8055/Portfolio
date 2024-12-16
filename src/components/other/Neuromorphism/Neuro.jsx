import Tbento from "../../Terminalchat/Tbento";
import "./Neuro.css";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import FunSection from "../FunSection/FunSection";
import BentoJourny from "../BentoJourny/BentoJourny";

const Neuro = () => {
  return (
    <div className="out-container">
      <div className="container">
        {/* Left Column */}
        <div className="col-left">
          <div className="row">
            <Tbento />
          </div>
          <div className="row">
            <div className="socials">
              <h3>Connect with Me</h3>
              <ul className="social-icons">
                <li>
                  <a href="https://www.linkedin.com/in/prabhat-bhasme-834b5b228/">
                    <TiSocialLinkedin className="fab" />
                  </a>
                </li>
                <li>
                  <a href="https://x.com/PrabhatBhasme">
                    <FaTwitter className="fab" />
                  </a>
                </li>
                <li>
                  <a href="mailto:prabhatbhasme@gmail.com">
                    <IoIosMail className="fab" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/prabhat8055">
                    <FaGithub className="fab" />
                  </a>
                </li>
              </ul>
              <a
                href="https://drive.google.com/file/d/1eDM9bTmFi8wjkx1qfmZvJMx-cOMF4uVJ/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-btn"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-right">
          <div className="row-row">
            <FunSection />
          </div>
          <div className="row3">
            <div className="row-col">
              <BentoJourny />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Neuro;
