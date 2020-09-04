import React, { useState } from 'react';
import { Flex, Image, Box, Link, Icon, Stack } from '@chakra-ui/core';
import fox from './fox.svg';
import { FiMenu } from 'react-icons/fi';
import { useColorModeValue } from '@chakra-ui/core';
import NavbarDropdown from './NavbarDropdown';

const Header = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  const bgColor = useColorModeValue('gray.200', 'gray.700');

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
    <Flex
      as="nav"
      h="70px"
      w="full"
      maxW="3xl"
      justify="space-between"
      wrap="wrap"
      pos="fixed"
      bgColor={bgColor}
      roundedBottom={{ md: 'lg' }}
      zIndex={2}
    >
      <Image p={2} src={fox} height="full" />
      <Box
        display={{ base: 'flex', sm: 'none' }}
        alignItems="center"
        fontSize={28}
        p={2}
        onClick={handleToggle}
      >
        <Icon as={FiMenu} />
      </Box>
      <Box
        display={{ base: show ? 'block' : 'none', sm: 'flex' }}
        width={{ base: 'full', sm: 'auto' }}
        alignItems="center"
        bgColor={bgColor}
      >
        <Stack direction={{ base: 'column', sm: 'row' }} align="center">
          {links.map(({ label, to }) => (
            <Link fontSize="lg" key={to} to={to}>
              {label}
            </Link>
          ))}
        </Stack>
        <NavbarDropdown />
      </Box>
    </Flex>
  );
};

export default Header;
