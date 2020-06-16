import React from "react";
import ScrollToTop from "react-scroll-up";
import TextLoop from "react-text-loop";
import Footer from "../component/footer/Footer";

import Header from "../component/header/HeaderFour";
import { FiChevronUp } from "react-icons/fi";
import data from "../../data/data.json";

const DesignerPortfolio = () => {
  return (
    <div>
      {/* Start Header Area  */}
      <Header
        headerPosition="header--static"
        logo="symbol-dark"
        color="color-black"
      />
      {/* End Header Area  */}

      <div className="slider-wrapper">
        {/* Start Single Slide */}
        {data.presentation.map((value, index) => (
          <div
            className="slide designer-portfolio slider-style-3  d-flex align-items-center justify-content-center bg_color--5 rn-slider-height"
            key={index}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="designer-thumbnail text-center">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/apropos/teddy.jpg`}
                      alt="Teddy Zakrzewski"
                    />
                  </div>
                </div>
                <div className="col-lg-7 mt_md--40 mt_sm--40">
                  <div className={`inner ${value.textPosition}`}>
                    {value.category ? <span>{value.category}</span> : ""}
                    <h1 className="title" style={{ fontSize: "40px" }}>
                      Bonjour, je m'appelle Teddy.
                      <br />
                      <TextLoop>
                        <span>Developpeur Full Stack JavaScript.</span>
                        <span>Front-End & Back-End. </span>
                        <span>Je réside sur la Côte d'Azur.</span>
                      </TextLoop>{" "}
                    </h1>

                    {value.description ? (
                      <p className="description">{value.description}</p>
                    ) : (
                      ""
                    )}
                    {value.description2 ? (
                      <p className="description">{value.description2}</p>
                    ) : (
                      ""
                    )}
                    {value.buttonText ? (
                      <div className="slide-btn">
                        <a
                          className="rn-button-style--2 btn-primary-color"
                          href={`${value.buttonLink}`}
                        >
                          {value.buttonText}
                        </a>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* End Single Slide */}

      {/* Start Portfolio Area-Mes Skills  */}
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title service-style--3 text-center mb--15">
            <h3 className="title" style={{ paddingTop: "50px" }}>
              Mes skills{" "}
            </h3>
          </div>
        </div>
      </div>
      <div className="creative-portfolio-wrapper bg_color--1">
        <div className="creative-portfolio-wrapper plr--10">
          <div className="row row--5">
            {data.imageSkills.map((value, i) => (
              <div className="col-lg-3 col-md-6 col-12" key={i}>
                <div className="portfolio-style--3">
                  <div className="thumbnail">
                    <a href={value.link}>
                      <img
                        className="w-100"
                        src={`${value.images}`}
                        alt="Portfolio Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3 style={{ color: "#f7f7f7" }}>{value.category}</h3>
                    <h4>{value.name}</h4>
                    <h5 className="title " style={{ color: "#f7f7f7" }}>
                      <a href={value.link}>{value.use}</a>
                    </h5>
                    <div className="portfolio-btn">
                      <a className="rn-btn text-white" href={value.link}>
                        En savoir plus
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Portfolio Area  */}

      {/* Start Portfolio Area-Skills en cours d'apprentissage  */}
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title service-style--3 text-center mb--15">
            <h3 className="title" style={{ paddingTop: "50px" }}>
              Skills en cours d'apprentissage{" "}
            </h3>
          </div>
        </div>
      </div>
      <div className="creative-portfolio-wrapper bg_color--1">
        <div className="creative-portfolio-wrapper plr--10">
          <div className="row row--5">
            {data.imageNewTechnos.map((value, i) => (
              <div className="col-lg-3 col-md-6 col-12" key={i}>
                <div className="portfolio-style--3">
                  <div className="thumbnail">
                    <a href={value.link}>
                      <img
                        className="w-100"
                        src={`${value.images}`}
                        alt="Portfolio Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h3 style={{ color: "#f7f7f7" }}>{value.category}</h3>
                    <h4>{value.name}</h4>
                    <h5 className="title" style={{ color: "#f7f7f7" }}>
                      <a href={value.link}>{value.use}</a>
                    </h5>
                    <div className="portfolio-btn">
                      <a className="rn-btn text-white" href={value.link}>
                        En savoir plus
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Portfolio Area  */}

      {/* Start Footer Style  */}
      <Footer />
      {/* End Footer Style  */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
    </div>
  );
};

export default DesignerPortfolio;
