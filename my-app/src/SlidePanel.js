import React from 'react';
import PrevIcon from './images/icon-prev.svg';
import NextIcon from './images/icon-next.svg';

const SlidePanel = (props) => {
  return(
    <>
      <button onClick={() => props.handlePrevButton()}>
        <img src={PrevIcon} alt='Go to previous'/>
      </button>

      <button onClick={() => props.handleNextButton()}>
        <img src={NextIcon} alt='Go to next'/>
      </button>
    </>
  );
}

export default SlidePanel;