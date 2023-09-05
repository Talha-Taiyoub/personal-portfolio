import { Button, HStack, Image } from '@chakra-ui/react'
import mainLogo from '../assets/mainLogo.webp'

const Navbar = () => {
  return (
    <HStack justifyContent={'space-between'} paddingY={{base:2,md:3}}>
        <Image src={mainLogo} boxSize={'90px'} objectFit={'cover'} borderRadius={'md'} ></Image>
        <HStack>
            <Button fontFamily={'monospace'} whiteSpace={'nowrap'}>Technologies</Button>
            <Button fontFamily={'monospace'} whiteSpace={'nowrap'}>Projects</Button>
            <Button fontFamily={'monospace'} whiteSpace={'nowrap'}>Education</Button>
            <Button fontFamily={'monospace'}>Blogs</Button>
        </HStack>
    </HStack>
  )
}

export default Navbar