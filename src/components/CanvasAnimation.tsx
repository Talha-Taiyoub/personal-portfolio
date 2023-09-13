import { Box,Container} from '@chakra-ui/react'
import Lottie from 'lottie-react'
import canvasAnimation from '../assets/underConstruction2.json'

const CanvasAnimation = () => {
  return (
    <Container  >
      <Lottie animationData={canvasAnimation} autoplay={true} loop={true} ></Lottie> 
    </Container>
  )
}

export default CanvasAnimation