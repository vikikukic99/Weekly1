import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SelectedNames from "./components/SelectedNames";
import RejectedNames from "./components/RejectedNames";
import Buttons from "./components/Buttons";
import NameDisplay from "./components/NameDisplay";
import Fireworks from "./components/Fireworks";

// Styled components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: #fbeaff;
  color: #333;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const ResetButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #00c9a7;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #007f73;
  }
`;

const namesList = [
  "Sophia", "Jackson", "Olivia", "Liam", "Emma",
  "Noah", "Ava", "Lucas", "Isabella", "Oliver",
  "Mia", "Ethan", "Amelia", "Aiden", "Harper",
  "Elijah", "Evelyn", "James", "Charlotte", "Benjamin",
  "Abigail", "William", "Emily", "Alexander", "Madison",
  "Michael", "Elizabeth", "Mason", "Sofia", "Logan",
  "Avery", "Matthew", "Ella", "Daniel", "Scarlett",
  "Henry", "Grace", "Joseph", "Lily", "Samuel",
  "Chloe", "David", "Victoria", "Carter", "Riley",
  "Wyatt", "Aria", "Jayden", "Zoey", "Gabriel"
];

function NameSelector() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedNames, setSelectedNames] = useState([]);
  const [rejectedNames, setRejectedNames] = useState([]);
  const [maybeNames, setMaybeNames] = useState([]);
  const [activeNames, setActiveNames] = useState([...namesList]);
  const [lastAction, setLastAction] = useState(null);

  // Reintroduce "Maybe" names after all other names are processed
  useEffect(() => {
    if (activeNames.length === 0 && maybeNames.length > 0) {
      setActiveNames(maybeNames);
      setMaybeNames([]);
      setCurrentIndex(0);
    }
  }, [activeNames, maybeNames]);

  const handleResponse = (response, name) => {
    if (response === "yes") {
      setSelectedNames((prev) => [...prev, name]);
    } else if (response === "no") {
      setRejectedNames((prev) => [...prev, name]);
    } else if (response === "maybe") {
      setMaybeNames((prev) => [...prev, name]); // Add to "Maybe" list
    }

    // Remove name from activeNames and move to the next one
    setActiveNames((prev) => prev.filter((n) => n !== name));
    setLastAction({ response, name });
    setCurrentIndex(0);
  };

  const undoLastAction = () => {
    if (!lastAction) return;

    const { response, name } = lastAction;

    if (response === "yes") {
      setSelectedNames((prev) => prev.filter((n) => n !== name));
    } else if (response === "no") {
      setRejectedNames((prev) => prev.filter((n) => n !== name));
    } else if (response === "maybe") {
      setMaybeNames((prev) => prev.filter((n) => n !== name));
    }

    // Reintroduce the name back to the active list
    setActiveNames((prev) => [name, ...prev]);
    setLastAction(null);
  };

  const resetSelection = () => {
    setCurrentIndex(0);
    setSelectedNames([]);
    setRejectedNames([]);
    setMaybeNames([]);
    setActiveNames([...namesList]);
    setLastAction(null);
  };

  return (
    <PageContainer>
      {/* Display the current name */}
      {activeNames.length > 0 ? (
        <NameDisplay name={activeNames[currentIndex]} />
      ) : (
        <div>
          <h2>🎉 All names are processed! 🎉</h2>
          <Fireworks />
          <ResetButton onClick={resetSelection}>
            Do you want to choose the names again?
          </ResetButton>
        </div>
      )}

      {/* Buttons */}
      {activeNames.length > 0 && (
        <Buttons
          handleResponse={(response) =>
            handleResponse(response, activeNames[currentIndex])
          }
          undoLastAction={undoLastAction}
        />
      )}

      {/* Selected and Rejected Names */}
      <SelectedNames selectedNames={selectedNames} />
      <RejectedNames rejectedNames={rejectedNames} />
    </PageContainer>
  );
}

export default NameSelector;
