import React, { Component } from 'react';
import '../styles/macbook.css';

// // this thing is js driven on slid.es so I didn't bother switching out for css animations
// var duration = 7000, steps = 3, step = 1;
// setInterval( function() {
//   document.querySelector( '.animation' ).setAttribute( 'data-animation-step', step = ++step > steps ? 1 : step );
// }, duration / steps );


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
