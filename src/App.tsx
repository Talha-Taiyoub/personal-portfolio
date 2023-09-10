import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Technology from "./components/Technology";
import Project from "./components/Project";
import Education from "./components/Education";

const App = () => {
  return (
    <Grid
      templateAreas={`"nav"
                    "intro"
                    "technology"
                    "projects"
                    "education"`}
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
    </Grid>
    
  );
};
export default App;
