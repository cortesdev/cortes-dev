import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import './App.css';

import { BrowserRouter, Route, NavLink } from 'react-router-dom'

import Main from './components/main';
import { Link } from 'react-router-dom';
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from './images/logo.png';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">
          <img src={logo} className="app-logo" alt="logo" />
        </Link>} scroll>
            <Navigation>
                <Link to="/resume" relation="stylesheet">Resume</Link>
                <Link to="/about" relation="stylesheet">About Me</Link>
                <Link to="/projects" relation="stylesheet">Projects</Link>
                <Link to="/contact" relation="stylesheet">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Cørtes</Link>}>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/about">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
