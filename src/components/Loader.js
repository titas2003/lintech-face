// src/components/Loader.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for the spinner animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled Components
const Spinner = styled.div`
  border: 4px solid #f3f3f3; // Light grey
  border-top: 4px solid #00bcd4; // Blue
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  margin: 20px auto;
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

// Loader Component
const Loader = () => {
  return (
    <LoaderContainer>
      <Spinner />
    </LoaderContainer>
  );
};

export default Loader;