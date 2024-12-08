import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NameContainer = styled(motion.div)`
  margin: 20px;
  font-size: 36px;
  font-weight: bold;
  color: #fbeaff;
  background-color: #845ec2;
  padding: 20px 40px;
  border-radius: 20px;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1);
`;

const NameDisplay = ({ name }) => {
  return (
    <NameContainer
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      {name}
    </NameContainer>
  );
};

export default NameDisplay;
