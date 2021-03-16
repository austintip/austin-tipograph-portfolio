import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './component/Home'
import About from './component/About'
import Projects from './component/Projects'
import Header from './component/partials/Header'
import dogspot from './dogspot.png'
import pokemon_catch from './pokemon_catch.png'

class App extends Component {
  render(){

    return (
      <Router>
        <Header />
        <main className="App">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" render={() =>
          <Projects 
          dogspot={dogspot} 
          pokemon_catch={pokemon_catch}
          /> } />
        </main>
      </Router>
    );
  }
}

export default App;
