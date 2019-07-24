import React, { Component } from 'react';
import '../styles/macbook.css';

// this thing is js driven on slid.es so I didn't bother switching out for css animations
var duration = 7000, steps = 3, step = 1;
setInterval( function() {
  document.querySelector( '.animation' ).setAttribute( 'data-animation-step', step = ++step > steps ? 1 : step );
}, duration / steps );


class Macbook extends Component {
  render() {
    return(

      <div class="animation" data-animation-step="1">
        <div class="device">        
          <div class="phone-home-button"></div>
          <div class="tablet-home-button"></div>
          <div class="screen-stand"><div class="leg"></div><div class="foot"></div></div>
          <div className="macbook">           
              <div className="body"></div>
          </div>
          <div class="display">
              <div class="slide1"> 
                  <div class="macbook-screen">
                        <div class="macbook-screen__bg"></div>
                  </div>
                </div> 
              <div class="slide2"><div>Websites ready for <em>tablets</em></div></div>
              <div class="slide3"><div>Websites ready for <em>phones</em></div></div>
              <div class="slide4"><div>Websites ready for <em>web</em></div></div>
          </div>
      </div>
		</div>
    
    )
  }
}

export default Macbook;
