import { Box, Heading, Icon, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { FaJava, FaLaptopCode, FaPhp, FaReact, FaRobot } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import {
  SiDjango,
  SiHeroku,
  SiPostgresql,
  SiPython,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import Animation from "./Animation";
import BodyContentContainer from "./BodyContentContainer";

const arr = [
  { icon: SiDjango, color: "green", name: "Django" },
  { icon: SiPython, color: "blue", name: "Python" },
  { icon: FaLaptopCode, color: "", name: "Web Development" },
  { icon: FaReact, color: "blue", name: "React JS" },
  { icon: SiTypescript, color: "blue", name: "TypeScript" },
  { icon: FaJava, color: "", name: "Java" },
  { icon: SiVercel, color: "", name: "Vercel" },
  { icon: GrMysql, color: "blue", name: "MySQL" },
  { icon: SiPostgresql, color: "blue", name: "PostgreSQL" },
  { icon: SiHeroku, color: "violet", name: "Heroku" },
  { icon: FaRobot, color: "", name: "Machine Learning" },
  { icon: FaPhp, color: "blue", name: "PHP" },
];

const Technology = () => {
  return (
    <BodyContentContainer>
      <Box
        marginTop={{ base: "140px", lg: "220px", xl: "260px" }}
        marginBottom={"60px"}
      >
        <Heading
          color={"white"}
          textAlign={"center"}
          fontSize={{ base: "3xl", lg: "4xl", xl: "5xl" }}
          fontFamily={"monospace"}
          textShadow={"10px 8px 8px black"}
          //textShadow={"8px 6px 10px black"}
          //fontWeight={{base:"thin",lg:"normal"}}
        >
          Made my hands dirty with:
        </Heading>
        <SimpleGrid
          paddingTop={{ base: "20px", lg: "50px", xl: "80px" }}
          columns={{ base: 2, lg: 3, xl: 4 }}
          spacing={16}
        >
          {arr.map((item,index) => (
            <Animation key={index} x_or_y="x" transitionDuration={2} scale={1}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                _hover={{
                  transform: "scale(1.15)",
                  transition: "transform .15s ease-in",
                }}
              >
                <Stack>
                  <Box display={"flex"} justifyContent={"center"}>
                    <Icon
                      as={item.icon}
                      boxSize={"60px"}
                      //color="#671819"
                      color={"gray.400"}
                    ></Icon>
                  </Box>
                  <Text
                    fontWeight={"bold"}
                    color={"#bfbfbf"}
                    textAlign={"center"}
                    fontSize={"md"}
                    fontFamily={"monospace"}
                  >
                    {item.name}
                  </Text>
                </Stack>
              </Box>
            </Animation>
          ))}
        </SimpleGrid>
      </Box>
    </BodyContentContainer>
  );
};

export default Technology;
