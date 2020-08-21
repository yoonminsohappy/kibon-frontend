import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import Banner from './Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import MainContent from './MainContent/MainContent';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div className="Main ">
        <Nav />
        <Banner />
        <h2 className="mainContentTitle">
          <span>life Style</span>
          <p>본과 함께하는 일상</p>
        </h2>
        <MainContent />
        <MainContent />
        <MainContent />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default Main;
