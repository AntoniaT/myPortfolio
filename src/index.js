import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Header from './components/Header.js';
import Home from './components/Home';
import MainPortfolioApp from './components/MainPortfolioApp';
import ShowCase from './components/ShowCase';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
      <div>
          <Header />
          <Switch>
             <Route exact path="/" component={Home}/>
             <Route exact path="/portfolio" component={MainPortfolioApp} />
             <Route path="/showcase" component={ShowCase}/>
             <Route path="/about" component={About} />
             <Route path="/contact" component={Contact} />
          </Switch>
      </div>
    </BrowserRouter>, 
    document.getElementById('root')

);



