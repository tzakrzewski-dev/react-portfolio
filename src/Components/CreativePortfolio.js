import React from "react";

/*
 *Import des components
 */
import Header from "../component/header/HeaderFour";
import Footer from "../component/footer/Footer";

/*
 *Import des dependencies
 */
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import { Zoom } from "react-slideshow-image"; //Import du slide

/*
 *Import des datas
 */

import data from "../../data/data.json";

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
};
/***Fin Slider ** */

const CreativePortfolio = () => {
  return (
    <div className="creative-portfolio">
      {/* Start Header  */}
      <Header
        headerPosition="header--static"
        logo="symbol-dark"
        color="color-black"
      />
      {/* End Header */}

      <Zoom {...zoomOutProperties}>
        {data.imageSlide.map((each, index) => (
          <img key={index} src={each.images} alt="" />
        ))}
      </Zoom>

      {/* Start Portfolio Area  */}
      <div className="creative-portfolio-wrapper bg_color--1">
        <div className="creative-portfolio-wrapper plr--10">
          <div className="row row--5">
            {data.PortfolioList.map((value, i) => (
              <div className="col-lg-3 col-md-6 col-12" key={i}>
                <div className="portfolio-style--3">
                  <div className="thumbnail">
                    <a
                      href={`/portfolio-details/${value.id}`}
                    >
                      <img
                        className="w-100"
                        src={`assets/images/portfolio/portfolio-${value.images}.png`}
                        alt="Portfolio Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <p className="portfoliotype">{value.category}</p>
                    <h4 className="title">
                      <a
                        href={`/portfolio-details/${value.id}`}
                      >
                        {value.title}
                      </a>
                    </h4>
                    <div className="portfolio-btn">
                      <a
                        className="rn-btn text-white"
                        href={`/portfolio-details/${value.id}`}
                      >
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
      <div className="backto-top" style={{ fontSize: 50 }}>
        <ScrollToTop showUnder={160} style={{ bottom: "100px" }}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
    </div>
  );
};

export default CreativePortfolio;
