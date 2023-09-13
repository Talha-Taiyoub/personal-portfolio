import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Technology from "./components/Technology";
import Project from "./components/Project";
import Education from "./components/Education";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Canvas from "./components/Canvas";

const App = () => {
  return (
    <Grid
      color={"white"}
      templateAreas={`"nav"
                    "intro"
                    "technology"
                    "projects"
                    "education"
                    "contactMe"
                    "canvas"
                    "footer"`}
                    paddingX={{base:6,lg:20,}}
    >
      <GridItem overflow={"hidden"} area={"nav"}>
        <Navbar/>
      </GridItem>

      <GridItem overflow={"hidden"} area={"intro"}>
        <Intro/>
      </GridItem>

      <GridItem overflow={"hidden"} area={"technology"}>
        <Technology/>
      </GridItem>

      <GridItem overflow={"hidden"} area={"projects"}>
        <Project/>
      </GridItem>

      <GridItem overflow={"hidden"} area={"education"}>
        <Education/>
      </GridItem>
      
      <GridItem overflow={"hidden"} area={"contactMe"}>
        <ContactMe/>
      </GridItem>

      <GridItem overflow={"hidden"} area={"canvas"}>
        <Canvas/>
      </GridItem>

      <GridItem overflow={"hidden"} area={"footer"}>
        <Footer/>
      </GridItem>
    </Grid>
    
  );
};
export default App;
