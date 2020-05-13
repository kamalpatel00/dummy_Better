import React, { Component } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import logo from "../assets/images/bettrcredit-logo-website.svg";
// import "../assets/css/webiste.css";
import PhoneMissedIcon from "@material-ui/icons/PhoneMissed";
import creditScore from "../assets/images/creditscore-image.svg";
import playButton from "../assets/images/googleplay-cta@3x.png";
import percentIcon from "../assets/images/ico-1.svg";
import video from "../assets/images/video.mov";
import Navbar from "react-bootstrap/Navbar";
import Footer from "./Footer";

class BettrWebsite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      removeIcon: false,
      className: "",
    };
    this.expandIcon = this.expandIcon.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.pageYOffset > 0) {
      if (!this.state.className) {
        this.setState({ className: "blue" });
      }
    } else {
      if (this.state.className) {
        this.setState({ className: "" });
      }
    }
  };

  expandIcon() {
    console.log("call");
    this.setState({ removeIcon: !this.state.removeIcon });
  }

  render() {
    return (
      <div className="container" style={{ padding: 0 }}>
        {/*header*/}
        <div className="header">
          {/*<img src={logo} alt="logo" className="headerLogo"/>*/}
          {/*<ul className="menu-ul" style={headerRightText}>*/}
          {/*    <li>*/}
          {/*        <p style={CreditScoreText}> Credit score</p>*/}
          {/*    </li>*/}
          {/*    <li className="con">*/}
          {/*        <PhoneMissedIcon className="missedcall"/><span className="phonenumber">080-46809259</span>*/}
          {/*    </li>*/}
          {/*</ul>*/}
          <Navbar>
            <Navbar.Brand href="#home">
              <img src={logo} alt="logo" className="headerLogo" />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text
                className="CreditScoreText"
                style={{ color: "black" }}
              >
                Credit score
              </Navbar.Text>
              <Navbar.Text className="con">
                <PhoneMissedIcon className="misscall" />
                <span className="phonenumber">080-46809259</span>
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar>
        </div>
        {/*container 1 blue color with video*/}
        <div className="row firstContainer" style={{ margin: 0, padding: 0 }}>
          <div className=" col ">
            <div className="paddingLeft Check-credit-score">
              Check credit score for free
            </div>
            <div className="paddingLeft Personal-loans">
              Boost your chances of getting approved for loan/credit card by
              improving your credit score
            </div>
            <div className={"paddingLeft"}>
              <img src={playButton} className={"gPlayBtn"} />
            </div>
          </div>

          <div className="col" style={{ paddingRight: "0px" }}>
            <div className="Bitmap">
              <video width="477px" height="510px" autoPlay="autoPlay" loop>
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "#ffd5a6", margin: "0px" }}>
          <div
            className="row  secondContainer"
            style={{ backgroundColor: "#ffd5a6", margin: "0px" }}
          >
            <div className={"col"}>
              <div className={" secondContainerText"}>
                <img src={percentIcon} /> 2,50,000 + App installs
              </div>
            </div>
            <div className={" col"}>
              <div className={"secondContainerText"}>
                2,00,000 + Credit score shared
              </div>
            </div>
            <div className={"col"} style={{ height: "50px" }}>
              <div className={"secondContainerText"}>27001 ISO Certified</div>
            </div>
          </div>
        </div>
        <div className={"whatWeBringContainer"}></div>
        <div className="row" style={{ margin: 0, padding: 0 }}>
          <div className=" col thirdContainer">
            <div className="thirdContainerCredit">Credit Score</div>
            <div className="Credit-description">
              We analyse the major factors affecting your credit score and share
              tips on how you can improve it. We even notify you if something on
              your credit report changes!
            </div>
          </div>

          <div className="col" style={{ paddingRight: "0px" }}>
            <div className="scoreBackground">
              <img src={creditScore} className={"scoreImage"} alt={"score"} />
            </div>
          </div>
        </div>
        <div className="whyPeople"></div>
        {/* //footer -kamal */}
        <Footer />
      </div>
    );
  }
}

export default BettrWebsite;
