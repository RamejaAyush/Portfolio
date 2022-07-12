import "../Styles/Home.scss";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import Profile from "../Media/Pro.png";
import Arrow from "../Media/Arrow.svg";
import Nav from "./Nav";
import { motion } from "framer-motion";

const Home = () => {
  const imgContAnimation = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };
  return (
    <motion.div
      variants={imgContAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}>
      <Nav />
      <div className="home-container">
        <div className="left-side-info">
          <div className="line"></div>
          <div className="links">
            <a href="#">
              <BsLinkedin className="link" />
            </a>
            <a href="#">
              <BsTwitter className="link" />
            </a>
            <a href="#">
              <BsGithub className="link" />
            </a>
          </div>
        </div>
        <div className="right-side-info">
          <div className="line"></div>
          <a href="mailto:ayushrameja@gmail.com">ayushrameja@gmail.com</a>
        </div>
        <div className="center-content">
          <div className="pro-container">
            <div className="img">
              <img src={Profile} alt="" />
            </div>
          </div>
          <div className="desc">
            <div className="heading">
              <p>I Love to create</p>
              <a href="#">
                <span data-hover="Or Maybe the Best :D">
                  Unique & Appealing
                </span>
              </a>
              <p>Websites.</p>
            </div>

            <div className="aboutme">
              Hi, I'm Ayush Rameja. A Web Developer at Accenture AI.
            </div>

            <div className="btns">
              <a href="#">
                <img src={Arrow} alt="" />
                See Work
              </a>
              <a href="#">
                <img src={Arrow} alt="" />
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
