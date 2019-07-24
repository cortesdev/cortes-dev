import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import About from './aboutme';
import { faLinkedin, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import * as ReactBootstrap from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
 
import Typist from 'react-typist';
import Macbook from './macbook';

class Landing extends Component {
  render() {
    return(
        <div>
          <div className="landing-grid" style={{width: '100%', margin: 'auto'}}>      
              <div className="banner-text">
              <Container>
                <Row>
                  <Col md={5} xl={6}>
                    <Typist>
                      <h1>Sup?  &nbsp; 
                      <Typist.Delay ms={700} />
                      I’m Ricci Cortes, 
                      <Typist.Delay ms={1000} />
                      <br/>I'm a software engineer Based in
                      Rio de J
                      <Typist.Backspace count={8} delay={200} />
                      <Typist.Delay ms={500} />
                      Berlin
                    </h1>      
                    <p className="tech">I've been working with the following technologies: <br/>
                      <span className="tech-stack">HTML/CSS | JavaScript | React | React Native | NodeJS </span></p>
                    </Typist>                  
                  </Col>        
                  <Col md={7} xl={6} className="u-my-auto">
                    <Macbook />                              
                  </Col>        
                </Row>
              </Container>
                <div className="header__media">
                    <ul className="social__list">
                        <li className="social__item"><a className="social__link social__link--linkedin" href="https://www.linkedin.com/in/cortesdev/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                        <li className="social__item"><a className="social__link social__link--github" href="https://github.com/cortesdev" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
                        <li className="social__item"><a className="social__link social__link--codepen" href="http://www.codepen.com/corteric" target="_blank"><FontAwesomeIcon icon={faCodepen} /></a></li>
                    </ul>
                </div>
              </div>
              <svg className="triangle triangle--bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"> <polygon fill="white" points="0,0 100,100 0,100"></polygon> </svg>
          </div>
          
          <Grid>    
            <Cell col={12}>              
              <About />
            </Cell>
          </Grid>
      </div>
    )
  }
}

export default Landing;
