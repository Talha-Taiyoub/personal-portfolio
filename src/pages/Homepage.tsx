import { Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import Canvas from "../components/Canvas";
import ContactMe from "../components/ContactMe";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Technology from "../components/Technology";

const Homepage = () => {
  const [refsReady, setRefsReady] = useState(false);

  const technologyRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const educationRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLDivElement | null>(null);

  const scrollToTechnology = () => {
    technologyRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProject = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToEducation = () => {
    educationRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCanvas = () => {
    canvasRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setRefsReady(true);
  }, []);

  return (
    <>
      {refsReady && (
        <Navbar
          scrollToTechnology={scrollToTechnology}
          scrollToProject={scrollToProject}
          scrollToEducation={scrollToEducation}
          scrollToCanvas={scrollToCanvas}
        />
      )}
      <Grid
        templateAreas={`"intro"
                    "technology"
                    "projects"
                    "education"
                    "contactMe"
                    "canvas"
                    "footer"`}
      >
        <GridItem area={"intro"}>
          <Intro />
        </GridItem>

        <GridItem ref={technologyRef} area={"technology"}>
          <Technology />
        </GridItem>

        <GridItem ref={projectRef} area={"projects"}>
          <Project />
        </GridItem>

        <GridItem ref={educationRef} area={"education"}>
          <Education />
        </GridItem>

        <GridItem area={"contactMe"}>
          <ContactMe />
        </GridItem>

        <GridItem ref={canvasRef} area={"canvas"}>
          <Canvas />
        </GridItem>

        <GridItem area={"footer"}>
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
};
export default Homepage;
