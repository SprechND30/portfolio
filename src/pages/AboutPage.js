import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

  return(
    <div>
      <Hero title={props.title} />

      <Content>
        <p>
          Hi! I am a recent graduate with a degree in Computer Science from Grove City College, with minors in Mathematics and in Data Science. I always love tackling hard problems, but more than that, I love learning new ways of approaching them. 
        </p>
        <p>
          I work very well with other driven individuals. During my undergraduate studies, I had the chance to work on a cross-disciplinary team of undergraduate researchers on a project applying computer vision to the problem of tracking ant movement patterns. This project allowed me to creatively approach open-ended problems with lots of diverse perspectives. 
        </p>
        <p>
          On the other hand, I also work well in structured environments. During my senior year, I experienced the software development lifecycle by designing, building, and testing a web application that allows nonprofits to collect donations from demographics they otherwise struggle to reach. I greatly enjoyed the chance to gain software engineering skills that will aid me throughout my career.
        </p> 
        <p>
          Regardless of the work in front of me, I always approach it with a desire to learn more about computer science in general and the topic at hand in particular. I love learning to solve new problems, whether independently or in collaboration. 
        </p>
      </Content>
    </div>
  );
}

export default AboutPage