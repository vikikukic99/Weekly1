import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframe animation for the title
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(-20px); }
  50% { opacity: 0.5; }
  100% { opacity: 1; transform: translateY(0); }
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #845ec2;
  animation: ${fadeIn} 2s ease-in-out;
`;

const AnimatedTitle = () => {
  return <StyledTitle>Find the perfect name for your puppy</StyledTitle>;
};

export default AnimatedTitle;
