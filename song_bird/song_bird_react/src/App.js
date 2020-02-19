import React from 'react';
import './App.css';
import Logo from './Comp/Logo/Logo';
import Header from './Comp/Header/Header';
import Main from './Comp/Main/Main';
import Game from './Comp/Game/Game';
import Footer from './Comp/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className='Main'>
        <Logo />
        <Header />
        <Main />
        <Game />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
