import { Box, Container, chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp, spring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  x_or_y: string;
  transitionDuration:number;
  scale:number;
}

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Animation = ({ children, x_or_y,transitionDuration,scale }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when it enters the viewport
    threshold: 0.5, // How much of the component/element should be in screen to trigger. ).5 means half of the component
  });

  const viewportWidth =
    window.innerWidth || document.documentElement.clientWidth;
  let visible = {};
  if (x_or_y == "y") visible = { opacity: 1, y: [viewportWidth, -50, 0],scale:scale };
  else visible = { opacity: 1, x: [-viewportWidth, 0],scale:scale};

  const animationVariants = {
    hidden: { opacity: 0 },
    visible,
  };

  return (
    <Box ref={ref}>
      <ChakraBox
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animationVariants}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{ duration: transitionDuration, type: "spring",}}
        //whileHover={{ scale: scale+.1}}
        //whileTap={{ scale: scale-.1 }}
      >
        {children}
      </ChakraBox>
    </Box>
  );
};

export default Animation;

// We will also have the same result by following this style.
// import { Container, chakra, shouldForwardProp } from "@chakra-ui/react";
// import { motion,isValidMotionProp } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import IntroAnimation from './IntroAnimation';

// const ChakraBox = chakra(motion.div, {
//   shouldForwardProp: (prop) =>
//     isValidMotionProp(prop) || shouldForwardProp(prop),
// });

// const Animation = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.5,
//   });

//   const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
//   return (
//     <Container ref={ref}>
//       <ChakraBox
//         initial={{ opacity: 0}}
//         animate={inView ? { opacity: 1, y:[viewportWidth,-50,0] } : { opacity: 0}}
//         // @ts-ignore no problem in operation, although type error appears.
//         transition={{ duration: 1 }}
//         whileHover={{ scale: 1.2 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         <IntroAnimation />
//       </ChakraBox>
//     </Container>
//   );
// };
// export default Animation;
