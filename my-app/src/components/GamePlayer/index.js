import React from 'react';
import './style.css'

function GamePlayer(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            {/* <iframe width="100%" height="100%" src="https://www.addictinggames.com/embed/html5-games/24594" scrolling="no"></iframe> */}
            <iframe className='display' title={props.title} width={props.width} height={props.height} src={props.imbedLink}scrolling={props.scrolling}></iframe>
            
        </div>
    )
}

export default GamePlayer;