import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Careers = () => {
  return (
    <Box p={5}>
      <Heading as="h1">Careers</Heading>
      <Text>At PaySorce, we are always looking for talented individuals to join our team. If you are passionate about payroll and HR solutions, we would love to hear from you.</Text>
      <Box mt={4}>
        <Heading as="h2" size="lg">
          Current Openings
        </Heading>
        <Text>Check back soon for job openings.</Text>
      </Box>
    </Box>
  );
};

export default Careers;
