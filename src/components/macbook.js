import React, { Component } from 'react';
import '../styles/macbook.css';

 
class Macbook extends Component {
  render() {
    return(
      <div className="animation" id="animation" data-animation-step="1">
      <div className="device">        
        <div className="phone-home-button"></div>
        <div className="tablet-home-button"></div>
        <div className="macbook"> 
          <div className="macbook-display">
            <div className="camera"></div>
            <div className="macbook-screen"></div> 
              <div className="body"></div>
            </div>
          </div>
        <div className="display">
          <div className="slide1">
            <div className="macbook-screen__bg"></div>
            <div>Recent <em>frameworks</em></div>
          </div> 
          <div className="slide2"><div> Progressive  <em>enhancement</em></div></div>
          <div className="slide3"><div>React native <em>Apps</em></div></div>
        </div>
      </div>
    </div>    
    )
  }
}

export default Macbook;
