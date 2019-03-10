import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Logo = styled.img`
  margin: 20px;
`
export const LogoLink = ({ src, ...props }) => (
  <Link {...props}>
    <Logo src={src} alt="Logo" />
  </Link>
);

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 80px;
  flex-grow: 1;
  @media (max-width: 480px) {
    margin: 0px;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 20px 0;
  overflow-x: scroll;
`;

export const Item = styled.li`
  color: #0F1C2D;
  border-bottom: ${props => props.active ? `2px solid #AB1725` : ''}
  font-size: 16px;
  font-weight: 500;
  margin: 0 32px;
  flex-shrink: 0;
  opacity: ${props => props.active ? `1` : '0.57'}
  cursor: pointer;
`;
