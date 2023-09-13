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
import mainLogo from "../assets/mainLogo.webp";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} paddingTop={{ base: 2, md: 3 }}>
      <Image
        src={mainLogo}
        boxSize={{ base: "65px", lg: "90px" }}
        objectFit={"cover"}
        borderRadius={"md"}
      ></Image>

      {/* for laptop screen */}
      <Box display={{ base: "none", md: "block" }}>
        <HStack spacing={4}>
          <Button fontFamily={"monospace"} whiteSpace={"nowrap"}>
            Technologies
          </Button>
          <Button fontFamily={"monospace"} whiteSpace={"nowrap"}>
            Projects
          </Button>
          <Button fontFamily={"monospace"} whiteSpace={"nowrap"}>
            Education
          </Button>
          <Button fontFamily={"monospace"}>Canvas</Button>
        </HStack>
      </Box>

      {/* for mobile screen */}
      <Box display={{ base: "block", md: "none" }}>
        <Menu isLazy>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem>
              <Button
                width={"100%"}
                fontFamily={"monospace"}
                whiteSpace={"nowrap"}
              >
                Technologies
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                width={"100%"}
                fontFamily={"monospace"}
                whiteSpace={"nowrap"}
              >
                Projects
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                width={"100%"}
                fontFamily={"monospace"}
                whiteSpace={"nowrap"}
              >
                Education
              </Button>
            </MenuItem>
            <MenuItem>
              <Button width={"100%"} fontFamily={"monospace"}>
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
