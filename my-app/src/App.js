import React from 'react';
import './App.css';
import ProfilePicture from './ProfilePicture';
import SlidePanel from './SlidePanel';
import DevDescription from './DevDescription';
import profilePicJohn from './images/image-john.jpg';
import profilePicTanya from './images/image-tanya.jpg'

class App extends React.Component {
  state = {
    devs: {
      John: {
        picture: profilePicJohn,
        description: 'A photo of John, a Junior Front-end Dev',
        name: 'John Tarkpor',
        position: 'Junior Front-end Developer',
        quote: `If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.`
      },
      Tanya: {
        picture: profilePicTanya,
        description: 'A photo of Tanya, a UX Engineer',
        name: 'Tanya Sinclair',
        position: 'UX Engineer',
        quote: `I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.`,
      }
    },
    devCount: 2,
    currentDevId: 1
  }
  handleNextButton = () => {
    let updatedDevId = this.state.currentDevId;
    if (this.state.currentDevId <= this.state.devCount - 1){
      updatedDevId += 1;
    }else{
      updatedDevId = 1;
    }
    this.setState({
      currentDevId: updatedDevId
    });
    console.log(`Updated dev ID is: ${updatedDevId}`);
  }
  handlePrevButton = () => {
    let updatedDevId = this.state.currentDevId;
    if (this.state.currentDevId >= this.state.devCount){
      updatedDevId -= 1;
    }else{
      updatedDevId = this.state.devCount;
    }
    this.setState({
      currentDevId: updatedDevId
    });
    console.log(`Updated dev ID is: ${updatedDevId}`);
  }
  render(){
    return (
      <div className="App">
        <div className='App-picture-section'>
        <ProfilePicture className='App-profile-picture' devs={this.state.devs} currentDevId={this.state.currentDevId} />
        <SlidePanel handlePrevButton={this.handlePrevButton} handleNextButton={this.handleNextButton} />
        </div>
        <div className='App-description-section'>
          <DevDescription devs={this.state.devs} currentDevId={this.state.currentDevId} />
        </div>
        <div className='footer'></div>
      </div>
    );
  }
}

export default App;
