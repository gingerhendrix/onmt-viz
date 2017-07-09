import React, { Component } from 'react';
import { Search, Results } from 'translator';

class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <hr />
        <Results />
      </div>
    );
  }
}

export default App;
