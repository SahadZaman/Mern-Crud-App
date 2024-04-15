import { AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
  background: #111111;
  margin: 0; /* Added margin: 0 */
`;

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  color: inherit;
  text-decoration: none; /* Fix: Corrected the property name */
`;

const Navbar = () => {
  return (
    <Header position='static'>
      <Toolbar>
        <Tabs to="/">Code for Interview</Tabs> {/* Fix: Added proper string path */}
        <Tabs to='/all'>All Users</Tabs> {/* Fix: Added proper string path */}
        <Tabs to='/add'>Add User</Tabs> {/* Fix: Added proper string path */}
      </Toolbar>
    </Header>
  );
};

export default Navbar;