import React from 'react';
import css from './Main.module.css';

const Main = (props) => {
    return (
        <div className={css.main}>
            <div className={css.img}><img className={css.imgimg} src='https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg' alt='Ky-ky'></img></div>
            <div className={css.audio_text}>
                <div><p className={css.text}>Ворон</p></div>
                <div><audio controls src='https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3'></audio></div>
            </div>
        </div>
    )
}

export default Main;