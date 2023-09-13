import { extendTheme} from "@chakra-ui/react";

const styles={
    global:()=>{{
        body:{
            bg:"##6b7db3"
        }
    }}
}

const theme=extendTheme({styles})


export default theme

