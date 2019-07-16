import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import About from './aboutme';
import { faLinkedin, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons'
import { faBriefcase, faUser, faArchive, faRocket, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
import Typist from 'react-typist';

class Landing extends Component {
  render() {
    return(

      <div>
          <div className="landing-grid" style={{width: '100%', margin: 'auto'}}>
        

              <div className="banner-text">
              <Typist>
              <h1>Hi, &nbsp; 
              <Typist.Delay ms={1000} />
                 I’m Ricardo Cortes, 
                <Typist.Delay ms={1000} />
                <br/>I'm a software engineer Based in
                Rio de J
                <Typist.Backspace count={8} delay={200} />
                Berlin
                </h1>      
              <p>I've been working with the following technologies: <br/>
              HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS </p>
             </Typist>
                
              
                <div class="header__media">
                  <ul class="social__list">
                      <li class="social__item"><a class="social__link social__link--linkedin" href="https://www.linkedin.com/in/cortesdev/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                      <li class="social__item"><a class="social__link social__link--github" href="https://github.com/cortesdev" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
                      <li class="social__item"><a class="social__link social__link--codepen" href="http://www.codepen.com/corteric" target="_blank"><FontAwesomeIcon icon={faCodepen} /></a></li>
                  </ul>
                  </div>   
              </div>
              <svg className="triangle triangle--bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"> <polygon fill="white" points="0,0 100,100 0,100"></polygon> </svg>
          </div>
          <div>        
          <About />
        </div>
      </div>
    )
  }
}

export default Landing;
