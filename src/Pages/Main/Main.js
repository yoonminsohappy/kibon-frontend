import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import Banner from './Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import MainContent from './MainContent/MainContent';
import MainVod from './MainVod/MainVod';
import NewMenuContent from './NewMenuContent/NewMenuContent';
import MainVision from './MainVision/MainVision';
import './Main.scss';
import MainNews from './MainNews/MainNews';
import '../../Styles/common.scss';

class Main extends Component {
  state={
  
  }

  render() {

    return (
      <div className="Main">
        <Nav />
        <Banner />
        <div className="mainContentContainer">
          <h2 className="mainContentTitle">
            <span>life Style</span>
            <p>본과 함께하는 일상</p>
          </h2>
          <div style={{ marginTop: "-110px" }}></div>
          <MainContent />
        </div>
        <MainVod />
        <NewMenuContent />
        <MainVision />
        <MainNews />
        <Footer />
      </div>
    );
  }
}

export default Main;