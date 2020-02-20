import React from 'react';
import css from './Option.module.css'

const Option = (props) => {

    return (
        <div className={css.item}>
            {props.name} 
        </div>
    )
}

export default Option;