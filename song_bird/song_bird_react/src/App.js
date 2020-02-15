import React from 'react';
import './App.css';
import Logo  from './Comp/Logo/Logo'
import Header  from './Comp/Header/Header'
import Main  from './Comp/Main/Main'
import Options  from './Comp/Options/Options'
import Description from './Comp/Description/Description';
import Footer from './Comp/Footer/Footer';

function App() {
  return (
    <div className='Main'>
      <Logo />
      <Header />
      <Main />
      <Options />
      <Description />
      <Footer />
    </div>
  );
}

export default App;
