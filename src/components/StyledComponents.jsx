import styled, { keyframes } from 'styled-components';

// Keyframe animation for the title
export const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(-20px); }
  50% { opacity: 0.5; }
  100% { opacity: 1; transform: translateY(0); }
`;

// Styling for the main container
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: #fbeaff;
  color: #333;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  scroll-behavior: smooth;
`;

// Styling for the selection section
export const SelectionContainer = styled.div`
  padding: 50px 20px;
  background-color: #fbeaff;
  width: 100%;
`;

// Styling for the button container
export const ButtonContainer = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: center;
`;

// Styling for the reset button
export const ResetButton = styled.button`
  margin-top: 30px;
  padding: 10px 20px;
  font-size: 16px;
  color: #ffffff;
  background-color: #00c9a7;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #007f73;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }
`;
