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
import { SiDjango, SiVercel, SiPostgresql, SiChakraui } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";

import ProjectAnimation from "./ProjectAnimation";
import Animation from "./Animation";
import card1 from "../assets/images/eduHub2.jpg";
import card2 from "../assets/images/gamehub.jpg";
import card3 from "../assets/images/haatBajar.jpeg";

const gridItems = [
  {
    area: "cardOneTwo",
    projects: [
      {
        name: "Edu-Hub",
        src: card1,
        icons: [SiDjango, AiFillHtml5, GrMysql],
        description:
          "A classroom management system like Google Classroom,Canvas.",
      },

      {
        name: "Game-Hub",
        src: card2,
        icons: [FaReact, SiChakraui],
        description:
          "A video game discovery app, used rawg.io's api and made the frontend.",
      },
    ],
  },
  {
    area: "cardThree",
    projects: [
      {
        name: "Haat-Bajaar",
        src: card3,
        icons: [SiDjango, FaReact, SiPostgresql],
        description:
          "An e-commerce web application to make shopping more convenient.",
      },
    ],
  },
];

const Project = () => {
  return (
    <Box paddingTop={{ base: "70px", lg: "100px",xl:"220px" }}>
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

          {gridItems.map((gridItem) => (
            <GridItem
              area={gridItem.area}
              display={"flex"}
              alignItems={"center"}
            >
              <SimpleGrid columns={1}>
              {gridItem.projects.map((project) => (
                <Animation x_or_y="x" scale={1} transitionDuration={2}>
                  <Box
                    borderRadius={20}
                    paddingX={{ base: "40px", lg: "20px" }}
                    paddingY={{ base: "25px", md: "20px" }}
                    _hover={{
                      transform:"scale(1.05)",
                      transition:"transform .15s ease-in"
                    }}
                  >
                    <Card overflow={"hidden"}>
                      <Image src={project.src} />
                      <CardBody bg={"gray.700"}>
                        <Heading
                          color={"white"}
                          fontFamily={"monospace"}
                          fontSize={{ base: "2xl", md: "3xl" }}
                          fontWeight={"semibold"}
                        >
                          {project.name}
                        </Heading>
                        <HStack>
                          <Text
                            color={"white"}
                            fontSize={"md"}
                            fontFamily={"monospace"}
                            whiteSpace={"nowrap"}
                          >
                            Tech:
                          </Text>
                          <HStack spacing={{ base: 4, lg: 5 }}>
                            {project.icons.map((icon) => (
                              <Icon
                                boxSize={"20px"}
                                as={icon}
                                color={"gray.300"}
                              ></Icon>
                            ))}
                          </HStack>
                        </HStack>
                        <Text
                          color={"gray.400"}
                          textAlign={"justify"}
                          fontFamily={"monospace"}
                        >
                          {project.description}
                        </Text>
                      </CardBody>
                    </Card>
                  </Box>
                </Animation>
              ))}
              </SimpleGrid>
              
            </GridItem>
          ))}
        </Grid>
      </BodyContentContainer>
    </Box>
  );
};

export default Project;
