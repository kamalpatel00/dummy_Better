import container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./BootstrapGrid.css";
import logo from "../assets/images/kamal.jpg";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import React, { Component } from "react";

export class BootstrapGrid extends Component {
  constructor() {
    super();

    this.state = {
      btn1: "Click kamal",
    };
  }

  handleButtonName = (e) => {
    // e.prevent.Default;
    this.setState({
      btn1: "THank u ",
      //   reset();
    });
  };

  render() {
    return (
      <div className="div1">
        <container fluid="xl">
          <Row>
            <Col className="whyPeople" xs={6}>
              Why People <br />
              Love Bettr Credit
            </Col>
          </Row>
          <Row className="row1">
            <Col className="col2" xs={4} md={4}>
              <img className="imgLogo" src={logo}></img>{" "}
              <b className="name">Ashavmedh</b>
              <br />
              <p className="place">Mumbai</p>
              <p className="feedback" style={{ textAlign: "left" }}>
                Aapke tips ke wajah se mera credit score improve hogaya. Thank
                you so much mere report ko itne achese se analyse karne ke liye.
              </p>
            </Col>

            <Col className="col2" xs={4} md={4}>
              <img className="imgLogo" src={logo}></img>{" "}
              <b className="name">Vikas</b>
              <br />
              <p className="place">Mumbai</p>
              <p className="feedback" style={{ textAlign: "left" }}>
                Excellent app! Ghar baithe maine apna credit score check karliya
                aur credit line ke liye apply bhi. Best baat hai ki yeh sab 1
                hour ke andar ho gaya! Too good!.
              </p>
            </Col>
            <Col className="col2" xs={4} md={4}>
              <img className="imgLogo" src={logo}></img>{" "}
              <b className="name">Raviharsh</b>
              <br />
              <p className="place">Mumbai</p>
              <p className="feedback" style={{ textAlign: "left" }}>
                Very good app that shares a detailed credit report for free.
                Also their credit line is like personal ATM. Rakh ke rakho for
                future!
              </p>
            </Col>
            <div className="arrowButton">
              <button className="arrowLeft">
                <ArrowBackIcon />
              </button>
              <button className="arrowRight">
                <ArrowForwardIcon />
              </button>
            </div>
          </Row>
        </container>
      </div>
    );
  }
}

export default BootstrapGrid;
