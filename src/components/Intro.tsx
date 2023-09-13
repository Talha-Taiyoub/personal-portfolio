import { Box, Grid, GridItem, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import IntroAnimation from "./IntroAnimation";
import Animation from "./Animation";
import BodyContentContainer from "./BodyContentContainer";

const text =
  "Throughout my career, I have had the opportunity to work on a diverse range of web development projects. These experiences have included building responsive and dynamic websites as well as developing custom web applications that tackle complex business challenges. I have become well-versed in a variety of programming languages and web development technologies along the way."

const Intro = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  //const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <BodyContentContainer>
      <Grid
        templateAreas={{
          base: `"animation" "heading"`,
          lg: `"heading animation"`,
        }}
        gridTemplateColumns={{ base: "1fr", lg: "0.80fr 1fr" }}
      >
        {/* Heading Area */}
        <GridItem
          area={"heading"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box
            color={"white"}
            paddingRight={{ base: "0px",lg:"60px", xl: "80px" }}
            paddingTop={{ base: "40px", lg: "0px" }}
          >
            <Heading fontSize={{base:"lg",lg:"2xl"}} fontFamily={"monospace"}>Hello it's me,</Heading>
            <Heading fontFamily={"monospace"} fontSize={{base:"4xl",lg:"6xl"}}>
              Talha Taiyoub
            </Heading>
            <Text fontSize={{lg:"md"}} color={"gray.400"} fontFamily={"monospace"} textAlign={"justify"}>{text}</Text>
            <Text fontSize={{base:"sm",lg:"md"}} fontFamily={"monospace"} paddingTop={{base:"20px",lg:"30px",xl:"40px"}}>Scroll For More</Text>
          </Box>
        </GridItem>

        {/* AnimationArea */}
        <GridItem overflow={"hidden"} area={"animation"}>
          <Animation x_or_y="y" transitionDuration={1.5} scale={isMobile?1.3:1.1}>
            <IntroAnimation />
          </Animation>
        </GridItem>
      </Grid>
    </BodyContentContainer>
  );
};

export default Intro;
