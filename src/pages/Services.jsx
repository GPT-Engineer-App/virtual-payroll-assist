import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Services = () => {
  return (
    <Box p={5}>
      <Heading as="h1">Our Services</Heading>
      <Text>At PaySorce, we offer a range of services designed to meet your payroll and HR needs. Our services include:</Text>
      <Box mt={4}>
        <Heading as="h2" size="lg">
          Payroll Processing
        </Heading>
        <Text>Efficient and accurate payroll processing to save you time and reduce errors.</Text>
      </Box>
      <Box mt={4}>
        <Heading as="h2" size="lg">
          Tax Filing
        </Heading>
        <Text>Comprehensive tax filing services to ensure compliance and avoid penalties.</Text>
      </Box>
      <Box mt={4}>
        <Heading as="h2" size="lg">
          Employee Management
        </Heading>
        <Text>Streamlined employee management solutions to handle onboarding, benefits, and more.</Text>
      </Box>
    </Box>
  );
};

export default Services;
