import React, { Component } from 'react';
import { Search, Results } from 'translator';
import { Box, Divider } from 'rebass';

class App extends Component {
  render() {
    return (
      <Box p={3} >
        <Search />
        <Divider />
        <Results />
      </Box>
    );
  }
}

export default App;
