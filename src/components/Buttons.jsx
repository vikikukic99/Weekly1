import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// Styled components
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const Button = styled.button`
  margin: 0 10px;
  padding: 10px 20px;
  background-color: #845ec2;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #6b4fa1;
  }
`;

const Buttons = ({ handleResponse, undoLastAction }) => {
  return (
    <ButtonContainer>
      <Button onClick={() => handleResponse("yes")}>Yes</Button>
      <Button onClick={() => handleResponse("no")}>No</Button>
      <Button onClick={() => handleResponse("maybe")}>Maybe</Button>
      <Button onClick={undoLastAction}>
        <FontAwesomeIcon icon={faArrowLeft} /> Undo
      </Button>
    </ButtonContainer>
  );
};

export default Buttons;
