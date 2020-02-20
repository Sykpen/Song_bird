import React from 'react';
import './App.css';
import Logo from './Comp/Logo/Logo';
import Header from './Comp/Header/Header';
import Main from './Comp/Main/Main';
import Game from './Comp/Game/Game';
import Footer from './Comp/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className='main'>
        <Logo />
        <Header />
        <Main state={props.state}/>
        <Game state={props.state}/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
