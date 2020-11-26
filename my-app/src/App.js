import './App.css';
import games from "./games.json";
import GamePlayer from './components/GamePlayer/index.js';
import { Component } from 'react';

class App extends Component {
  
  state = {
    games: []
  }

  render() {
    return (
      <div className='app-cont'>
          <div>
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
        <p>Then ---></p>
        <GamePlayer
          id={games[4].id}
          title={games[4].title}
          imbedLink={games[4].imbedLink}
          height={games[4].height}
          width={games[4].width}
          scrolling={games[4].scrolling}
          />
          <div>
            <p>Return to choices</p>
          <button>Back</button>
          </div>
      </div>
    );
  }
}

export default App;
