import React from 'react';
import UiTracker from './components/UiTracker';

import logo from './logo.svg';
import './App.css';

export class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Body Metrics Tracker</p>
        <UiTracker />
        
      </div>
    )
  };
}

export default App;
