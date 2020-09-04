import React from 'react';
import { Container, Flex } from '@chakra-ui/core';

import Navbar from './Navbar';
import {ColorModeSwitcher} from './ColorModeSwitcher';

function App() {
  return (
    <Container centerContent>
      <Navbar />
      <Flex mt="70px">
        <ColorModeSwitcher />
      </Flex>
    </Container>
  );
}

export default App;
