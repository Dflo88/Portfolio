import React from 'react';

function ProjectComp(props) {
  
  return (
    <div className='projectContainer'>
        <div className='projectCardStyle'></div>
        <div className='projectImageBox'>
            <img className='projectImage'src={props.image} height='120' width='200' alt='project photo' />
        </div>
        <div className='projectCard'>
            <div className='projectTitle'>Project Title</div>
            <div className='projectBuildTools'> Comp1 and Comp2</div>
            <div className='projectDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <div className='projectLinksContainer'>
                <a className='projectLinks' href='https://www.github.com' target='_blank'>Github</a>
                <br/>
                <a className='projectLinks' href='https://www.google.com' target='_blank'>View Live</a>
            </div>
        </div>
    </div>
  )
}
export default ProjectComp;