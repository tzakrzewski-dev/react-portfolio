import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";

/*
 *Import des datas
 */

import data from "../../data/data.json";

import ScrollToTop from "react-scroll-up";
//import Carousel from "react-elastic-carousel";

import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

import { Player } from "video-react";

import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  arrow: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  pauseOnHover: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const SocialShare = [
  { Social: <FaGithub />, link: "https://github.com/tzakrzewski-dev" },
  {
    Social: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/teddy-zakrzewski/",
  },
];

class PortfolioDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let itemList = data.PortfolioList.filter(
      (opt) =>
        opt.id ===
        parseInt(
          window.location.pathname.substring(
            window.location.pathname.lastIndexOf("/") + 1
          )
        )
    ).map((item) => {
      return (
        <React.Fragment>
          <Header headertransparent="header--transparent" />
          {/* Start Breadcrump Area */}
          <div
            className={`rn-page-title-area pt--120 pb--190 bg_image bg_image--${item.id}`}
            data-black-overlay="7"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="rn-page-title text-center pt--100">
                    <h2 className="title theme-gradient">
                      {item.header_title}
                    </h2>
                    <p style={{ color: "#f7f7f7" }}>{item.header_paragraphe}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Breadcrump Area */}

          {/* Start Portfolio Details */}
          <div className="rn-portfolio-details ptb--120 bg_color--1">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="portfolio-details">
                    <div className="inner">
                      <h2 className="title">{item.customer}</h2>
                      <p className="subtitle">{item.subtitle}</p>
                      <p>{item.title}</p>

                      <div className="portfolio-view-list d-flex flex-wrap">
                        <div className="port-view">
                          <span>Date</span>
                          <h4>{item.date}</h4>
                        </div>

                        <div className="port-view">
                          <span>Type de projet</span>
                          <h4>{item.category}</h4>
                        </div>

                        <div className="port-view">
                          <span>Logiciels</span>
                          <h4>{item.logiciels}</h4>
                        </div>

                        <div className="port-view">
                          <span>Technos</span>
                          <h4>{item.technos}</h4>
                        </div>

                        <div className="port-view">
                          <span>Framework</span>
                          <h4>{item.framework}</h4>
                        </div>
                      </div>

                      <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                        <ul className="social-share rn-lg-size d-flex justify-content-start liststyle mt--15">
                          {SocialShare.map((val, i) => (
                            <li key={i}>
                              <a href={`${val.link}`}>{val.Social}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="portfolio-thumb-inner">
                      <div className="thumb position-relative mb--30">
                        {item.videolink && (
                          <Player
                            playsInline
                            poster={item.poster_video}
                            src={`${process.env.PUBLIC_URL}/${item.videolink}`}
                          />
                        )}
                      </div>
                      <div className="thumb mb--30">
                        {item.images_1 && (
                          <img
                            src={`${process.env.PUBLIC_URL}/${item.images_1}`}
                            alt="Portfolio Images"
                          />
                        )}
                      </div>
                      <div className="thumb mb--30">
                        {item.images_2 && (
                          <img
                            src={`${process.env.PUBLIC_URL}/${item.images_2}`}
                            alt="Portfolio Images"
                          />
                        )}
                      </div>
                      <div className="thumb mb--30">
                        {item.images_3 && (
                          <img
                            src={`${process.env.PUBLIC_URL}/${item.images_3}`}
                            alt="Portfolio Images"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* End Portfolio Details */}
          {/* Start Related Work */}
          <Row className="portfolio-related-work pb--120 bg_color--1">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title service-style--3 text-center mb--15">
                    <h3 className="title">Mes réalisations</h3>
                    <p>Quelques projets réalisés avec différentes technos</p>
                  </div>
                </div>
              </div>

              {/* Start slider projets */}
              <Row>
                <Col className="col-lg-12">
                  <Slider {...settings}>
                    {data.PortfolioList.map((item) => (
                      <div>
                        <h3 style={{ textAlign: "center" }}>
                          {item.category}{" "}
                        </h3>
                        <a
                          className="rn-btn text-black"
                          href={`${process.env.PUBLIC_URL}/portfolio-detail/${item.id}`}
                        >
                          <img
                            key={item.id}
                            src={`${process.env.PUBLIC_URL}/${item.images_1}`}
                            alt=""
                          ></img>
                        </a>
                      </div>
                    ))}
                  </Slider>
                </Col>
              </Row>

              {/* End slider projets */}
            </div>
          </Row>
          {/* End Related Work */}

          {/* Start Back To Top */}
          <div className="backto-top" style={{ fontSize: 50 }}>
            <ScrollToTop showUnder={160} style={{ bottom: "100px" }}>
              <FiChevronUp />
            </ScrollToTop>
          </div>
          {/* End Back To Top */}
          <Footer />
        </React.Fragment>
      );
    });
    return (
      /*
       * affichage de la page
       */

      <div>{itemList}</div>
    );
  }
}
export default PortfolioDetails;
