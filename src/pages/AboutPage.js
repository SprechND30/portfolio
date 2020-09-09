import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

  return(
    <div>
      <Hero title={props.title} />

      <Content>
        Hi! I am a recent graduate with a Bachelor of Science degree in Computer Science and minors in Mathematics and Data Science from Grove City College. I greatly enjoy taking on challenging projects, and, as such, my most valuable experiences have been ones that force me to adapt to new circumstances, tools, or ways of thinking. I always love tackling hard problems, but more than that, I love learning new ways of approaching them.
      </Content>
    </div>
  );
}

export default AboutPage