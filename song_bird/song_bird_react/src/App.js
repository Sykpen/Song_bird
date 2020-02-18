import React from 'react';
import './App.css';
import Logo  from './Comp/Logo/Logo';
import Header  from './Comp/Header/Header';
import Main  from './Comp/Main/Main';
import Game from './Comp/Game/Game';
import Footer from './Comp/Footer/Footer';

function App() {
  return (
    <div className='Main'>
      <Logo />
      <Header />
      <Main />
      <Game />
      <Footer />
    </div>
  );
}

export default App;
