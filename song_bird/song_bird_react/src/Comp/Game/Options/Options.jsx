import React from 'react';
import Option from './Option/Option';
import Css from './Options.module.css';
import birdsData from '../../../birdsData';
import { Route } from 'react-router-dom';


let warmup = birdsData[0];
let birdswarmup = warmup
    .map(birdName => { return <Option name={birdName.name} /> });

const Warmup = () => {

    return (
        <div>
            {birdswarmup}
        </div>
    )
}

let firstGroup = birdsData[1];

let birdsfirstGroup = firstGroup
    .map(birdName => { return <Option name={birdName.name} /> });

const FirstGroup = () => {

    return (
        <div>
            {birdsfirstGroup}
        </div>
    )
}

let secondGroup = birdsData[2];

let birdssecondGroup = secondGroup
    .map(birdName => { return <Option name={birdName.name} /> });

const SecondGroup = () => {

    return (
        <div>
            {birdssecondGroup}
        </div>
    )
}

let thirdGroup = birdsData[3];

let birdsthirdGroup = thirdGroup
    .map(birdName => { return <Option name={birdName.name} /> });

const ThirdGroup = () => {

    return (
        <div className={Css.main}>
            {birdsthirdGroup}
        </div>
    )
}

let fourthGroup = birdsData[4];

let birdsfourthGroup = fourthGroup
    .map(birdName => { return <Option name={birdName.name} /> });
const FourthGroup = () => {

    return (
        <div className={Css.main}>
            {birdsfourthGroup}
        </div>
    )
}

let fifthGroup = birdsData[5];

let birdsfifthGroup = fifthGroup
    .map(birdName => { return <Option name={birdName.name} /> });

const FifthGroup = () => {

    return (
        <div className={Css.main}>
            {birdsfifthGroup}
        </div>
    )
}

const Options = () => {

    return (
        <div className={Css.main}>
            <Route path='/Header/1' component={Warmup}></Route>
            <Route path='/Header/2' component={FirstGroup}></Route>
            <Route path='/Header/3' component={SecondGroup}></Route>
            <Route path='/Header/4' component={ThirdGroup}></Route>
            <Route path='/Header/5' component={FourthGroup}></Route>
            <Route path='/Header/6' component={FifthGroup}></Route>
        </div>
    )
}

export default Options;