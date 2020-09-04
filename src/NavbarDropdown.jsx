import React from 'react';
import { Menu, MenuButton, Avatar, Flex, Text } from '@chakra-ui/core';

const NavbarDropdown = () => {
  return (
    <Menu>
      <MenuButton>
        <Flex dir="row">
          <Avatar src="https://cdn.communitydragon.org/10.16.1/champion/generic/square" />
          <Flex maxW="200px" direction="column" ml={2}>
            <Text isTruncated>Not connected</Text>
          </Flex>
        </Flex>
      </MenuButton>
    </Menu>
  );
};

export default NavbarDropdown;
