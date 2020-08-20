import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import Banner from './Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div className="Main ">
        <Nav></Nav>
        <Banner></Banner>
        <Footer></Footer>
        
           
      
        
      </div>
    );
  }
}

export default Main;