// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for the mobile menu

// Styled Components
const Nav = styled.nav`
  background: #1c1c1c;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
`;

const MobileMenuIcon = styled.div`
  display: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: ${({ isOpen }) => (isOpen ? 'auto' : '0')};
    overflow: hidden;
    transition: height 0.3s ease-in-out;
    background: #1c1c1c;
    padding: ${({ isOpen }) => (isOpen ? '1rem 0' : '0')};
  }
`;

const NavItem = styled.li`
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #00bcd4;
  }
`;

// Navbar Component
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Nav>
      <Logo to="/">Lintechface</Logo>
      <MobileMenuIcon onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </MobileMenuIcon>
      <NavMenu isOpen={isMobileMenuOpen}>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/products">Products</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact">Contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/login">Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/signup">Sign Up</NavLink>
        </NavItem>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;