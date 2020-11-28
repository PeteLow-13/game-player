import './App.css';
import games from "./games.json";
import GamePlayer from './components/GamePlayer/index.js';
import React, { Component } from 'react';
import Test from './components/Test';
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gameList: []
    }
  }

  changeState = (gameList) => {
    this.setState({
      gameList: [...gameList]
    })
  }
  componentDidMount() {

    let gameList = games;
    // console.log(gameList)
    this.changeState(gameList);

  }

  render() {
    return (
      <div className='app-cont'>
          <Test gameList={this.state.gameList}/>
          {/* <div>
            <button value='games.fun' id='fun'>Fun</button>
            <button value='games.education' id='education'>Education</button>
            <button value='games.animals' id='animals'>Animals</button>
            <button value='games.math' id='math'>Math</button>
        </div>
        <p>Then ---> </p>
        <div>
            <button>For each game under the category</button>
            <button>For each game under the category</button>
            <button>For each game under the category</button>
            <button>For each game under the category</button>
        </div>
        <p>Then ---></p> */}
        {/* <GamePlayer
          id={games[4].id}
          title={games[4].title}
          imbedLink={games[4].imbedLink}
          height={games[4].height}
          width={games[4].width}
          scrolling={games[4].scrolling}
          /> */}
          {/* <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/9hb_0TZ_MVI"
            frameborder="0"
            allow="accelerometer;
            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          /> */}

          <div>
            <p>Return to choices</p>
          {/* <button>Back</button> */}
          </div>
      </div>
    );
  }
}

export default App;
