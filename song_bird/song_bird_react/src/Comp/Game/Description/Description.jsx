import React from 'react';
import Css from './Description.module.css';
import Main from '../../Main/Main'

const Description = (props) => {
    return (
        <div>
            <Main className={Css.main} />
            <p>Бла-бла-бла</p>
        </div>

    )
}

export default Description;