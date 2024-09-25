import { Box, Circle, HStack, Icon, Link } from "@chakra-ui/react";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { FaBitbucket } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const socials = [
  {
    id: 1,
    link: "https://www.facebook.com/talha.anik.98/",
    icon: BsFacebook,
  },
  {
    id: 2,
    link: "https://github.com/Talha-Taiyoub",
    icon: BsGithub,
  },
  {
    id: 3,
    link: "https://bitbucket.org/talhataiyoub/workspace/overview/",
    icon: FaBitbucket,
  },
  {
    id: 4,
    link: "https://www.linkedin.com/in/talha-taiyoub-5716aa18b/",
    icon: AiFillLinkedin,
  },
  {
    id: 5,
    link: "mailto:aniktalha@gmail.com?subject=Wanna%20Work%20Together",
    icon: SiGmail,
  },
  { id: 6, link: "https://www.instagram.com/talha__anik/", icon: BsInstagram },
];

const SocialMedia = () => {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <HStack spacing={{ base: 4, md: 8, lg: 10 }} paddingTop={4}>
        {socials.map((social) => (
          <Link key={social.id} href={social.link} target="blank">
            <Circle
              size={{ base: "40px", md: "44px" }}
              bg={"gray"}
              _hover={{
                backgroundColor: "white",
                cursor: "pointer",
                transform: "scale(1.08)",
                transition: "transform .15s ease-in",
              }}
            >
              <Icon color={"#141c3a"} boxSize="30px" as={social.icon}></Icon>
            </Circle>
          </Link>
        ))}
      </HStack>
    </Box>
  );
};

export default SocialMedia;
