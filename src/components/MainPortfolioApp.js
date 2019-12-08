import React, { Component } from 'react';
import CardList from './CardList';
import { cardsData } from './CardsData.js';
import SearchBox from './SearchBox';
import './MainPortfolioApp.css';
import Fade from 'react-reveal/Fade';
import Footer from './Footer';


class MainPortfolioApp extends Component {
    constructor (){
        super()
        this.state = {
            cardsData: cardsData,
            searchField: ''
        }
    }
    onSearchChange = (event) => {
      this.setState({ searchField: event.target.value })
    }

    render() {
      const filteredPortfolioCards = this.state.cardsData.filter(cardsData => {
            return cardsData.tags.toLowerCase().includes(this.state.searchField.toLowerCase());
           })
      return (
            <div>
              <div className='center'>
                <h1>Projects</h1>
                <p>Looking for something specific?</p>
                <SearchBox searchChange={this.onSearchChange}/>
                <Fade bottom>
                <CardList className="cardListContainer" cardsData={ filteredPortfolioCards }/>
                </Fade> 
              </div>
              <Footer />
            </div>
      );
}
}
export default MainPortfolioApp;