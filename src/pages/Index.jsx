import { Container, Text, VStack, Box, Heading, IconButton, Image, HStack } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header Section */}
        <Box bg="teal.600" color="white" py={20} textAlign="center">
          <Heading as="h1" size="2xl">
            Welcome to PaySorce
          </Heading>
          <Text fontSize="xl">Your Trusted Partner in Payroll Solutions</Text>
        </Box>

        {/* About Section */}
        <Box py={10} px={4}>
          <Heading as="h2" size="xl" mb={4}>
            Why Choose PaySorce?
          </Heading>
          <Text fontSize="lg">At PaySorce, we specialize in providing comprehensive payroll solutions that are tailored to meet the unique needs of your business. Our team of experts is dedicated to ensuring your payroll processes are efficient, accurate, and compliant with all regulations.</Text>
        </Box>

        {/* Services Section */}
        <Box py={10} px={4} bg="gray.100">
          <Heading as="h2" size="xl" mb={4}>
            What We Offer
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box bg="white" p={4} borderRadius="md" boxShadow="md">
              <Heading as="h3" size="lg">
                Comprehensive Payroll Services
              </Heading>
              <Text>Our payroll services are designed to save you time and reduce errors, ensuring your employees are paid accurately and on time.</Text>
            </Box>
            <Box bg="white" p={4} borderRadius="md" boxShadow="md">
              <Heading as="h3" size="lg">
                Tax Compliance
              </Heading>
              <Text>We provide thorough tax filing services to ensure your business remains compliant with all relevant tax regulations.</Text>
            </Box>
            <Box bg="white" p={4} borderRadius="md" boxShadow="md">
              <Heading as="h3" size="lg">
                HR Solutions
              </Heading>
              <Text>Our HR solutions help you manage employee onboarding, benefits, and other HR tasks efficiently.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Contact Section */}
        <Box py={10} px={4}>
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
        <Box bg="teal.600" color="white" py={4} textAlign="center">
          <Text>&copy; 2024 Virtual Payroll Assistance. All rights reserved.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
