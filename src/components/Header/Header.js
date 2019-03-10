import React from 'react';

import rvLogo from '../../assets/RV-logo.svg'

import {
  HeaderContainer,
  List,
  Item,
  LogoLink
} from './styles'

const MenuItems = ['Model R', 'Model IQ', 'Model Mobi', 'Model Charlie', 'Model Italy']

const Header = () => {
  return (
    <HeaderContainer>
      <LogoLink src={rvLogo} to="/" />
      <List>
        {MenuItems.map((MenuItem, index) => (
          <Item key={index} active={index === 0}>{MenuItem}</Item>
        ))}
      </List>
    </HeaderContainer>
  );
}

export default Header;
