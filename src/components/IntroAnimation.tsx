import { Box } from '@chakra-ui/react'
import Lottie from 'lottie-react'
import introAnimation from '../assets/anim5.json'


const IntroAnimation = () => {
  // const lottieRef=useRef(null)
  // useEffect(()=>{
  //   if (lottieRef.current) {
  //     lottieRef.current.setSpeed(0.6);
  //   }

  // },[])

  // lottieRef={lottieRef} this line was in the <Lottie> component as props

  return (
    <Box >
      <Lottie animationData={introAnimation} autoplay={true} loop={true} ></Lottie> 
    </Box>
  )
}

export default IntroAnimation