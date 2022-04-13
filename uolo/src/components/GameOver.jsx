import React, {useEffect} from 'react';
import './question.css'
import commonFunctions from '../CommonFunctions';

const GameOver = ({ audioOn, showExitMessageBox }) =>{

useEffect(() => {
    if(audioOn)
    {
        commonFunctions.playGameOverSound();
    }
}, [])

const handleClickReplay = () => {
    if(audioOn)
    {
        commonFunctions.playAudioToggleSound();
    }
    setTimeout(() => {
        window.location.reload(true)
    },2000)
}
return(
    <div className='game-over'>
        <div className='game-over-text'>
            Game Over
        </div>
        <img className='image' src='/images/crying.gif'/>
        <div className='buttons'>
            <button className='game-button retry' onClick={handleClickReplay}>Replay</button>
            <button className='game-button exit' onClick={showExitMessageBox}>Exit</button>
        </div>

    </div>
)
}

export default GameOver;
