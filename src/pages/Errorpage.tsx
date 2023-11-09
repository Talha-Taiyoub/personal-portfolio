import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import SimpleNavbar from "../components/SimpleNavbar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <Box paddingX={{ base: 6, lg: 20 }}>
      <SimpleNavbar />
      <Box display={"flex"} justifyContent={"center"}>
        <Box>
          <Heading color={"red.700"} fontSize={"7xl"} as={"h1"}>
            Oops!
          </Heading>
          <Text textAlign={"center"}>
            {isRouteErrorResponse(error)
              ? "This page doesn't exist"
              : "Something went wrong"}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ErrorPage;
