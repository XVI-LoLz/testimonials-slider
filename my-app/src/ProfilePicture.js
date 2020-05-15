import React from 'react';

const ProfilePicture = (props) => {
    const devs = {...props.devs};
    const currentDevIndex = props.currentDevId - 1;
    return(
      <>
        <img 
          className='profile-picture' 
          src={Object.values(devs)[currentDevIndex].picture} 
          alt={Object.values(devs)[currentDevIndex].description}
        />
      </>
    );
}

export default ProfilePicture;