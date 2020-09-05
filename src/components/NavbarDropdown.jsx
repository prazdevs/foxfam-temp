import React from 'react';
import {
  Menu,
  MenuButton,
  Avatar,
  Flex,
  Text,
  MenuList,
  MenuItem,
  useColorModeValue,
  Icon,
  Button,
  HStack,
} from '@chakra-ui/core';
import { FiLogIn, FiLogOut, FiChevronDown } from 'react-icons/fi';
import ColorModeSwitcher from './ColorModeSwitcher';
import { useHistory } from 'react-router-dom';

const NavbarDropdown = () => {
  const history = useHistory();

  const bgColor = useColorModeValue('gray.200', 'gray.700');
  const user = {
    name: 'Aspect of PraZ',
    photoURL: 'https://cdn.communitydragon.org/10.16.1/profile-icon/4626',
  };

  return (
    <Flex justify="center" py={{ base: 2, md: 0 }}>
      <Menu>
        <MenuButton
          rounded="full"
          p={1}
          mx={2}
          as={Button}
          rightIcon={<FiChevronDown />}
        >
          <HStack align="center">
            <Avatar size="sm" src={user.photoURL} />
            <Text fontWeight="lighter" fontsize="lg">
              {user.name}
            </Text>
          </HStack>
        </MenuButton>
        <MenuList bgColor={bgColor} border="none">
          <MenuItem>
            <ColorModeSwitcher />
          </MenuItem>
          <MenuItem>
            <Flex
              dir="row"
              align="center"
              onClick={() => history.push('login')}
            >
              <Icon as={user ? FiLogOut : FiLogIn} mr={2} />
              {user ? 'Logout' : 'Login'}
            </Flex>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default NavbarDropdown;
