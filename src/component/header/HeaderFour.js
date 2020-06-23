import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiX, FiMenu } from "react-icons/fi";
import {
  FaHome,
  FaUser,
  FaIdBadge,
  FaEnvelope,
  FaProjectDiagram,
} from "react-icons/fa";

import LineDrawing from "../Linedrawing/Linedrawing";

class HeaderFour extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
  }
  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }
  CLoseMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  }
  render() {
    var elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }

    const { logo, color, headerPosition } = this.props;
    let logoUrl;
    if (logo === "light") {
      logoUrl = (
        <img src="/assets/images/logo/logo-light.png" alt="Teddy Zakrzewski" />
      );
    } else if (logo === "dark") {
      logoUrl = (
        <img src="/assets/images/logo/logo-dark.png" alt="Teddy Zakrzewski" />
      );
    } else if (logo === "symbol-dark") {
      logoUrl = (
        <img
          src="/assets/images/logo/logo-symbol-dark.png"
          alt="Teddy Zakrzewski"
        />
      );
    } else if (logo === "all-dark") {
      logoUrl = (
        <img
          src="/assets/images/logo/logo-all-dark.png"
          alt="Teddy Zakrzewski"
        />
      );
    } else if (logo === "symbol-light") {
      logoUrl = (
        <img
          src="/assets/images/logo/logo-symbol-light.png"
          alt="Teddy Zakrzewski"
        />
      );
    } else {
      logoUrl = (
        <img src="/assets/images/logo/logo.png" alt="Teddy Zakrzewski" />
      );
    }

    return (
      <header
        className={`header-area formobile-menu ${headerPosition} ${color}`}
      >
        <div className="header-wrapper" id="header-wrapper">
          <div className="header-left " style={{marginTop:'15px'}}>
            <div className="logo">
              <a href={`${process.env.PUBLIC_URL}/`}>
                <h3 className="title" style={{ color: "#1da1f2" }}>
                  <LineDrawing />
                </h3>
              </a>
            </div>
          </div>

          <div className="header-right">
            <nav className="mainmenunav d-lg-block">
              <ul className="mainmenu">
                <li>
                  <Link to={`${process.env.PUBLIC_URL}/`}>
                    <FaHome size={30} />
                    Accueil{" "}
                  </Link>
                </li>
                <li className="has-droupdown">
                  <Link to="#">
                    <FaProjectDiagram size={30} />
                    Mes Projets
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/portfolio-detail/2`}>
                        Mika Piscine
                      </Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/portfolio-detail/3`}>
                        ArteNobilia
                      </Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/portfolio-detail/4`}>
                        Ecommerce
                      </Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/portfolio-detail/5`}>
                        Cannes Is Up
                      </Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/portfolio-detail/6`}>
                        Application météo
                      </Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/portfolio-detail/7`}>
                        Application Mercedes
                      </Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/portfolio-detail/8`}>
                        Configurateur 3008
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to={`${process.env.PUBLIC_URL}/presentation`}>
                    <FaUser size={30} /> A propos{" "}
                  </Link>
                </li>
                <li>
                  <a
                    href={`${process.env.PUBLIC_URL}/assets/models/cv.pdf`}
                    download
                  >
                    <FaIdBadge size={30} />{" "}
                    <span className="txtmenu ">Mon CV</span>
                  </a>
                </li>

                <li>
                  <a href="mailto:teddy.zakrzewski@outlook.fr">
                    {" "}
                    <FaEnvelope size={30} />{" "}
                    <span className="txtmenu ">Contact</span>
                  </a>
                </li>
              </ul>
            </nav>

            {/* Start Humberger Menu  */}
            <div className="humberger-menu d-block d-lg-none pl--20">
              <span
                onClick={this.menuTrigger}
                className="menutrigger text-white"
              >
                <FiMenu />
              </span>
            </div>
            {/* End Humberger Menu  */}
            <div className="close-menu d-block d-lg-none">
              <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                <FiX />
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default HeaderFour;
