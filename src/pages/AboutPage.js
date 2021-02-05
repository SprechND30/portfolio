import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

  return(
    <div>
      <Hero title={props.title} />

      <Content>
        <p>
          Hi! I am a recent graduate with a degree in Computer Science from Grove City College, with minors in Mathematics and Data Science. I work well both collaboratively and independently, on projects that span from open-ended to well-defined. I always love tackling hard problems, but more than that, I love learning new ways of approaching them.  
        </p>
        <p>
          Last year, my senior project gave me the chance to participate in a software development lifecycle with well-defined start and end-points, all while working alongside other highly-motivated individuals. However, I am also comfortable with ambiguous tasks. During my undergraduate studies, I was part of a cross-disciplinary team on a computer vision independent research project. The experience allowed me to approach open-ended problems creatively from diverse perspectives, both collaboratively and independently. Finally, in the summer of 2019, I gained valuable experience working independently as an undergraduate researcher in Washington State's Smart Environments REU. The ambiguous nature of the problems required me to approach them creatively and with self-motivation. 
        </p>  
        <p>
          I love pushing my limits, whether operating by myself or with a driven team. I am capable of working on structured, self-contained tasks, or on open-ended endeavors that require out-of-the-box thinking.
        </p> 
      </Content>
    </div>
  );
}

export default AboutPage