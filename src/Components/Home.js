import "../Styles/Home.scss";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Home = () => {
  return (
    <div className="Home-container">
      <div className="left-side-info">
        <BsLinkedin />
        <BsTwitter />
        <BsGithub />
      </div>
      <div className="right-side-info"></div>
    </div>
  );
};

export default Home;
