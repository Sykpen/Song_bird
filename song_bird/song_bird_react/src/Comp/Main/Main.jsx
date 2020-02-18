import React from 'react';
import css from './Main.module.css';
import birdsData from '../../birdsData';

const Main = () => {
    return (
        <div className={css.main}>
            <div className={css.img}><img className={css.imgimg} src={birdsData[0][0].image} alt='Ky-ky'></img></div>
            <div>
                <div><p>{birdsData[0][0].name}</p></div>
                <div><audio controls src={birdsData[0][0].audio}></audio></div>
            </div>
        </div>
    )
}

export default Main;