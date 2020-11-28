import React, {useState, useEffect} from 'react';
import './style.css'

function GamePage({game, backToOptions, gameChoose}) {
    // console.log(game)
    const [gameObj, setGameObj] = useState();
    const [loading, setLoading] = useState(true);
    // const [back, setBack] = useState()
    useEffect(async () => {
        await setGameObj(game);
        await setLoading(false);
        console.log(gameObj)
    });
    if( loading ||!gameObj) {
      return <h1>Loading...</h1>
    }
    return (
        <div>
          <h2>Title: <span>{gameObj.title}</span></h2>
            <iframe
              className='display'
              title={gameObj.title}
              width={gameObj.width}
              height={gameObj.height}
              src={gameObj.imbedLink}
              sandbox='allow-forms allow-scripts allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-same-origin allow-top-navigation allow-top-navigation-by-user-activation allow-popups-to-escape-sandbox'
              />
            <button>save</button>
            <button onClick={backToOptions}>Back</button>
        </div>
    )
}

export default GamePage;