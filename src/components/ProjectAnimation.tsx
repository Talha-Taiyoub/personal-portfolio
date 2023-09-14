import { Box, Text, Heading,Container } from '@chakra-ui/react'
import Lottie from 'lottie-react'
import projectAnimation from '../assets/techAnim1.json'

const ProjectAnimation = () => {
  return (
    <Container  >
      <Lottie animationData={projectAnimation} autoplay={true} loop={true} ></Lottie> 
      <Text color={"white"} fontSize={{base:"3xl",lg:"4xl"}} fontFamily={"monospace"} textAlign={"center"}
       fontWeight={{base:"bold",md:"extrabold"}}
       textShadow={"10px 8px 8px black"}
      >Recent Projects</Text>
    </Container>
  )
}

export default ProjectAnimation