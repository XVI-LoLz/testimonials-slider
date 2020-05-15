import React from 'react';
import John from './images/image-john.jpg';
import Tanya from './images/image-tanya.jpg'

const devs = {
  dev1: {
    name: 'John Tarkpor',
    quote: `If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.`,
    job: 'Junior Front-end Developer',
    picture: John,
    description: 'A photo of John, a Junior Front-end Dev'
  },
  dev2: {
    name: 'Tanya Sinclair',
    quote: `I've been interested in coding fo a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.`,
    job: 'UX Engineer',
    picture: Tanya,
    description: 'A photo of Tanya, a UX Engineer'
  }
}

const ProfilePicture = (props) => {
    const currentDevIndex = props.currentDevId - 1;
    console.log(currentDevIndex);
    return(
      <>
        <img src={Object.values(devs)[currentDevIndex].picture} alt={Object.values(devs)[currentDevIndex].description}/>
    <p><em>{Object.values(devs)[currentDevIndex].quote}</em></p>
    <p><strong>{Object.values(devs)[currentDevIndex].name}</strong></p>
    <p>{Object.values(devs)[currentDevIndex].job}</p>
      </>
    );
}

export default ProfilePicture;