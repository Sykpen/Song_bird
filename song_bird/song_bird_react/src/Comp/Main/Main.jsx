import React from 'react';
import css from './Main.module.css';

const Main = () => {
    return (
        <div className={css.main}>
            <div className={css.img}><img src='#' alt='Ky-ky'></img></div>
            <div>
                <div><p>Ястреб</p></div>
                <div><audio controls src='https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3'></audio></div>
            </div>
        </div>
    )
}

export default Main;