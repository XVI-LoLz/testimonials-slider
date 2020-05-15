import React from 'react';
import prevIcon from './images/icon-prev.svg';
import nextIcon from './images/icon-next.svg';

const SlidePanel = (props) => {
  return(
    <div className='slide-panel'>
      <button className='nav-button left' onClick={() => props.handlePrevButton()}>
        <img className='nav-icon' src={prevIcon} alt='Go to previous'/>
      </button>

      <button className='nav-button right' onClick={() => props.handleNextButton()}>
        <img className='nav-icon' src={nextIcon} alt='Go to next'/>
      </button>
    </div>
  );
}

export default SlidePanel;