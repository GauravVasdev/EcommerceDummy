import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div className="AboutOuterMainDiv">
      <div className="about-element-main-heading">
        <h1>About Us</h1>
        <div className="about-element-main-heading-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </div>
      </div>
      <div className="container-fluid">
        <div className="row about-element-info">
          <div className="col-sm-6">
            <h2>We Are Your Favourite, Online Store.</h2>
            <p>
              Dui habitasse provident eu etiam praesent placeat maiores
              temporibus, accumsan parturient autem, mi animi ipsa. Lobortis
              maxime quos, pellentesq.
            </p>
            <p>
              Ee platea animi commodo tincidunt ridiculus tempora, ornare lorem
              quam sit possimus? Quam cras facilisi officia fusce. Ac, excepteur
              excepteur fusce? Sunt minim expedita magnis!
            </p>
          </div>
          <div className="col-sm-3">
            <div class="eros-element">
              <span>
                <i aria-hidden="true" class="far fa-snowflake"></i>
              </span>
              <h5>Eros Imperdie</h5>
              <p>
                We’ll generate a sitemap for your site, submit it to search engine
                is and track.
              </p>
            </div>
            <div className="rerum-element">
              <span>
                <i aria-hidden="true" class="far fa-hand-paper"></i>
                <h5>Rerum Rutrum</h5>
                <p>
                We’ll generate a sitemap for your site, submit it to search engine is and track.
                </p>
              </span>
            </div>
          </div>
          <div className="col-sm-3 eros-type-all-elements">
          <div class="proident-element">
              <span>
              <i aria-hidden="true" class="fab fa-codepen"></i>
              </span>
              <h5>Proident Congu</h5>
              <p>
                We’ll generate a sitemap for your site, submit it to search engine
                is and track.
              </p>
            </div>
            <div className="vero-element">
              <span>
              <i aria-hidden="true" class="fab fa-gg"></i>
              </span>
              <h5>Vero Maecenas</h5>
                <p>
                We’ll generate a sitemap for your site, submit it to search engine is and track.
                </p>
            </div>
          </div>
        </div>
      </div>
      <div className="best-offer-element">
            <div className="row">
              <div className="col-sm-9">
                <h2>Get Best Offers On Customized Designs!</h2>
              </div>
              <div className="col-sm-3">
                <button> GET STARTED <i aria-hidden="true" class="fas fa-angle-right"></i></button>
              </div>
            </div>  
      </div>
        <div className="creative-team-element">
          <h2>Meet Our Creative Team</h2>
          <span className="element-divider"></span>
      </div>
      <div className="container creative-team-img-outerdiv">
        <div className="row">
          <div className="col-sm-4">
          <img src="./images/amandaLee.jpg" alt="Avatar Logo" className="creative-team-img" />
          <h5>Amanda Lee</h5>
          <p>Creative Head</p>
          </div>
          <div className="col-sm-4">
          <img src="./images/leeStoner.jpg" alt="Avatar Logo" className="creative-team-img" />
          <h5>Lee Stoner</h5>
          <p>Marketing Head</p>
          </div>
          <div className="col-sm-4">
          <img src="./images/monicaGala.jpg" alt="Avatar Logo" className="creative-team-img" />
          <h5>Monica Gala</h5>
          <p>Graphic Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
