import {
  Box,
  Button,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import mainLogo from "../assets/akatsuki.svg";
import { Link } from "react-router-dom";

const navigationElement = ["Technologies", "Projects", "Education", "Canvas"];

interface Props {
  scrollToTechnology: () => void;
  scrollToProject: () => void;
  scrollToEducation: () => void;
  scrollToCanvas: () => void;
}

const Navbar = ({
  scrollToTechnology,
  scrollToProject,
  scrollToEducation,
  scrollToCanvas,
}: Props) => {
  return (
    <HStack justifyContent={"space-between"} paddingTop={{ base: 2, md: 3 }}>
      <Link to={"/"}>
        <Image
          src={mainLogo}
          boxSize={{ base: "60px", lg: "80px" }}
          objectFit={"cover"}
          borderRadius={"md"}
        />
      </Link>

      {/* for laptop screen */}
      <Box display={{ base: "none", md: "block" }}>
        <HStack spacing={4}>
          {navigationElement.map((element, index) => (
            <Button
              _hover={{bg:"#5c7b9a"}}
              key={index}
              color={"white"}
              variant={"outline"}
              fontFamily={"monospace"}
              whiteSpace={"nowrap"}
              onClick={() =>
                element == "Technologies"
                  ? scrollToTechnology()
                  : element == "Projects"
                  ? scrollToProject()
                  : element == "Education"
                  ? scrollToEducation()
                  : scrollToCanvas()
              }
            >
              {element}
            </Button>
          ))}
        </HStack>
      </Box>

      {/* for mobile screen */}
      <Box display={{ base: "block", md: "none" }} paddingRight={"10px"}>
        <Menu isLazy>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            color={"white"}
          />
          <MenuList>
            {navigationElement.map((element, index) => (
              <MenuItem key={index} _hover={{bg:"transparent"}}>
                <Button
                  _hover={{bg:"#5c7b9a"}}
                  color={"white"}
                  variant={"outline"}
                  width={"100%"}
                  fontFamily={"monospace"}
                  whiteSpace={"nowrap"}
                  onClick={() =>
                    element == "Technologies"
                      ? scrollToTechnology()
                      : element == "Projects"
                      ? scrollToProject()
                      : element == "Education"
                      ? scrollToEducation()
                      : scrollToCanvas()
                  }
                >
                  {element}
                </Button>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
    </HStack>
  );
};

export default Navbar;
