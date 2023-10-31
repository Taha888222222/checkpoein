
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: "John Wick",
        bio: "A feared hitman.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Reuni%C3%A3o_com_o_ator_norte-americano_Keanu_Reeves_%2846806576944%29_%28cropped%29.jpg/360px-Reuni%C3%A3o_com_o_ator_norte-americano_Keanu_Reeves_%2846806576944%29_%28cropped%29.jpg",
        profession: "Assassin"
      },
      shows: false,
      lastMountedTime: null,
      timer: 0, // Initialize the timer
    };
  }

  toggleShows = () => {
    if (this.state.shows) {
      this.stopTimer(); // Stop the timer when hiding the profile
      this.setState({
        timer: 0, // Reset the timer to 0
        lastMountedTime: null, // Reset the last mounted time to null
      });
    } else {
      this.startTimer(); // Start the timer when showing the profile
      this.updateMountedTime(); // Update the last mounted time when showing the profile
    }
  
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };
  
  componentDidMount() {
    this.updateMountedTime();
  }

  updateMountedTime() {
    this.setState({ lastMountedTime: new Date() });
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      this.setState((prevState) => ({
        timer: prevState.timer + 1,
      }));
    }, 1000); // Update the timer every second
  }

  stopTimer() {
    clearInterval(this.timerInterval); // Clear the timer interval when hiding the profile
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, lastMountedTime, timer } = this.state;

    return (
      <div>
        <button onClick={this.toggleShows}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && (
          <div>
            <div>
              <img src={imgSrc} alt={fullName} />
            </div>
            <div className='pl'>
              <h1><u>{fullName}</u></h1>
              <p>{profession}</p>
              <p>{bio}</p>
              
            </div>
          </div>
        )}
        {lastMountedTime && (
          <p className='hp'>
            Component mounted {Math.floor((Date.now() - lastMountedTime) / 1000)} seconds ago.
          </p>
        )}
      </div>
    );
  }
}

export default App;
