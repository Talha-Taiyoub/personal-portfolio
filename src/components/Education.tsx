import { Box } from "@chakra-ui/react";
import BodyContentContainer from "./BodyContentContainer";
import Milestone from "./Milestone";
import { FaUniversity, FaSchool } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { GiArchiveResearch } from "react-icons/gi";

const milestones = [
  {
    id: 1,
    title: "Research (ongoing)",
    description: "Explainable AI-driven phishing website detection using hybrid machine learning models.",
    icon: GiArchiveResearch,
  },
  {
    id: 2,
    title: "Research (ongoing)",
    description: "Bengali SMS fraud detection using NLP and machine learning techniques.",
    icon: GiArchiveResearch,
  },
  {
    id: 3,
    title: "Bachelor of Science",
    description: "Computer Science Engineering, North South University.",
    icon: MdSchool,
  },
  {
    id: 4,
    title: "Higher Secondary School Certificate",
    description: "Notre Dame College,Dhaka.",
    icon: FaUniversity,
  },
  {
    id: 5,
    title: "Secondary School Certificate",
    description: "Pabna Zilla School.",
    icon: FaSchool,
  },
];

const Education = () => {
  return (
    <Box
      marginTop={{ base: "20px", lg: "40px", xl: "60px" }}
      marginBottom={{ base: "120px", lg: "180px", xl: "200px" }}
    >
      <BodyContentContainer>
        <Milestone milestones={milestones}></Milestone>
      </BodyContentContainer>
    </Box>
  );
};

export default Education;
