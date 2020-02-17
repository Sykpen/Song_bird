import React from 'react'
import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.birdName}>
            <div className={css.birdName_item}>Разминка</div>
            <div className={css.birdName_item}>Воробьиные</div>
            <div className={css.birdName_item}>Лесные птицы</div>
            <div className={css.birdName_item}>Певчие птицы</div>
            <div className={css.birdName_item}>Хищные птицы</div>
            <div className={css.birdName_item}>Морские птицы</div>
        </div>
    )
}

export default Header;