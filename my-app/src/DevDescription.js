import React from 'react';

const DevDescription = (props) => {
  const devs = {...props.devs};
  const currentDevIndex = props.currentDevId - 1;
  return(
    <div className='dev-description'>
    <p className='profile-quote'>"{Object.values(devs)[currentDevIndex].quote}"</p>
    <p className='profile-name'><strong>{Object.values(devs)[currentDevIndex].name}</strong></p>
    <p className='profile-position'>{Object.values(devs)[currentDevIndex].position}</p>
    </div>
  );
}

export default DevDescription;