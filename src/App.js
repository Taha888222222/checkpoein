
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: "jhon wick",
        bio: "un tueur à gage craint.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Reuni%C3%A3o_com_o_ator_norte-americano_Keanu_Reeves_%2846806576944%29_%28cropped%29.jpg/360px-Reuni%C3%A3o_com_o_ator_norte-americano_Keanu_Reeves_%2846806576944%29_%28cropped%29.jpg",
        profession: "les armes"
      },
      shows: false,
      lastMountedTime: null,
    };
  }

  toggleShows = () => {
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

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, lastMountedTime } = this.state;

    return (
      <div>
        <button onClick={this.toggleShows}>affichage</button>
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

