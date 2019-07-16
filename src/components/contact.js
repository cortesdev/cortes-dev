import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <Grid className="landing-grid">
        <Cell col={12}>

          <div className="contact-body">
            <Grid className="contact-grid">
              <Cell col={6}>
                <h2>Ricardo Cortes</h2>
                <img 
                  className="profile-img"
                  src="http://ricardocortes.de/resume/public/img/profile.jpg"
                  alt="avatar"       
                  />
                <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Berlin Based Frontend web Developer &amp; UX UI Designer, focused in crafting clean and funcional Web Design/Code.</p>

              </Cell>
              <Cell col={6}>
                <h2>Contact Me</h2>
                <hr/>

                <div className="contact-list">
                  <List>
                    <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        <i className="fa fa-phone-square" aria-hidden="true"/>
                        +49 157 56565257
                      </ListItemContent>
                    </ListItem>

                    <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        <i className="fa fa-fax" aria-hidden="true"/>
                        +49 157 56565257
                      </ListItemContent>
                    </ListItem>

                    <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        <i className="fa fa-envelope" aria-hidden="true"/>
                        contact[at]cortes.dev
                      </ListItemContent>
                    </ListItem>

                    <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        <i className="fa fa-skype" aria-hidden="true"/>
                        cortesdev
                      </ListItemContent>
                    </ListItem>


                  </List>
                </div>
              </Cell>
            </Grid>
          </div>
         </Cell>
      </Grid>
    )
  }
}

export default Contact;
