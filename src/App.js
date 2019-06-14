import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './views/Login';

function App() {
  return (
    <div>
      <Header/>
      <Login/>
      <Footer/>
    </div>
  );
}

export default App;
