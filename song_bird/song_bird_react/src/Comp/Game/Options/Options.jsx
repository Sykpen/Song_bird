import React from 'react';
import Option from './Option/Option';
import Css from './Options.module.css';

const Options = () => {
    return (
        <div className={Css.main}>
            <Option name='Орел'/>
            <Option name='Коршун'/>
            <Option name='Лунь'/>
            <Option name='Сокол'/>
            <Option name='Ястреб'/>
            <Option name='Филин'/>
        </div>
    )
}

export default Options;