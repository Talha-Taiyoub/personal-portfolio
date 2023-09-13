import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        backgroundColor: "#6b7db3",
      },
    }),
  },
});

export default theme;
