import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px;
  color: #f87272;
  font-size: 18px;
`;

function RejectedNames({ rejectedNames = [] }) {
  return (
    <Container>
      <h3>Rejected Names:</h3>
      {rejectedNames.length > 0 ? (
        rejectedNames.join(", ")
      ) : (
        <p>No names rejected yet.</p>
      )}
    </Container>
  );
}

export default RejectedNames;
