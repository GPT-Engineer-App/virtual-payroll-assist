import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Navbar() {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-between" align="center">
        <Link as={RouterLink} to="/" color="white" fontWeight="bold">
          Home
        </Link>
        <Link as={RouterLink} to="/services" color="white" fontWeight="bold">
          Services
        </Link>
        <Link as={RouterLink} to="/about" color="white" fontWeight="bold">
          About Us
        </Link>
        <Link as={RouterLink} to="/contact" color="white" fontWeight="bold">
          Contact
        </Link>
        <Link as={RouterLink} to="/careers" color="white" fontWeight="bold">
          Careers
        </Link>
      </Flex>
    </Box>
  );
}

export default Navbar;
