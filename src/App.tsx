import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";

const App = () => {
  return (
    <Grid
      templateAreas={`"nav"
                    "intro"
                    "projects"`}
                    paddingX={{base:7,lg:20,}}
    >
      <GridItem overflow={"hidden"} area={"nav"}>
        <Navbar/>
      </GridItem>

      <GridItem overflow={"hidden"} area={"intro"}>
        <Intro/>
      </GridItem>

      <GridItem overflow={"hidden"} area={"projects"}>
        Projects
      </GridItem>
    </Grid>
  );
};
export default App;
