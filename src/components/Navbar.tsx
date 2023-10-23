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

const navigationElement = ["Technologies", "Projects", "Education", "Canvas"];

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
          {navigationElement.map((element,index) => (
            <Button
              key={index}
              color={"white"}
              variant={"outline"}
              fontFamily={"monospace"}
              whiteSpace={"nowrap"}
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
            {navigationElement.map((element,index) => (
              <MenuItem key={index}>
                <Button
                  color={"white"}
                  variant={"outline"}
                  width={"100%"}
                  fontFamily={"monospace"}
                  whiteSpace={"nowrap"}
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
