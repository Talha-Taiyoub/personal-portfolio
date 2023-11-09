import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <Box paddingX={{ base: 6, lg: 20 }}>
      <Outlet />
    </Box>
  );
};
export default Layout;
