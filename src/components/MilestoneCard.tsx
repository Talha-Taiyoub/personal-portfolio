import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons/lib";

interface Props {
  milestone: { id: number; title: string; description: string};
}

const MilestoneCard = ({ milestone }: Props) => {
  return (
    <Stack
      fontFamily={"monospace"}
      textAlign={{base:'start',lg:milestone.id % 2 == 0 ? "start" : "end"}}
      spacing={2}
      marginTop={"20px"} //If you change this,change the top={"20px"} of Circle in MilestoneIcon.tsx as well.
      marginBottom="30px"
      paddingLeft={{base:"20px",lg:milestone.id % 2 == 0 ? "20px" : "0px"}}
      paddingRight={{base:"0px",lg:milestone.id % 2 == 0 ? "0px" : "20px"}}
    >
      <Text color={"white"} fontWeight={{base:"semibold",lg:"extrabold"}} fontSize={{ base: "xl", lg: "2xl" }}>
        {milestone.title}
      </Text>
      <Text color={"white"} fontSize={{ lg: "sm" }}>{milestone.description}</Text>
    </Stack>
  );
};

export default MilestoneCard;
