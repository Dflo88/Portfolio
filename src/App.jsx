import React, { Component } from 'react';
import ProjectComp from './ProjectComp'

class App extends Component {
    constructor(props){
        super(props);
    };

    render() {
        return(
            <div>
                <div className='header'>
                    <div id='nameHeader'>Diego Flores</div>
                    <div id='titleHeader'>Full Stack Developer</div>
                </div>
                <div className='aboutMeSection'>
                    <div className='sectionHeader'>About</div>
                    <div>I am an energetic professional who enjoys learning how the world around us works. 
                        In my previous roles I had the opportunity to be analytical and look for clues in 
                        data to make sense of results that initially appear counter intuitive. I have always 
                        considered myself a technical person and decided to pursue a career in coding when I 
                        realized I could work on solving problems every day! I find myself driven by troubleshooting 
                        and the programming cycle of getting stuck, learning something new, and pushing on to the next 
                        road block.
                        I'm happily married to my high school sweetheart and we have two young boys. Currently my free time is spent making memories with my family and traveling locally.
                        I would like to work for a company that values team work and provides a positive environment for growth.</div>
                </div>
                <ProjectComp/>
                <ProjectComp/>
            </div>
        );
    };
};
export default App;