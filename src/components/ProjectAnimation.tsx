import { Box, Text, Heading,Container } from '@chakra-ui/react'
import Lottie from 'lottie-react'
import projectAnimation from '../assets/techAnim1.json'

const ProjectAnimation = () => {
  return (
    <Container  >
      <Lottie animationData={projectAnimation} autoplay={true} loop={true} ></Lottie> 
      <Text color={"white"} fontSize={{base:"3xl",lg:"5xl"}} fontFamily={"monospace"} textAlign={"center"}
       fontWeight={{base:"thin",md:"normal"}}
      >Recent Projects</Text>
    </Container>
  )
}

export default ProjectAnimation