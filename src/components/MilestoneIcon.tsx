import { Box, Flex, Center, Icon, Circle } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
import Animation from "./Animation";

interface Props {
  icon: IconType;
}

const MilestoneIcon = ({ icon }: Props) => {
  return (
    <Flex
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="center"
    >
      <Center position={"relative"} width="3px" height="100%" bg="#671819"> 
        <Circle position={"absolute"} top={"20px"} size={{base:"35px",lg:"40px"}} bg="white">
          <Icon as={icon} boxSize={{base:6,lg:7}} color={"gray.600"} />
        </Circle>
      </Center>
    </Flex>
  );
};

export default MilestoneIcon;
