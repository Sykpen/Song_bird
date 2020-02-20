import React from 'react'
import css from './Header.module.css';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div className={css.birdName}>
            <div className={css.birdName_item}>
                <NavLink to='/Header/1'> Разминка</NavLink>
            </div>
            <div className={css.birdName_item}>
                <NavLink to='/Header/2'> Воробьиные</NavLink>
            </div>
            <div className={css.birdName_item}>
                <NavLink to='/Header/3'> Лесные птицы</NavLink>
            </div>
            <div className={css.birdName_item}>
                <NavLink to='/Header/4'> Певчие птицы</NavLink>
            </div>
            <div className={css.birdName_item}>
                <NavLink to='/Header/5'> Хищные птицы</NavLink>
            </div>
            <div className={css.birdName_item}>
                <NavLink to='/Header/6'> Морские птицы</NavLink>
            </div>
        </div>
    )
}
// const Header = () => {
//     return (
//         <div className={css.birdName}>
//             <div className={`${css.birdName_item} ${css.active}`}>
//                 Разминка
//             </div>
//             <div className={css.birdName_item}>
//                 Воробьиные
//             </div>
//             <div className={css.birdName_item}>
//                 Лесные птицы
//             </div>
//             <div className={css.birdName_item}>
//                 Певчие птицы
//             </div>
//             <div className={css.birdName_item}>
//                 Хищные птицы
//             </div>
//             <div className={css.birdName_item}>
//                 Морские птицы
//             </div>
//         </div>
//     )
// }

export default Header;