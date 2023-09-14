import { ThemeConfig, extendTheme} from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: "dark",
  };

const styles={
    global:{
        body:{
            backgroundColor:"##6b7db3"
        }
    }
}

const theme=extendTheme({config,styles})

export default theme

