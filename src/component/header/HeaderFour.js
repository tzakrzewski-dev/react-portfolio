import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiX, FiMenu } from "react-icons/fi";

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
          <div className="header-left">
            <div className="logo">
              <a href="/">
                <h3 className="title" style={{ color: "#1da1f2" }}>
                  Teddy <strong> Zakrzewski</strong>
                </h3>
              </a>
            </div>
          </div>

          <div className="header-right">
            <nav className="mainmenunav d-lg-block">
              <ul className="mainmenu">
                <li className="has-droupdown">
                  <Link to="#">Mes Projets</Link>
                  <ul className="submenu">
                    <li>
                      <Link to="/portfolio-details/Site%20vitrine/2">
                        Mika Piscine
                      </Link>
                    </li>
                    <li>
                      <Link to="/portfolio-details/Site%20vitrine/3">
                        ArteNobilia
                      </Link>
                    </li>
                    <li>
                      <Link to="/portfolio-details/Application%20Web/4">
                        Ecommerce
                      </Link>
                    </li>
                    <li>
                      <Link to="/portfolio-details/Application%20Web/5">
                        Cannes Is Up
                      </Link>
                    </li>
                    <li>
                      <Link to="/portfolio-details/Application%20Mobile/6">
                        Application météo
                      </Link>
                    </li>
                    <li>
                      <Link to="/portfolio-details/Application%20Mobile/7">
                        Application Mercedes
                      </Link>
                    </li>
                    <li>
                      <Link to="/portfolio-details/Application%20Web/8">
                        Configurateur 3008
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/presentation">A propos</Link>
                </li>
                <li >
                  <a href="/assets/models/cv.pdf" download>
                    <span className="txtmenu ">Mon CV</span>
                  </a>
                </li>

                <li>
                  <a href="mailto:contact@cannesisup.com">
                    {" "}
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
