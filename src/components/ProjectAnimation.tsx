import { Box, Text, Heading } from '@chakra-ui/react'
import Lottie from 'lottie-react'
import projectAnimation from '../assets/techAnim1.json'

const ProjectAnimation = () => {
  return (
    <Box  >
      <Lottie animationData={projectAnimation} autoplay={true} loop={true} ></Lottie> 
      <Text color={"gray.500"} fontWeight={"extrabold"} fontSize={"3xl"} fontFamily={"monospace"} textAlign={"center"}>Recent Projects</Text>
    </Box>
  )
}

export default ProjectAnimation