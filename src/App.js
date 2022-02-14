import React from 'react';
import './index.css';
import './App.css';
import PreHeader from './components/header/assets/PreHeader';
import Header from './components/header/assets/Header';
import Main from './components/main/Main';


function App() {
  return (
    <div className='app-wrapper'>
      <PreHeader />   
      <header className='content'>    
      <Header />
      <Main />
      </header>

    </div>
  );
}

export default App;
