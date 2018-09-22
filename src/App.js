import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import ShowInfo from './components/showInfo';
import Highlight from './components/Highlights/index';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';
import { Element } from 'react-scroll'

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: '1500px', background: 'cornflowerblue'}}>
        
        <Element name="home">
          <Header/>
        </Element>
        
        <Featured/>

        <Element name="info">
          <ShowInfo/>
        </Element>
        
        <Element name="sale">
          <Highlight/>
        </Element>
        
        <Element name="pricing">
          <Pricing/>
        </Element>

        <Element name="location">
          <Location/>
        </Element>
        
        <Footer/>
      </div>
    );
  }
}

export default App;
