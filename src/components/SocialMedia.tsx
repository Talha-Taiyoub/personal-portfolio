import { Box, Circle, HStack, Icon, Link } from "@chakra-ui/react";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { FaBitbucket } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const SocialMedia = () => {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <HStack spacing={{ base: 4, md: 8, lg: 10 }}>
        <Link href="https://www.facebook.com/talha.anik.98/" target="_blank">
          <Circle
            size={{ base: "40px", md: "44px" }}
            bg={"gray"}
            _hover={{
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            <Icon color={"#141c3a"} boxSize="30px" as={BsFacebook}></Icon>
          </Circle>
        </Link>

        <Link href="https://github.com/TalhaAnik56" target="_blank">
          <Circle
            size={{ base: "40px", md: "44px" }}
            bg={"gray"}
            _hover={{
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            <Icon color={"#141c3a"} boxSize={"30px"} as={BsGithub}></Icon>
          </Circle>
        </Link>

        <Link
          href="https://bitbucket.org/talhataiyoub/workspace/overview/"
          target="_blank"
        >
          <Circle
            size={{ base: "40px", md: "44px" }}
            bg={"gray"}
            _hover={{
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            <Icon color={"#141c3a"} boxSize={"30px"} as={FaBitbucket}></Icon>
          </Circle>
        </Link>

        <Link
          href="https://www.linkedin.com/in/talha-taiyoub-5716aa18b/"
          target="_blank"
        >
          <Circle
            size={{ base: "40px", md: "44px" }}
            bg={"gray"}
            _hover={{
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            <Icon color={"#141c3a"} boxSize={"30px"} as={AiFillLinkedin}></Icon>
          </Circle>
        </Link>

        <Link
          href="mailto:aniktalha@gmail.com?subject=Wanna%20Work%20Together"
          target="_blank"
        >
          <Circle
            size={{ base: "40px", md: "44px" }}
            bg={"gray"}
            _hover={{
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            <Icon color={"#141c3a"} boxSize={"30px"} as={SiGmail}></Icon>
          </Circle>
        </Link>

        <Link href="https://www.instagram.com/talha__anik/" target="_blank">
          <Circle
            size={{ base: "40px", md: "44px" }}
            bg={"gray"}
            _hover={{
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            <Icon color={"#141c3a"} boxSize={"30px"} as={BsInstagram}></Icon>
          </Circle>
        </Link>
      </HStack>
    </Box>
  );
};

export default SocialMedia;
