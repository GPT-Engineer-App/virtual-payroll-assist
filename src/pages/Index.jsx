import { Container, Text, VStack, Box, Heading, Button, IconButton, Image, HStack } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header Section */}
        <Box bg="teal.500" color="white" py={10} textAlign="center">
          <Heading as="h1" size="2xl">
            Virtual Payroll Assistance
          </Heading>
          <Text fontSize="xl">Expert Payroll Solutions for Accounting Firms</Text>
        </Box>

        {/* About Section */}
        <Box py={10}>
          <Heading as="h2" size="xl" mb={4}>
            About Us
          </Heading>
          <Text fontSize="lg">We provide top-notch virtual payroll assistance tailored specifically for accounting firms. Our team of experts ensures that your payroll processes are smooth, accurate, and compliant with all regulations.</Text>
        </Box>

        {/* Services Section */}
        <Box py={10} bg="gray.100">
          <Heading as="h2" size="xl" mb={4}>
            Our Services
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box>
              <Heading as="h3" size="lg">
                Payroll Processing
              </Heading>
              <Text>Efficient and accurate payroll processing to save you time and reduce errors.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="lg">
                Tax Filing
              </Heading>
              <Text>Comprehensive tax filing services to ensure compliance and avoid penalties.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="lg">
                Employee Management
              </Heading>
              <Text>Streamlined employee management solutions to handle onboarding, benefits, and more.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Contact Section */}
        <Box py={10}>
          <Heading as="h2" size="xl" mb={4}>
            Contact Us
          </Heading>
          <Text fontSize="lg" mb={4}>
            Get in touch with us to learn more about our services and how we can help your accounting firm.
          </Text>
          <HStack spacing={4}>
            <IconButton aria-label="Call us" icon={<FaPhone />} size="lg" />
            <IconButton aria-label="Email us" icon={<FaEnvelope />} size="lg" />
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
          </HStack>
        </Box>

        {/* Footer Section */}
        <Box bg="teal.500" color="white" py={4} textAlign="center">
          <Text>&copy; {new Date().getFullYear()} Virtual Payroll Assistance. All rights reserved.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
