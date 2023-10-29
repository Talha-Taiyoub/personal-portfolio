import { Grid, GridItem } from "@chakra-ui/react";
import Canvas from "../components/Canvas";
import ContactMe from "../components/ContactMe";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Project from "../components/Project";
import Technology from "../components/Technology";

const Homepage = () => {
  return (
    <Grid
      templateAreas={`"intro"
                    "technology"
                    "projects"
                    "education"
                    "contactMe"
                    "canvas"
                    "footer"`}
    >
      <GridItem area={"intro"}>
        <Intro />
      </GridItem>

      <GridItem area={"technology"}>
        <Technology />
      </GridItem>

      <GridItem area={"projects"}>
        <Project />
      </GridItem>

      <GridItem area={"education"}>
        <Education />
      </GridItem>

      <GridItem area={"contactMe"}>
        <ContactMe />
      </GridItem>

      <GridItem area={"canvas"}>
        <Canvas />
      </GridItem>

      <GridItem area={"footer"}>
        <Footer />
      </GridItem>
    </Grid>
  );
};
export default Homepage;
