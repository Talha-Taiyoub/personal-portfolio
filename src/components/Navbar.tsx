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

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} paddingTop={{ base: 2, md: 3 }}>
      <Image
        src={mainLogo}
        boxSize={{ base: "60px", lg: "80px" }}
        objectFit={"cover"}
        borderRadius={"md"}
      ></Image>

      {/* for laptop screen */}
      <Box display={{ base: "none", md: "block" }}>
        <HStack spacing={4}>
          <Button
            color={"white"}
            variant={"outline"}
            fontFamily={"monospace"}
            whiteSpace={"nowrap"}
          >
            Technologies
          </Button>
          <Button
            color={"white"}
            variant={"outline"}
            fontFamily={"monospace"}
            whiteSpace={"nowrap"}
          >
            Projects
          </Button>
          <Button
            color={"white"}
            variant={"outline"}
            fontFamily={"monospace"}
            whiteSpace={"nowrap"}
          >
            Education
            </Button>
            <Button 
            color={"white"}
            variant={"outline"}
            fontFamily={"monospace"}>
            Canvas
          </Button>
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
            <MenuItem>
              <Button
                color={"white"}
                variant={"outline"}
                width={"100%"}
                fontFamily={"monospace"}
                whiteSpace={"nowrap"}
              >
                Technologies
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                color={"white"}
                variant={"outline"}
                width={"100%"}
                fontFamily={"monospace"}
                whiteSpace={"nowrap"}
              >
                Projects
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                color={"white"}
                variant={"outline"}
                width={"100%"}
                fontFamily={"monospace"}
                whiteSpace={"nowrap"}
              >
                Education
              </Button>
            </MenuItem>
            <MenuItem>
            <Button 
                color={"white"}
                variant={"outline"}
                width={"100%"}
                fontFamily={"monospace"}
                whiteSpace={"nowrap"}
                 >
                Canvas
              </Button>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </HStack>
  );
};

export default Navbar;
