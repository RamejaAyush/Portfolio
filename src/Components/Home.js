import "../Styles/Home.scss";
import Profile from "../Assests/profile.png";
import "../Assests/arrow.svg";

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
              {/* <img src={Profile} alt="Ayush Rameja" /> */}
            </div>
            <div className="description">
              <p>
                I Love to Create <span>Unique & Appealing</span> Websites.
              </p>
              <p>a developer with a lot of Dedication and Creativity.</p>
            </div>
          </div>
          <div className="btn-container">
            <a href="#">
              <div className="btn">
                <div className="background">
                  <img src="#" alt="" />
                </div>
                <h1>See Work</h1>
                <div className="arrow">
                  <img src="#" alt="" />
                </div>
              </div>
            </a>
            <a href="#">
              <div className="btn">
                <div className="background">
                  <img src="#" alt="" />
                </div>
                <h1>See Work</h1>
                <div className="arrow">
                  <img src="#" alt="" />
                </div>
              </div>
            </a>
            <a href="#">
              <div className="btn">
                <div className="background">
                  <img src="#" alt="" />
                </div>
                <h1>See Work</h1>
                <div className="arrow">
                  <img src="#" alt="" />
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
