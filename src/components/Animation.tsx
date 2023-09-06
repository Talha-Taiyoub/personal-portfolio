import { Button, Container, chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';

const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

const Animation = () => {
  return (

    <Container h="400px" display="flex" alignItems="center" justifyContent="center">
      <ChakraBox
        // initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: [1, 2, 2, 1, 1], }}
        // whileInView={{ opacity: 1 }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 0.5,
          repeat:Infinity,
        }}
      >
        <Button>Shanks</Button>
      </ChakraBox>
    </Container>
  )
}

export default Animation