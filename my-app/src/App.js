import React from 'react';
import './App.css';
import ProfilePicture from './ProfilePicture';
import SlidePanel from './SlidePanel';

class App extends React.Component {
  state = {
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
        <ProfilePicture currentDevId={this.state.currentDevId}/>
        <SlidePanel handlePrevButton={this.handlePrevButton} handleNextButton={this.handleNextButton}/>
      </div>
    );
  }
}

export default App;
