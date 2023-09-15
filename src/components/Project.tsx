import BodyContentContainer from "./BodyContentContainer";
import {
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import {
  SiDjango,
  SiVercel,
  SiPostgresql,
  SiChakraui
} from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { FaReact} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";

import ProjectAnimation from "./ProjectAnimation";
import Animation from "./Animation";
import card1 from "../assets/images/eduHub2.jpg";
import card2 from "../assets/images/gamehub.jpg";
import card3 from "../assets/images/haatBajar.jpeg";

const Project = () => {
  return (
    <Box paddingTop={{ base: "70px", lg: "100px" }}>
      <BodyContentContainer>
        <Grid
          templateAreas={{
            base: `"animation" "cardOneTwo" "cardThree"`,
            lg: `"animation cardOneTwo cardThree"`,
          }}
          gridTemplateColumns={{ base: "1fr", lg: "1.5fr 1fr 1fr" }}
        >
          <GridItem display={"flex"} alignItems={"center"} area={"animation"}>
            <Animation transitionDuration={2} scale={0.9} x_or_y="x">
              <ProjectAnimation />
            </Animation>
          </GridItem>

          <GridItem area={"cardOneTwo"}>
            <SimpleGrid columns={1}>
              <Animation x_or_y="x" scale={1} transitionDuration={2}>
                <Box borderRadius={20} paddingX={{base:"40px",lg:"20px"}} paddingY={{base:"25px",md:"20px"}}>
                  <Card overflow={"hidden"}>
                    <Image src={card1} />
                    <CardBody bg={"gray.700"}>
                      <Heading color={"white"} fontFamily={"monospace"} fontSize={{base:"2xl",md:"3xl"}} fontWeight={"semibold"}>
                        Edu-Hub
                      </Heading>
                      <HStack>
                        <Text color={"white"} fontSize={"md"} fontFamily={"monospace"} whiteSpace={"nowrap"}>
                          Tech:
                        </Text>
                        <HStack spacing={{base:4,lg:5}}>
                          <Icon
                            boxSize={"20px"}
                            as={SiDjango}
                            color={"gray.300"}
                          ></Icon>
                          <Icon
                            boxSize={"20px"}
                            as={AiFillHtml5}
                            color={"gray.300"}
                          ></Icon>
                          <Icon
                            boxSize={"20px"}
                            as={GrMysql}
                            color={"gray.300"}
                          ></Icon>
                        </HStack>
                      </HStack>
                      <Text
                        color={"gray.400"}
                        textAlign={"justify"}
                        fontFamily={"monospace"}
                      >
                        A classroom management system like Google Classroom,Canvas.
                      </Text>
                    </CardBody>
                  </Card>
                </Box>
              </Animation>

              <Animation transitionDuration={2} x_or_y="x" scale={1}>
                <Box borderRadius={20} paddingX={{base:"40px",lg:"20px"}}  paddingY={{base:"25px",md:"20px"}}>
                  <Card overflow={"hidden"}>
                    <Image src={card2} />
                    <CardBody bg={"gray.700"}>
                      <Heading color={"white"} fontFamily={"monospace"} fontSize={{base:"2xl",md:"3xl"}} fontWeight={"semibold"}>
                        Game-Hub
                      </Heading>
                      <HStack>
                        <Text color={"white"} fontSize={"md"} fontFamily={"monospace"} whiteSpace={"nowrap"}>
                          Tech:
                        </Text>
                        <HStack spacing={{base:4,lg:5}}>
                          <Icon
                            boxSize={"20px"}
                            as={FaReact}
                            color={"gray.300"}
                          ></Icon>
                          <Icon
                            boxSize={"20px"}
                            as={SiChakraui}
                            color={"gray.300"}
                          ></Icon>
                        </HStack>
                      </HStack>
                      <Text
                        color={"gray.400"}
                        textAlign={"justify"}
                        fontFamily={"monospace"}
                      >
                        A video game discovery app, used rawg.io's api and made the frontend.
                      </Text>
                    </CardBody>
                  </Card>
                </Box>
              </Animation>
            </SimpleGrid>
          </GridItem>

          <GridItem display={"flex"} alignItems={"center"} area={"cardThree"}>
            <Animation scale={1} transitionDuration={2} x_or_y="x">
              <Box borderRadius={20} paddingX={{base:"40px",lg:"20px"}} paddingY={{base:"25px",md:"20px"}}>
                <Card overflow={"hidden"}>
                  <Image src={card3} />
                  <CardBody bg={"gray.700"}>
                    <Heading color={"white"} fontSize={{base:"2xl",md:"3xl"}} fontWeight={"semibold"}>
                      Haat-Baajar
                    </Heading>
                    <HStack>
                      <Text color={"white"} fontSize={"md"} fontFamily={"monospace"} whiteSpace={"nowrap"}>
                        Tech:
                      </Text>
                      <HStack spacing={{base:4,lg:5}}>
                        <Icon
                          boxSize={"20px"}
                          as={SiDjango}
                          color={"gray.300"}
                        ></Icon>
                        <Icon
                          boxSize={"20px"}
                          as={FaReact}
                          color={"gray.300"}
                        ></Icon>
                        <Icon
                          boxSize={"20px"}
                          as={SiPostgresql}
                          color={"gray.300"}
                        ></Icon>
                      </HStack>
                    </HStack>
                    <Text
                      color={"gray.400"}
                      textAlign={"justify"}
                      fontFamily={"monospace"}
                    >
                      An e-commerce web application to make shopping more convenient.
                    </Text>
                  </CardBody>
                </Card>
              </Box>
            </Animation>
          </GridItem>
        </Grid>
      </BodyContentContainer>
    </Box>
  );
};

export default Project;
