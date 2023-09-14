import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const BodyContentContainer = ({ children }: Props) => {
  return (
    <Box paddingX={{ base: "7px", lg: "60px", xl: "80px" }}>{children}</Box>
  );
};

export default BodyContentContainer;
