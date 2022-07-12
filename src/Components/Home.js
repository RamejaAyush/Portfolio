import "../Styles/Home.scss";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Home = () => {
  return (
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
    </div>
  );
};

export default Home;
