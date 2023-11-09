import { Box, Text } from "@chakra-ui/react";
import BodyContentContainer from "./BodyContentContainer";
import CanvasAnimation from "./CanvasAnimation";

const Canvas = () => {
  return (
    <Box
      marginTop={{ base: "20px", lg: "40px", xl: "60px" }}
      marginBottom={{ base: "30px", lg: "60px", xl: "80px" }}
    >
      <BodyContentContainer>
        <Text
          color={"White"}
          fontSize={{ base: "3xl", lg: "5xl" }}
          fontWeight={"bold"}
          fontFamily={"monospace"}
          textAlign={"center"}
          textShadow={"10px 8px 8px black"}
        >
          Canvas
        </Text>
        <CanvasAnimation></CanvasAnimation>
      </BodyContentContainer>
    </Box>
  );
};

export default Canvas;
