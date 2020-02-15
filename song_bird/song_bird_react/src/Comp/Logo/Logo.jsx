import React from 'react';
import css from './Logo.module.css'

const Logo = () => {
    return (
        <div className={css.main}>
            <div><span>SONG</span><span>BIRD</span></div>
            <div>Score : 0</div>
        </div>
    )
}

export default Logo;