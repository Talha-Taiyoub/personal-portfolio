import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import IntroAnimation from "./IntroAnimation";

const text =
  "Throughout his career, Talha has worked on a diverse range of web development projects, from building responsive and dynamic websites to developing custom web applications that solve complex business challenges. He is well-versed in a variety of programming languages and web development technologies";

const Intro = () => {
  return (
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
        <Box paddingX={{ base: "0px", lg: "60px",xl:"80px" }} paddingTop={{base: "40px", lg: "0px"}}>
          <Heading fontSize={"2xl"}>Hello it's me,</Heading>
          <Heading fontSize={"6xl"}>Talha Taiyoub</Heading>
          <Text textAlign={"justify"}>{text}</Text>
        </Box>
      </GridItem>

      {/* AnimationArea */}
      <GridItem overflow={"hidden"} area={"animation"}>
        <IntroAnimation />
      </GridItem>
    </Grid>
  );
};

export default Intro;
