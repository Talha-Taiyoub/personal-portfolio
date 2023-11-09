import { Link } from "react-router-dom";
import { HStack, Image } from "@chakra-ui/react";
import mainLogo from "../assets/akatsuki.svg";

const SimpleNavbar = () => {
  return (
    <HStack paddingTop={{ base: 2, md: 3 }}>
      <Link to={"/"}>
        <Image
          src={mainLogo}
          boxSize={{ base: "60px", lg: "80px" }}
          objectFit={"cover"}
          borderRadius={"md"}
        />
      </Link>
    </HStack>
  );
};

export default SimpleNavbar;
