import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './App.custom.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button,
  Card,
  CardTitle,
  CardText
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileBeam, faFrown } from '@fortawesome/free-solid-svg-icons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isBadMood: false,
      isGoodMood: false
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.setBadMood = this.setBadMood.bind(this);
    this.setGoodMood = this.setGoodMood.bind(this);
    this.resetMood = this.resetMood.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  setBadMood() {
    this.setState({
      isBadMood: true
    });
  }

  setGoodMood() {
    this.setState({
      isGoodMood: true
    })
  }

  resetMood() {
    this.setState({
      isBadMood: false,
      isGoodMood: false
    })
  }

  render() {
    return (
      <div>
        <Navbar color="inverse" light expand="md">
          <NavbarBrand href="/">Mood Tracker</NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                {/* <NavLink href="/components/">About</NavLink> */}
              </NavItem>
              <NavItem>
                {/* <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink> */}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Jumbotron>
          <Content
            isBadMood={this.state.isBadMood}
            isGoodMood={this.state.isGoodMood}
            resetMood={this.resetMood}
            setGoodMood={this.setGoodMood}
            setBadMood={this.setBadMood} />
        </Jumbotron>
        <em>Oct 2018 - Under Construction</em><br />
        &copy; Cristina Ruth<br />
        <a href="https://linkedin.com/in/cristinaruth">LinkedIn</a>
      </div>
    );
  }
}

class Content extends Component {
  getRandomGoodMoodMessage() {
    let messages = [
      "That's great!",
      "Woot woot!",
      "Oh yeah!",
      "It is such a wonderful day!",
      "Ohhhh, happy day!",
      "*dance party*"
    ];
    let result = messages[Math.floor(Math.random() * messages.length)];
    return result;
  }

  getRandomBadMoodMessage() {
    let messages = [
      "Things will turn out better. Hang in there!",
      "Don't let anybody put you down. You got this!",
      "You're awesome and don't forget that!",
      "There's a rainbow at the end of the storm.",
      "Think happy thoughts.",
      "No matter how down you feel, remember that someone loves you.",
      "You are amazing and don't let anybody else let you think otherwise."
    ];
    let result = messages[Math.floor(Math.random() * messages.length)];
    return result;
  }

  render() {
    if (this.props.isGoodMood) {
      const message = this.getRandomGoodMoodMessage();
      return (
        <Container>
          <Row>
          <Col>
          <h1>{message}</h1>
          </Col>
          </Row>
            
          <Row>&nbsp;</Row>
          <Row>
            <Col>
            <Button onClick={this.props.resetMood} color="success" block>Great!</Button>
            </Col>
          </Row>
          </Container>
      );
    }
    else if (this.props.isBadMood) {
      const message = this.getRandomBadMoodMessage();
      return (
        <Container><Row>
          <Col>
            <h1>{message}</h1>
        </Col>
        </Row>
          <Row>&nbsp;</Row>
          <Row>
            <Col>
              <Button onClick={this.props.resetMood} block color="success">I Feel Better!</Button>
            </Col>
          </Row>
        </Container>
      );
    }
    else {
      return (
        <Container><Row>
          <Col>
            <h1>How are you feeling today?</h1>
          </Col>
        </Row>
          <Row>&nbsp;</Row>
          <Row>
            <Col xs="12" sm="6">
              <Button color="success" size="lg" block onClick={this.props.setGoodMood}><FontAwesomeIcon icon={faSmileBeam} /></Button>
            </Col>
            <Col xs="12" sm="6">
              <Button color="danger" size="lg" block onClick={this.props.setBadMood}><FontAwesomeIcon icon={faFrown} /></Button>
            </Col>
          </Row>
        </Container>
      );
    }
  }
}

export default App;
