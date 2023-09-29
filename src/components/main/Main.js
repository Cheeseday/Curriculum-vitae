import React from "react";
import './main.scss';
import { Experience } from "../experience/Experience";
import { About } from "../about/About";
import { Block } from "../block/Block";

export const Main = (props) => {

  const about = {
    name: 'About',
    summary: 'My name Aleś and I experienced Web Developer adept in all stages of advanced web development. Knowledgeable in user interface, testing, and debugging processes. Bringing forth expertise in design, installation, testing and maintenance of web systems. Able to effectively self-manage during independent projects, as well as collaborate in a team setting. Experienced with the latest cutting edge development tools and procedures. Eager to join a new team of people, and assist them as a dedicated and passionate developer.',
  }

  return (
    <main className="main">
        <div className="head">
            <h1 className="name">{props.name}</h1>
            <p>{props.position}</p>
        </div>
        <About about={about}/>
        <Experience name='Education' 
                    position='Belarusian State University of Informatics and Radioelectronics (BSUIR)' 
                    company='Bachelor of Science in Systems Engineering' 
                    about='Specialty: "Artificial Intelligence"'
                    start='Sep 2019'
                    end='Jun 2023'
                    location='Minsk'
        />
        <Experience name='Courses' 
                    position='JavaScript Developer' 
                    company='The Rolling Scopes School' 
                    about='Fixed the theoretical foundations of the Core JS, TS, NodeJS, REST and decided various practical tasks on that like "Pets Shelter", "Minesweeper", "Virtual Keyboard", etc.'
                    start='Feb 2023'
                    end='Aug 2023'
        />
        <Experience name='Internships' 
                    position='Front end Developer'
                    company='Process Agency'
                    about='Implemented modern interactive front end of the online store'
                    start='Mar 2023'
                    end='May 2023'
                    location='Minsk'
        />
        <Block name='Projects'/>
    </main>
  )
}