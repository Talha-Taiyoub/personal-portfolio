import { Box, Text } from "@chakra-ui/react";
import BodyContentContainer from "./BodyContentContainer";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <Box marginBottom={"20px"}>
      <BodyContentContainer>
        
        <SocialMedia />
        <Box paddingTop={"30px"}>
          <Text
            color={"gray.600"}
            fontFamily={"monospace"}
            textAlign={"center"}
          >
            Crafted by my own hands. Technology used: React JS, Chakra UI,
            Framer Motion, Lottie Animation
          </Text>
        </Box>
      </BodyContentContainer>
    </Box>
  );
};

export default Footer;
