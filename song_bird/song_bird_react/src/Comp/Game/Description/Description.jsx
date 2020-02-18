import React from 'react';
import Css from './Description.module.css';
import Main from '../../Main/Main';
import birdsData from '../../../birdsData'

const Description = (props) => {
    return (
        <div>
            <Main className={Css.main} />
            <p>{birdsData[0][0].description}</p>
        </div>

    )
}

export default Description;