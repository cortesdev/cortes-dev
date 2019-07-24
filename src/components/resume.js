import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import '../styles/resume.css';
import { faLinkedin, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons'
import { faBriefcase, faUser, faArchive, faRocket, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

class Resume extends Component {
  render() {
    return(
      <div  >  
        <Grid className="main-wrapper">
          <Cell col={8}>
            <section className="section summary-section">
              <h2 className="section-title"><FontAwesomeIcon icon={faUser} />About me</h2>
              <div className="summary">
                      <p>Berlin Based Frontend web Developer &amp; UX UI Designer, focused in crafting clean and funcional Web Design/Code. Creating intuitive user experience/usability, applying design concepts to the online media and marketing industry using thecnologies as SASS, React                       
                          I've spent the past years developing websites for the companies described on my Professional experience section on this resume, 
                          as well as WordPress websites for private clients as freelancer. All websites have been coded using responsive and cross-browser compatibility standards.                     
                      </p>
                      <p>In addition, I've also worked with continuous integration and software testing also been designing and coding my portfolio website in my spare time i've been styling React, Angular websites, among other technologies created a Design system style guide using Patternlab.io.                                                   	   
                          Experienced in (styling) Typo3, Drupal (templating) Intershop(ISML), Wordpress (incl. styling themes, functions, plugins, html/php), React-redux, Angular.js, have used technologies as Git / Node / NVM / Gulp / Grunt / Bower.
                          I consider myself always willing to learn and very much curiosity driven professional
                      </p>
              </div>
          </section>
          <section className="section experiences-section">
              <h2 className="section-title"><FontAwesomeIcon icon={faBriefcase} />Experience</h2>
              <div className="item">
                  <div className="meta">
                      <div className="upper-row">
                          <h3 className="job-title">Software engineer</h3>
                          <div className="time">2018 - *</div>
                      </div>
                      <div className="company">                        
                        <Link target="_blank" to="http://www.Diconium.com/" >Diconium</Link>                        
                      </div>                  
                  </div>
                  <div className="details">
                      <p>As UI Developer / Software Engineer I have been developing Digital transformation projects, implementing UI Design systems, features for Portals/systems, e-commerce websites and web-apps.
                          Using Stacks as: Intershop, npm, yaml, grunt, html, css, sass, (AngularJS, React styling new components), javascript (client side simple animations).
                          Technologies: html5, isml(Intershop), Node, Grunt,Gulp,Sass,Less Patternlab.io
                      </p>
                  </div>
              </div>
              <div className="item">
                  <div className="meta">
                      <div className="upper-row">
                          <h3 className="job-title">Front End Developer</h3>
                          <div className="time">2016 - 2018</div>
                      </div>
                      <div className="company">
                      <Link target="_blank" to="http://www.paxlife.de/" >Paxlife</Link></div>
                  </div>
                  <div className="details">
                      <p> As Front-End developer I have been styling the old and the new version of Cloud10 application, promoting internal responsive testing, Using HTML CSS React styling NODE,GRUNT,GULP,SASS,LESS getting the pages and modular components and features ready for Aircraft installation for In companies as Condor and Thomas Cook airlines Inflight Entertainment.</p>
                  </div>
              </div>
              <div className="item">
                  <div className="meta">
                      <div className="upper-row">
                          <h3 className="job-title">Front End Developer JR</h3>
                          <div className="time">2015 - 2016</div>
                      </div>
                      <div className="company"> 
                         <Link target="_blank"  to="http://www.sociomantic.com/" >Paxlife</Link>
                      </div>
                  </div>
                  <div className="details">
                      <p>As Front-end web developer in the styling team, I have been styling websites building and maintaining Sociomantic websites Github/Git/Grunt/Sass/HTML5/Jquery, projects in Wordpress CMS.
                      </p>
                  </div>
              </div>
                <div className="item">
                  <div className="meta">
                      <div className="upper-row">
                          <h3 className="job-title">Front End Developer JR</h3>
                          <div className="time">2015 - 2015</div>
                      </div>                  
                      <Link target="_blank"  to="http://www.compuccino.com/" >Compuccino</Link>                        
                  </div>
                  <div className="details">
                      <p>As Front-end web developer, I have been Styling websites for different clients, deployed web interactive websites Github/Git/Grunt/Sass/HTML5/JQ, projects relaunch in different CMS Wordpress/Typo3/Drupal and short experience styling Webpack/React.js structures built by backend team. 
                      </p>
                  </div>
              </div>
          </section>
          <section className="section projects-section">
              <h2 className="section-title"><FontAwesomeIcon icon={faArchive} />Projects</h2>
              <div className="intro">
                  <p>These projects were developed with Dicomium and Compuccino company teams.</p>
              </div>
              <div className="item"> <span className="project-title">
                 <Link target="_blank" to="https://www.mercedes-benz.de/passengercars/being-an-owner/mercedes-me.html">Mercedes</Link>
                 </span> - <span className="project-tagline">OAB service-termin</span>
                  <ul className="project-tags">
                      <li className="projects-tags-item">responsive</li>
                      <li className="projects-tags-item">html</li>
                      <li className="projects-tags-item">sass</li>
                      <li className="projects-tags-item">js</li>
                      <li className="projects-tags-item">AngularJS</li>
                  </ul>
              </div>
                <div className="item"> <span className="project-title">
                  <Link target="_blank"  to="https://edeka-christ.edeka-shops.de/" >EDEKA</Link>
                </span> - <span className="project-tagline">E-commerce</span>
                  <ul className="project-tags">
                      <li className="projects-tags-item">responsive</li>
                      <li className="projects-tags-item">html</li>
                      <li className="projects-tags-item">less</li>
                      <li className="projects-tags-item">js</li>
                      <li className="projects-tags-item">Intershop</li>
                  </ul>
              </div>
              <div className="item"> <span className="project-title">
                
                  <Link target="_blank"  to="http://iva.de/" >IVA</Link>
                
                  </span> - <span className="project-tagline">Institucional</span>
                  <ul className="project-tags">
                      <li className="projects-tags-item">responsive</li>
                      <li className="projects-tags-item">html</li>
                      <li className="projects-tags-item">sass</li>
                      <li className="projects-tags-item">js + Jquery</li>
                      <li className="projects-tags-item">sass</li>
                  </ul>
              </div>
              <div className="item"> <span className="project-title">                
                  <Link target="_blank"   to="https://smartlaw.de/"  >smartlaw</Link>
                </span> - <span className="project-tagline">Institucional</span>
                  <ul className="project-tags">
                      <li className="projects-tags-item">responsive</li>
                      <li className="projects-tags-item">html</li>
                      <li className="projects-tags-item">sass</li>
                      <li className="projects-tags-item">js + Jquery</li>
                      <li className="projects-tags-item">Drupal</li>
                      <li className="projects-tags-item">sass</li>
                  </ul>
              </div>    
          </section>
          <section className="skills-section section">
              <h2 className="section-title"><FontAwesomeIcon icon={faRocket} />Knowledge level</h2>
              <div className="skillset">
                  <div className="item">
                      <h3 className="level-title">HTML</h3>
                      <div className="level-bar">
                          <div className="level-bar-inner" data-level="100%"style={{width: '100%'}}> 100%</div>
                      </div>
                  </div>
                  <div className="item">
                      <h3 className="level-title">SASS / CSS</h3>
                      <div className="level-bar">
                          <div className="level-bar-inner" data-level="90%"style={{width: '90%'}}> 90%</div>
                      </div>
                  </div>
                  <div className="item">
                      <h3 className="level-title">Progressive enhancement</h3>
                      <div className="level-bar">
                          <div className="level-bar-inner" data-level="90%"style={{width: '90%'}}> 90%</div>
                      </div>
                  </div>
                  <div className="item">
                      <h3 className="level-title">Javascript</h3>
                      <div className="level-bar">
                          <div className="level-bar-inner" data-level="35%"style={{width: '35%'}}> 35%</div>
                      </div>
                  </div>
                  <div className="item">
                      <h3 className="level-title">React-redux</h3>
                      <div className="level-bar">
                          <div className="level-bar-inner" data-level="25%"style={{width: '25%'}}> 25%</div>
                      </div>
                  </div>
                  <div className="item">
                      <h3 className="level-title">Sketch</h3>
                      <div className="level-bar">
                          <div className="level-bar-inner" data-level="85%"style={{width: '85%'}}>  85%</div>
                      </div>
                  </div>
                  <div className="item">
                      <h3 className="level-title">zeplin.io</h3>
                      <div className="level-bar">
                          <div className="level-bar-inner" data-level="90%"style={{width: '90%'}}> 90%</div>
                      </div>
                  </div>                  
                  <div className="item">
                      <h3 className="level-title">Photoshop / Adobe XD</h3>
                      <div className="level-bar">
                          <div className="level-bar-inner" data-level="90%"style={{width: '90%'}}> 90%</div>
                      </div>
                  </div>
              </div>
          </section>
          </Cell>
          <Cell className="resume-right-col" col={4}>
            <div className="sidebar-wrapper">
                <div className="profile-container"> 
                <img
                  src="http://ricardocortes.de/resume/public/img/profile.jpg"
                  alt="avatar"
                  className="profile-img"
                />
                    <h1 className="name">Ricardo Côrtes</h1>
                    <h3 className="tagline">Front End Developer</h3>
                </div>
                <div className="contact-container container-block">
                    <ul className="list-unstyled contact-list">
                        <li className="email">
                          <FontAwesomeIcon icon={faEnvelope} />
                          contato@ricardocortes.de
                        </li>
                        <li className="linkedin"><FontAwesomeIcon icon={faLinkedin} />
                          <Link target="_blank" to="https://linkedin.com/in/cortesdev">cortesdev</Link>
                        </li>
                        <li className="github"><FontAwesomeIcon icon={faGithub} />
                          <Link target="_blank" to="http://github.com/cortesdev">cortesdev</Link>
                        </li>
                        <li className="codepen"><FontAwesomeIcon icon={faCodepen} />
                          <Link target="_blank" to="http://codepen.io/corteric">cortesdev</Link>
                        </li>
                    </ul>
                </div>
                <div className="education-container container-block">
                    <h2 className="container-block-title">Education</h2>
                    <div className="item">
                        <h4 className="degree">Highschool + Computer Hardware/Sowtware Technician</h4>
                        <h5 className="meta">Colégio Brigadeiro Newton Braga</h5>
                        <div className="time">2003 - 2005</div>
                    </div>
                    <div className="item">
                        <h4 className="degree">Bachelor Industrial Design</h4>
                        <h5 className="meta">UGF - Rio de janeiro</h5>
                        <div className="time">2012</div>
                    </div>
                    <div className="item">
                        <h4 className="degree">Front-End Development Ausbildung</h4>
                        <h5 className="meta">Caelum - Rio de Janeiro</h5>
                        <div className="time">2013</div>
                    </div>
                </div>
                <div className="languages-container container-block">
                    <h2 className="container-block-title">Languages</h2>
                    <ul className="list-unstyled interests-list">
                        <li>Portuguese <span className="lang-desc">(Native language)</span></li>
                        <li>English <span className="lang-desc">(Advanced)</span></li>
                        <li>Spanish <span className="lang-desc">(Advanced)</span></li>
                        <li>French <span className="lang-desc">(Medium)</span></li>
                        <li>German <span className="lang-desc">(Begginer)</span></li>
                    </ul>
                </div>
                <div className="interests-container container-block">
                    <h2 className="container-block-title">Hobbies</h2>
                    <ul className="list-unstyled interests-list">
                        <li>Surfing</li>
                        <li>Skateboarding</li>
                        <li>Cycling</li>
                        <li>Travelling</li>
                    </ul>
                </div> 
            </div> 
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
