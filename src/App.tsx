import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Grid
      templateAreas={`"nav"
                    "intro"
                    "projects"`}
                    paddingX={20}
    >
      <GridItem area={"nav"}>
        <Navbar/>
      </GridItem>

      <GridItem bg="pink.300" area={"intro"}>
        Intro
      </GridItem>

      <GridItem bg="green.300" area={"projects"}>
        Projects
      </GridItem>
    </Grid>
  );
};
export default App;
