import React from "react";
import "./Footer.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import img from "../assets/images/img3x.png";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* column -1 */}
          <div className="col">
            <h4 className="head">Support</h4>
            <ul className="list-unstyled">
              <li className="list">Call: 08046809259</li>
              <li className="email-supportbettr">Email: support@bettr.co.in</li>
              <li className="address">
                Address: 321,Bettr office, E-wing, <span> </span>Kanakia
                Zillion, LBS Marg, Kurla West,Mumbai, Maharashtra 400070
              </li>
              <li
                className=""
                style={{
                  fontSize: "10px",
                  paddingtop: "34px",
                  width: "92px",
                  height: "13px",
                  marginLeft: "-36px",
                }}
              >
                F&Q
              </li>
            </ul>
          </div>
          {/* column-2 */}
          <div className="col">
            <h4 className="head">Legal</h4>
            <ul className="list-unstyled">
              <li className="list" style={{ marginLeft: "-3px" }}>
                <a href="https://bettr.co.in/privacy.html" target="_blank">
                  <font color="black">Privacy-policy</font>
                </a>
              </li>
              <li className="list" style={{ marginLeft: "0px" }}>
                <a href="/" target="_blank">
                  <font color="black">Terms of Service</font>
                </a>
              </li>
              <li className="list" style={{ marginLeft: "-20px" }}>
                <a href="/" target="_blank">
                  <font color="black">Safety</font>
                </a>
              </li>
            </ul>
          </div>
          {/* column -3 */}
          <div className="col">
            <h4 className="head" style={{ marginLeft: "-24px" }}>
              Social
            </h4>
            <ul className="list-unstyled">
              <li className="list" style={{ marginLeft: "5px" }}>
                <a href="https://www.facebook.com/bettr.co.in/" target="_blank">
                  <font color="black">Facebook</font>
                </a>
              </li>
              <li className="list" style={{ marginLeft: "5px" }}>
                <a
                  href="https://www.linkedin.com/company/bettr-india"
                  target="_blank"
                >
                  <font color="black">Linkedin</font>
                </a>
              </li>
            </ul>
          </div>
          {/* column -4 */}
          <div className="col">
            <h4 className="head" style={{ marginLeft: "20px" }}>
              Get the Bettrcredit App
            </h4>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.mvalu.customer"
                  target="_blank"
                >
                  <img
                    src={img}
                    width="194px"
                    height="66px"
                    style={{
                      borderradius: "7px",
                      backgroundcolor: "#000000",
                      marginLeft: "20px",
                      marginTop: "34px",
                    }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer">
        <p className="footer-text">
          &copy; 2019 Bettr.co.in. All Right Reserved
        </p>
        <p className="footer-text footer-text2">
          made with <FavoriteIcon className="fav" fontSize="small" />
          {/* <FavoriteIcon className="fav" fontSize="small" /> */}
        </p>
      </div>
    </div>
  );
}

export default Footer;
