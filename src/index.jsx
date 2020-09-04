import 'typeface-quicksand';

import { ChakraProvider } from '@chakra-ui/core';
import theme from './theme';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={theme} >
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
