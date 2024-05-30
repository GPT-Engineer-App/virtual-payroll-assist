import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box p={5}>
      <Heading as="h1">Contact Us</Heading>
      <Text>If you have any questions or would like to learn more about our services, please get in touch with us. We are here to help you with all your payroll and HR needs.</Text>
      <Box mt={4}>
        <Heading as="h2" size="lg">
          Contact Information
        </Heading>
        <Text>Phone: (123) 456-7890</Text>
        <Text>Email: info@paysorce.com</Text>
      </Box>
    </Box>
  );
};

export default Contact;
