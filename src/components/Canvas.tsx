import { Box, Text } from "@chakra-ui/react";
import BodyContentContainer from "./BodyContentContainer";
import CanvasAnimation from "./CanvasAnimation";

const Canvas = () => {
  return (
    <Box marginTop={{base:"150px",lg:"300px"}}>
        <BodyContentContainer>
      <Text
        color={"White"}
        fontSize={"5xl"}
        fontFamily={"monospace"}
        textAlign={"center"}
      >
        Canvas
      </Text>
      <CanvasAnimation></CanvasAnimation>
    </BodyContentContainer>
    </Box>
  );
};

export default Canvas;
