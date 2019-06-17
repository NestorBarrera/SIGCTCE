
import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Router from './Router';
class App extends Component {
  render(){
  return (
    <div>
      <Header/>
      <Router/>
      <Footer/>
    </div>
  );
  }
}

export default App;
