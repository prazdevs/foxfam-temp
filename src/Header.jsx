import React, { useState } from 'react';
import { Flex, Image, Box, Link, Icon } from '@chakra-ui/core';
import fox from './fox.svg';
import { FiMenu } from 'react-icons/fi';

const Header = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  const links = [
    {
      label: 'standings',
      to: 'standings',
    },
    {
      label: 'teams',
      to: 'teams',
    },
    {
      label: 'players',
      to: 'players',
    },
  ];

  return (
    <Flex as="nav" height="30px" justify="space-between" wrap="wrap">
      <Image src={fox} height="full" />
      <Box
        display={{ base: 'block', md: 'none' }}
        p={2}
        mr={1}
        onClick={handleToggle}
      >
        <Icon as={FiMenu} />
      </Box>
      <Box
        display={{ base: show ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
      >
        <Flex direction={{ base: 'column', md: 'row' }} align="center">
          {links.map(({ label, to }) => (
            <Link key={to} to={to} >{label}</Link>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
