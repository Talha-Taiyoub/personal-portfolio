import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const Layout = () => {
  return (
    <Box paddingX={{ base: 6, lg: 20 }}>
      <Navbar />
      <Outlet />
    </Box>
  );
};
export default Layout;
