import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './components/pages/HomePage/Home'
import Content from './components/pages/Products/Contents'
import Login from './components/pages/Form/Login'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/'exact component={Home}/>
          <Route path='/products' exact component={Content}/>
          <Route path='/sign-up'exact component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
