import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBFwuVy4vjH1usdgvfqDxQNcoYaI8j_6l8';

const App = () => {
  return <div>
    Hi!
    <SearchBar />
  </div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));