import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px;
  color: #00c9a7;
  font-size: 18px;
`;

function SelectedNames({ selectedNames = [] }) {
  return (
    <Container>
      <h3>Selected Names:</h3>
      {selectedNames.length > 0 ? (
        selectedNames.join(", ")
      ) : (
        <p>No names selected yet.</p>
      )}
    </Container>
  );
}

export default SelectedNames;
