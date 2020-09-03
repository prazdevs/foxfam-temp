import React from 'react';
import { Box, Grid, Container } from '@chakra-ui/core';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import TestComponent from './TestComponent';
import Header from './Header';

function App() {
  return (
    <Box textAlign="center" fontSize="xl">
      <Container maxW="xl">
        <Header />
      </Container>
    </Box>
  );
}

export default App;
