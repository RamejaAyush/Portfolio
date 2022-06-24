import "../Styles/Home.scss";
import Profile from "../Assests/profile.png";
import Arrow from "../Assests/arrow.svg";
import WorkBg from "../Assests/work.png";
import DesignBg from "../Assests/design.png";
import gallary from "../Assests/gallary.png";

const Home = () => {
  return (
    <div className="Home-container">
      <div className="home-header">
        <div className="designation">
          <h1>Ayush Rameja</h1>
          <p>Web Developer at Accenture</p>
        </div>
        <div className="logo">
          <p>AXU</p>
        </div>
      </div>
      <div className="main-section">
        <div className="profile">
          <div className="top-container">
            <div className="image">
              <img src={Profile} alt="Ayush Rameja" />
            </div>
            <div className="description">
              <div className="headline">
                <p>I Love to Create</p>
                <p className="bold">Unique & Appealing</p>
                <p>Websites.</p>
              </div>
              <p className="about">
                a developer with a lot of
                <span> Dedication and Creativity.</span>
              </p>
            </div>
          </div>
          <div className="btn-container">
            <a href="#">
              <div className="btn">
                <div className="background">
                  <img src={WorkBg} alt="" />
                </div>
                <p>See</p>
                <p>Work</p>
                <div className="arrow">
                  <img src={Arrow} alt="" />
                </div>
              </div>
            </a>
            <a href="#">
              <div className="btn">
                <div className="background">
                  <img src={DesignBg} alt="" />
                </div>
                <p>See</p>
                <p>Designs</p>
                <div className="arrow">
                  <img src={Arrow} alt="" />
                </div>
              </div>
            </a>
            <a href="#">
              <div className="btn">
                <div className="background">
                  <img src={gallary} alt="" />
                </div>
                <p>See</p>
                <p>Gallary</p>
                <div className="arrow">
                  <img src={Arrow} alt="" />
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="skills">
          <div className="skills-container">
            <div className="header">
              <p>Skills</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
