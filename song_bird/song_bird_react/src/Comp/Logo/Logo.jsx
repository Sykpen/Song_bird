import React from 'react';
import css from './Logo.module.css';
import logo from '../../images/logoBird.png'

const Logo = () => {
    return (
        <div className={css.main}>
            <div><img className={css.img} src={logo} alt='Voron'></img></div>
            <div className={css.score}>Score : 11</div>
        </div>
    )
}

export default Logo;