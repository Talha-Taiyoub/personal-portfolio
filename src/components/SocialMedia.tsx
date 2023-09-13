import { Box, Circle, HStack, Icon } from '@chakra-ui/react'
import {BsFacebook,BsGithub,BsInstagram} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaBitbucket} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'

const SocialMedia = () => {
  return (
    <Box display={"flex"} justifyContent={"center"}>
            <HStack spacing={{base:4,md:8,lg:10}}>
                    <Circle size={{base:"40px",md:"44px"}} bg={"gray"}
                    _hover={{
                        backgroundColor:"white",
                        cursor:'pointer'
                    }}>
                        <Icon color={"#141c3a"} boxSize="30px" as={BsFacebook}></Icon>
                    </Circle>

                    <Circle size={{base:"40px",md:"44px"}} bg={"gray"}
                    _hover={{
                        backgroundColor:"white",
                        cursor:'pointer'
                    }}>
                        <Icon color={"#141c3a"} boxSize={"30px"} as={BsGithub}></Icon>
                    </Circle>

                    <Circle size={{base:"40px",md:"44px"}} bg={"gray"}
                    _hover={{
                        backgroundColor:"white",
                        cursor:'pointer'
                    }}>
                        <Icon color={"#141c3a"} boxSize={"30px"} as={FaBitbucket}></Icon>
                    </Circle>

                    <Circle size={{base:"40px",md:"44px"}} bg={"gray"}
                    _hover={{
                        backgroundColor:"white",
                        cursor:'pointer'
                    }}>
                        <Icon color={"#141c3a"} boxSize={"30px"} as={AiFillLinkedin}></Icon>
                    </Circle>

                    <Circle size={{base:"40px",md:"44px"}} bg={"gray"}
                    _hover={{
                        backgroundColor:"white",
                        cursor:'pointer'
                    }}>
                        <Icon color={"#141c3a"} boxSize={"30px"} as={SiGmail}></Icon>
                    </Circle>

                    <Circle size={{base:"40px",md:"44px"}} bg={"gray"}
                    _hover={{
                        backgroundColor:"white",
                        cursor:'pointer'
                    }}>
                        <Icon color={"#141c3a"} boxSize={"30px"} as={BsInstagram}></Icon>
                    </Circle>
            </HStack>
        </Box>
  )
}

export default SocialMedia