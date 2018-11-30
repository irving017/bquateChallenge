import React, { Component } from 'react';
import Routes from './Router'
import SearchContainer from './components/search/SearchContainer'

class App extends Component {
 

  render() {
    return (
      <div>
        <Routes/>
      </div>
    );
  }
}

export default App;
