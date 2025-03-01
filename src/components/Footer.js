// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styled Components
const FooterContainer = styled.footer`
  background: #1c1c1c;
  color: #fff;
  padding: 2rem;
  text-align: center;
`;

const FooterLinks = styled.div`
  margin-bottom: 1rem;
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #00bcd4;
  }
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  margin: 0;
`;

// Footer Component
const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink to="/about">About</FooterLink>
        <FooterLink to="/contact">Contact</FooterLink>
        <FooterLink to="/privacy">Privacy Policy</FooterLink>
      </FooterLinks>
      <FooterText>&copy; {new Date().getFullYear()} Lintechface. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;