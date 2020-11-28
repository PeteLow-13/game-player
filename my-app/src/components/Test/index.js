import React, {useState, useEffect} from 'react';
import GamePlayer from '../GamePlayer';
import GamePage from '../GamePage';
function Test({gameList}) {
  // console.log(gameList)
  const [loading, setLoading] = useState(true);
  const [gameArr, setGameArr] = useState([]);
  const [game, setGame] = useState({});
  const [gameChoose, setGameChoose] = useState(false);
  useEffect(() => {
    checkLoading();
  });

  useEffect(() => {
    checkLoading();
  }, [gameChoose]);


  const checkLoading = async () => {
    await setGameArr(gameList);
    await setLoading(false);
    // console.log(gameArr)
  }

  const gameChosen = async (id) => {
    await setGame(gameArr[id - 1]);
    await setGameChoose(true);
    // console.log(game)
  }

  const backToOptions = async () => {
    await setGameChoose(false);
  }

  useEffect(() => {
    console.log('re-render component');
  }, [game])
  if(loading) {
    return <h1>
      Loading
    </h1>
  }
  if(gameChoose) {
    return <GamePage game={game} backToOptions={backToOptions} gameChoose={gameChoose}/>
  }
  return (
    <div>
      {/* <button onClick={() => gameChosen(gameArr[0].id)}>
         {gameArr[0].title} Button
      </button> */}
      {
        gameArr.map(e => (
          <button onClick={() => gameChosen(e.id)} key={e.id}>
            {e.title}
          </button>
        ))
      }
    </div>
  )
}

{/* <GamePlayer
id={e.id}
title={e.title}
imbedLink={e.imbedLink}
height={e.height}
width={e.width}
scrolling={e.scrolling}
/> */}

export default Test
