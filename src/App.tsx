import * as React from 'react';
import MainStack from './navigation/MainStack';
import axios from 'axios';

// axios config 
axios.defaults.baseURL = 'https://api.coinlore.net/api/';
const App = () => {
  return (
    <MainStack/>
  );
};

export default App;