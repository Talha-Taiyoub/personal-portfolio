import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Link,
  Text,
} from "@chakra-ui/react";
import {BiMailSend} from 'react-icons/bi'
import BodyContentContainer from "./BodyContentContainer";

const text =
  "Let's connect and chat over coffee to explore potential collaborations.";

const ContactMe = () => {
  return (
    <BodyContentContainer>
        <Grid
      borderRadius={"20px"}
      fontFamily={"mono"}
      marginTop={{base:"200px",lg:"300px"}}
      //marginTop={"200px"}
      templateAreas={{base:`"start" "middle" "end"`,lg:`"start middle end"`}}
      gridTemplateColumns={{base:"1fr",lg:"1fr 1fr 1fr"}}
      //bg={"#141c3a"}
      bg={"gray.900"}
    >
      <GridItem area={"start"}>
        <Box
          paddingTop={{base:"40px",lg:"60px"}}
          paddingBottom={{base:"0px",lg:"60px"}}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text fontWeight={"black"} fontSize={"3xl"}>
            Start a Project
          </Text>
        </Box>
      </GridItem>

      <GridItem area={"middle"}>
        <Box
          paddingX={{base:"15px",lg:"0px"}}
          paddingTop={{base:"20px",lg:"60px"}}
          paddingBottom={{base:"30px",lg:"60px"}}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text textAlign={"center"} fontSize={"md"}>
            {text}
          </Text>
        </Box>
      </GridItem>

      <GridItem area={"end"}>
        <Box
          paddingTop={{base:"0px",lg:"60px"}}
          paddingBottom={{base:"50px",lg:"60px"}}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Link
            href="mailto:aniktalha@gmail.com?subject=Wanna%20Work%20Together"
            target="_blank"
          >
            <Button leftIcon={<BiMailSend style={{ fontSize: "1.5em" }}/>} variant='outline' size={"lg"} borderRadius={"30px"}
            borderColor='green.500'
            _hover={{backgroundColor:"green.500",cursor:"pointer"}}>Get in touch</Button>
          </Link>
        </Box>
      </GridItem>
    </Grid>
    </BodyContentContainer>
  );
};

export default ContactMe;
