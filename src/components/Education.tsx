import { Box } from "@chakra-ui/react"
import BodyContentContainer from "./BodyContentContainer"
import Milestone from "./Milestone"
import {FaUniversity,FaSchool} from 'react-icons/fa'
import {MdSchool} from 'react-icons/md'
import {GiArchiveResearch} from 'react-icons/gi'


const milestones = [
  {
    id: 1,
    title: 'Research (ongoing)',
    description: "Emotion detection using Deep Learning",
    icon:GiArchiveResearch
  },
  {
    id: 2,
    title: 'Bachelor of Science',
    description: "Computer Science Engineering, North South University.",
    icon:MdSchool
  },
  {
    id: 3,
    title: 'Higher Secondary School Certificate',
    description:'Notre Dame College,Dhaka.',
    icon:FaUniversity

  },
  {
    id: 4,
    title: 'Secondary School Certificate',
    description:'Pabna Zill School.',
    icon:FaSchool
  }   
];


const Education = () => {
  return (
    <Box paddingTop={"160px"} paddingBottom={"100px"}>
        <BodyContentContainer>
          <Milestone milestones={milestones}></Milestone>
        </BodyContentContainer>
    </Box>
  )
}

export default Education