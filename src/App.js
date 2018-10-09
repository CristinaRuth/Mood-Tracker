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
import { faSmileBeam, faFrown, faBullseye, faSkull } from '@fortawesome/free-solid-svg-icons';
import puppyOne from './images/puppies/1.jpeg';
import puppyTwo from './images/puppies/2.jpeg';
import puppyThree from './images/puppies/3.jpeg';
import puppyFour from './images/puppies/4.jpeg';
import puppyFive from './images/puppies/5.jpeg';
import puppySix from './images/puppies/6.jpeg';
import puppySeven from './images/puppies/7.jpeg';
import puppyEight from './images/puppies/8.jpeg';
import puppyNine from './images/puppies/9.jpeg';
import puppyTen from './images/puppies/10.jpeg';
import kittenOne from './images/kittens/1.jpeg';
import kittenTwo from './images/kittens/2.jpeg';
import kittenThree from './images/kittens/3.jpeg';
import kittenFour from './images/kittens/4.jpeg';
import kittenFive from './images/kittens/5.jpeg';
import kittenSix from './images/kittens/6.jpeg';
import kittenSeven from './images/kittens/7.jpeg';
import kittenEight from './images/kittens/8.jpeg';
import kittenNine from './images/kittens/9.jpeg';
import kittenTen from './images/kittens/10.jpeg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isBadMood: false,
      isGoodMood: false,
      isBullsEye: false,
      bullsEyeClicks: 0,
      isBullsEyeExplosion: false
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.setBadMood = this.setBadMood.bind(this);
    this.setGoodMood = this.setGoodMood.bind(this);
    this.resetMood = this.resetMood.bind(this);
    this.getRandomPuppyImage = this.getRandomPuppyImage.bind(this);
    this.getRandomKittenImage = this.getRandomKittenImage.bind(this);
    this.handleBullsEyeClick = this.handleBullsEyeClick.bind(this);
  }

  
  handleBullsEyeClick(event) {
    event.preventDefault();
    //determine if we exploded -> anything 5 & under
    let isExplosion = Math.floor(Math.random() * Math.floor(100)) <= 5;

    if (isExplosion) {
      this.setState({
        isBullsEye: true,
        isBullsEyeExplosion: true
      });
    }
    else{ 
    this.setState(prevState =>({
      isBullsEye: true,
bullsEyeClicks: prevState.bullsEyeClicks+1
    }));
  }
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  setBadMood() {
    this.setState({
      isBadMood: true,
      isBullsEye: false
    });
  }

  setGoodMood() {
    this.setState({
      isGoodMood: true,
      isBullsEye: false
    })
  }

  setBullsEye() {
    this.setState({
      isBullsEye: true
    })
  }

  resetMood() {
    this.setState({
      isBadMood: false,
      isGoodMood: false,
      isBullsEye: false,
      bullsEyeClicks: 0,
      isBullsEyeExplosion: false
    })
  }

  getRandomPuppyImage() {
    let puppies = [
      puppyOne,
      puppyTwo,
      puppyThree,
      puppyFour,
      puppyFive,
      puppySix,
      puppySeven,
      puppyEight,
      puppyNine,
      puppyTen
    ];
    let result = puppies[Math.floor(Math.random() * puppies.length)];
    return result;
  }

  getRandomKittenImage() {
    let kittens = [
      kittenOne,
      kittenTwo,
      kittenThree,
      kittenFour,
      kittenFive,
      kittenSix,
      kittenSeven,
      kittenEight,
      kittenNine,
      kittenTen
    ];
    let result = kittens[Math.floor(Math.random() * kittens.length)];
    return result;
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
            setBadMood={this.setBadMood}
            getRandomPuppyImage={this.getRandomPuppyImage}
            getRandomKittenImage={this.getRandomKittenImage}
            isBullsEye ={this.state.isBullsEye}
            handleBullsEyeClick={this.handleBullsEyeClick}
            bullsEyeClicks={this.state.bullsEyeClicks}
            isBullsEyeExplosion={this.state.isBullsEyeExplosion}
          />
        </Jumbotron>
        <em>Oct 2018 - Under Construction</em><br />
        &copy; Cristina Ruth<br />
        <a href="https://linkedin.com/in/cristinaruth">LinkedIn</a>
      </div>
    );
  }
}

class Content extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     bullsEyeClicks: 0
  //   }
  //   //this.handleBullseyeClick = this.handleBullseyeClick.bind(this);
  // }
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

  getRandomTrueOrFalse() {
    return (Math.floor(Math.random() * Math.floor(100))) % 2 === 0;
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
    else if (this.props.isBullsEye) {
      if (this.props.isBullsEyeExplosion) {
        const message = <h1 className="text-center">OH NO!! The button exploded after {this.props.bullsEyeClicks} clicks :(<br/><br/>
        <FontAwesomeIcon icon={faSkull} style="color: red"/><br/><br/>
        </h1>;
      return (<Container><Row>
          <Col>
            {message}
          </Col>
        </Row>
          <Row>&nbsp;</Row>
          <Row>
          {/* <Col>
              <Button onClick={this.props.setBadMood} block color="danger" size="lg"> <FontAwesomeIcon icon={faFrown} /></Button>
            </Col> */}
            <Col>
              <Button onClick={this.props.resetMood} block color="success" size="lg">Try Again <FontAwesomeIcon icon={faSmileBeam} /></Button>
            </Col>
          </Row>
        </Container>
      );
      }
      else {
      const message = <h1 className="text-center">Here's a BIG button. Keep pressing until you feel better!<br/><br/>
        <Button size="lg" color="danger"><FontAwesomeIcon icon={faBullseye} onClick={this.props.handleBullsEyeClick}/></Button><br/><br/>
        {this.props.bullsEyeClicks}
        </h1>;
      return (<Container><Row>
          <Col>
            {message}
          </Col>
        </Row>
          <Row>&nbsp;</Row>
          <Row>
          <Col>
              <Button onClick={this.props.setBadMood} block color="danger" size="lg">Still Sad <FontAwesomeIcon icon={faFrown} /></Button>
            </Col>
            <Col>
              <Button onClick={this.props.resetMood} block color="success" size="lg">I Feel Better! <FontAwesomeIcon icon={faSmileBeam} /></Button>
            </Col>
          </Row>
        </Container>
      );
    }
    }
    else if (this.props.isBadMood) {
      const isPuppyOrKitten = this.getRandomTrueOrFalse();
      const isKeepPressingTarget = this.getRandomTrueOrFalse();
      let message = null;
      if (isPuppyOrKitten) {
        const isPuppy = this.getRandomTrueOrFalse();
        if (isPuppy) {
          message = <h1 className="text-center">Here's a cute puppy to cheer you up. <br /><br /><img src={this.props.getRandomPuppyImage()} /></h1>;
        }
        else {
          message = <h1 className="text-center">Here's a cute kitten to cheer you up. <br /><br /><img src={this.props.getRandomKittenImage()} /></h1>;
        }
      }
      else if (isKeepPressingTarget) {
        message = <h1 className="text-center">Here's a BIG button. Keep pressing until you feel better!<br/><br/>
        <Button size="lg" color="danger"><FontAwesomeIcon icon={faBullseye} onClick={this.props.handleBullsEyeClick}/></Button><br/><br/>
        {this.props.bullsEyeClicks}
        </h1>;
      }
      else {
        message = <h1>{this.getRandomBadMoodMessage()}</h1>;
      }
      return (
        <Container><Row>
          <Col>
            {message}
          </Col>
        </Row>
          <Row>&nbsp;</Row>
          <Row>
            <Col>
              <Button onClick={this.props.setBadMood} block color="danger" size="lg">Still Sad <FontAwesomeIcon icon={faFrown} /></Button>
            </Col>
            <Col>
              <Button onClick={this.props.resetMood} block color="success" size="lg">I Feel Better! <FontAwesomeIcon icon={faSmileBeam} /></Button>
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
              <Button color="success" size="lg" block onClick={this.props.setGoodMood}><FontAwesomeIcon icon={faSmileBeam} className="main-icon" /></Button>
            </Col>
            <Col xs="12" sm="6">
              <Button color="danger" size="lg" block onClick={this.props.setBadMood}><FontAwesomeIcon icon={faFrown} className="main-icon" /></Button>
            </Col>
          </Row>
        </Container>
      );
    }
  }
}

export default App;
