import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import Popular from "./pages/Popular"
import Support from "./pages/Support"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/popular" component={Popular} />
          <Route path="/support" component={Support} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;