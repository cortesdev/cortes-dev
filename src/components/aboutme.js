import React, { Component } from 'react';
import { Content } from 'react-mdl';


class AboutMe extends Component {
  render() {
    return(

      <Content>
        <div className="page-content" >
            <div class="col-lg-6 u-my-auto">
              <div class="about__block"><h2 class="heading-primary about__title">About</h2>
                <p class="paragraph about__description">Enthusiastic and highly capable Frontend Developer with teamwork experience. Berlin Based Frontend web Developer &amp; UX UI Designer, focused in crafting clean and funcional Web Design/Code.</p>
                <p class="paragraph about__description">Looking for an Frontend Developer position that gives a scope to enhance my knowledge and utilizing my skills towards the growth of the organization.</p>
             </div>
          </div>
        </div>     
      </Content>
       
    )
  }
}

export default AboutMe;
