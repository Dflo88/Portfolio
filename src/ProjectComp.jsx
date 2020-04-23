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
            <div className='projectLinks'>Github</div>
            <div className='projectLinks'>View Live</div>
        </div>
    </div>
  )
}
export default ProjectComp;