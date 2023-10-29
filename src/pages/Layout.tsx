import { Grid, GridItem } from "@chakra-ui/react";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <Grid
      templateAreas={`"nav" "outlet"`}
                    paddingX={{base:6,lg:20,}}
    >
      <GridItem area={"nav"}>
        <Navbar/>
      </GridItem>

      <GridItem area={"outlet"}>
        <Outlet/>
      </GridItem>
    </Grid>
    
  );
};
export default Layout;
