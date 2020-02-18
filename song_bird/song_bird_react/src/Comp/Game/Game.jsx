import React from 'react';
import Options from './Options/Options';
import Description from './Description/Description';
import Css from './Game.module.css';

const Game = () => {
    return (
        <div className={Css.main}>
            <Options />
            <Description />
        </div>
    )
}

export default Game;