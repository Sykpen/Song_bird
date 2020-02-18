import React from 'react';
import Option from './Option/Option';
import Css from './Options.module.css';
import birdsData from '../../../birdsData';
import { Route } from 'react-router-dom';

const Options = () => {

    return (
        <div className={Css.main}>
            <div>
                <Option name={birdsData[0][0].name} />
                <Option name={birdsData[0][1].name} />
                <Option name={birdsData[0][2].name} />
                <Option name={birdsData[0][3].name} />
                <Option name={birdsData[0][4].name} />
                <Option name={birdsData[0][5].name} />
            </div>
            <div>
                <Option name={birdsData[1][0].name} />
                <Option name={birdsData[1][1].name} />
                <Option name={birdsData[1][2].name} />
                <Option name={birdsData[1][3].name} />
                <Option name={birdsData[1][4].name} />
                <Option name={birdsData[1][5].name} />
            </div>
            <div>
                <Option name={birdsData[2][0].name} />
                <Option name={birdsData[2][1].name} />
                <Option name={birdsData[2][2].name} />
                <Option name={birdsData[2][3].name} />
                <Option name={birdsData[2][4].name} />
                <Option name={birdsData[2][5].name} />
            </div>
            <div>
                <Option name={birdsData[3][0].name} />
                <Option name={birdsData[3][1].name} />
                <Option name={birdsData[3][2].name} />
                <Option name={birdsData[3][3].name} />
                <Option name={birdsData[3][4].name} />
                <Option name={birdsData[3][5].name} />
            </div>
            <div>
                <Option name={birdsData[3][0].name} />
                <Option name={birdsData[3][1].name} />
                <Option name={birdsData[3][2].name} />
                <Option name={birdsData[3][3].name} />
                <Option name={birdsData[3][4].name} />
                <Option name={birdsData[3][5].name} />
            </div>
            <div>
                <Option name={birdsData[4][0].name} />
                <Option name={birdsData[4][1].name} />
                <Option name={birdsData[4][2].name} />
                <Option name={birdsData[4][3].name} />
                <Option name={birdsData[4][4].name} />
                <Option name={birdsData[4][5].name} />
            </div>
            <div>
                <Option name={birdsData[5][0].name} />
                <Option name={birdsData[5][1].name} />
                <Option name={birdsData[5][2].name} />
                <Option name={birdsData[5][3].name} />
                <Option name={birdsData[5][4].name} />
                <Option name={birdsData[5][5].name} />
            </div>
        </div>
    )
}

export default Options;