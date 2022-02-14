import React from 'react';
import './index.css';
import './App.css';
import PreHeader from './components/header/assets/PreHeader';
import Header from './components/header/assets/Header';


function App() {
  return (
    <div className='app-wrapper'>
      <PreHeader />   
      <Header />  
      <header className='content'>    
      </header>
    </div>
  );
}

export default App;
