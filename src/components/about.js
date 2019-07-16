import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import AboutMe from './aboutme'

class About extends Component {
  render() {
    return(
      <Grid className="landing-grid">
      <Cell col={12}>
        <AboutMe />
       </Cell>
      </Grid>
    )
  }
}

export default About;
