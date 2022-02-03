import './App.css';
import Nav from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/projects" render={() => <Projects />} />
      </Switch >
      <Footer />
    </div>

  )
}

export default App;