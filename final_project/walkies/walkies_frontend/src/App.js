import React from 'react';
import './App.css';
import WalkiesHome from './components/WalkiesHome';
import {
  Route,
  Switch
} from 'react-router-dom';
import DogButtons from './components/DogButtons';

function App() {
  return (
    <div className="App">
      <h1>Walkies</h1>
      <Switch>
        <Route exact path="/" component={WalkiesHome}/>
        <Route exact path="/DogButtons" component={DogButtons}/>
      </Switch>
    </div>
  );
}

export default App;
