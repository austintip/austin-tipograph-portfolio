import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Contact from './component/Contact'
import About from './component/About'
import Projects from './component/Projects'
import Header from './component/partials/Header'
import Footer from './component/partials/Footer'
import dogspot from './dogspot.png'
import pokemon_catch from './pokemon_catch.png'
import austinPic from './austinPic.jpg'


const App = () => {
  return (
    <Router>
      <Header />
      <main className="App">
        <Route exact path="/" render={() =>
          <About
            austinPic={austinPic}
          />} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" render={() =>
          <Projects
            dogspot={dogspot}
            pokemon_catch={pokemon_catch}
          />} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;