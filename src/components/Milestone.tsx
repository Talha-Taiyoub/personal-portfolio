import { Grid, GridItem, Box, Text } from "@chakra-ui/react";
import MilestoneCard from "./MilestoneCard";
import MilestoneIcon from "./MilestoneIcon";
import { IconType } from "react-icons/lib";
import Animation from "./Animation";

interface Props {
  milestones: { id: number; title: string; description: string;icon:IconType }[];
}

const Milestone = ({ milestones }: Props) => {
  const newMilestones = milestones.map((milestone) =>
    milestone.id % 2 == 0
      ? { ...milestone, firstCard: "emptyCard", lastCard: "card" }
      : { ...milestone, firstCard: "card", lastCard: "emptyCard" }
  );
  return (
    <Box>
      <Text
        color={"white"}
        marginBottom={{base:"40px",lg:"60px"}}
        fontFamily={"monospace"}
        textAlign={{base:"center",md:"center"}}
        fontSize={{ base: "3xl", lg: "5xl" }}
        fontWeight={"normal"}
        //textShadow={"8px 6px 10px black"}
        textShadow={"10px 8px 8px black"}
  
      >
        Academics
      </Text>
      {newMilestones.map((milestone) => (
        <Grid
          templateAreas={{base:`"iconLine card"`,lg:`"${milestone.firstCard} iconLine ${milestone.lastCard}"`}}
          gridTemplateColumns={{base:"0.1fr 1fr",lg:"1fr .1fr 1fr"}}
        >
          <GridItem area={"emptyCard"}></GridItem>
          <GridItem area={"iconLine"}>
            <MilestoneIcon icon={milestone.icon} />
          </GridItem>
          <GridItem  area={"card"}>
            <Animation x_or_y="y" scale={1} transitionDuration={2}><MilestoneCard milestone={milestone}></MilestoneCard></Animation>
          </GridItem>
        </Grid>
      ))}
    </Box>
  );
};

export default Milestone;
