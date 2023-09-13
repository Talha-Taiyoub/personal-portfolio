import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const BodyContentContainer = ({ children }: Props) => {
  return (
    <Box bg={"##6b7db3"} paddingX={{ base: "10px", lg: "60px", xl: "80px" }}>{children}</Box>
  );
};

export default BodyContentContainer;
