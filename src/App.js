import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './containers/Navbar'
import ProfileCard from './components/ProfileCard'
import Content from './components/Content'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import $ from 'jquery';

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentDisplay: Home
    }
  }
  handleClick(event) {
    this.setState({currentDisplay: $(event.target).text()});
  }
  render() {
    let display;
      if (this.state.currentDisplay === 'Home') {
        display = <Home />
      } else if (this.state.currentDisplay === 'About') {
        display = <About />
      } else if (this.state.currentDisplay === 'Contact') {
        display = <Contact />
      };
    return (
      <div className="App">
        <Navbar clickHandler={event => this.handleClick(event)} />
          {display}
      </div>
    );
  }
}

export default App;
