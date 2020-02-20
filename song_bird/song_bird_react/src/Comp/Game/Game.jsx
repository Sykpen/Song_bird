import React from 'react';
import Options from './Options/Options';
import Description from './Description/Description';
import Css from './Game.module.css';

const Game = (props) => {
    return (
        <div className={Css.main}>
            <Options state={props.state}/>
            <Description state={props.state}/>
        </div>
    )
}

export default Game;