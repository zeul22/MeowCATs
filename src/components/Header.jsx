import React from 'react'
import {Drawer, DrawerBody,DrawerHeader, DrawerOverlay,
  DrawerContent,DrawerCloseButton, Button, useDisclosure,HStack, Input,DrawerFooter, VStack} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import {  MdAccountBox, MdCall, MdHome, MdLogin, MdLogout, MdMail, MdSignLanguage, MdWork } from "react-icons/md"
import {AiFillBuild, AiOutlineMenu} from 'react-icons/ai'



  const Header = () => {
    const {isOpen, onOpen,onClose}=useDisclosure()
  return (
    <>
    <Button zIndex={'overlay'} bgColor={'purple.200'} variant={'outline'}
     pos={'fixed'} top={"4"} left={'4'} p={'4'} size={"md"}
     borderRadius={'full'} onClick={onOpen}>
     <AiOutlineMenu /></Button>
    <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton onClick={onClose} />
          <DrawerHeader bgColor={'pink.400'} color={'white'}>MEOW CATs</DrawerHeader>
            <DrawerBody bgColor={'blackAlpha.900'}>

            <DrawerHeader>
            <Link to="/home">
            <Button onClick={onClose} leftIcon={<MdHome />} bgColor={'pink.100'} variant='solid'>
              CAT's Home
            </Button>
            </Link> 
            </DrawerHeader>

            <DrawerHeader>
            <Link to="/projects">
            <Button onClick={onClose} leftIcon={<MdMail />} bgColor={'pink'} variant='solid'>
            CAT's HQ 
            </Button>
            </Link> 
            </DrawerHeader>
            
            <DrawerHeader>
            <Link to="/workexp">
            <Button onClick={onClose} leftIcon={<MdWork />} bgColor={'pink.200'} variant='solid'>
            CAT's Team
            </Button>
            </Link> 
            </DrawerHeader>

            <DrawerHeader>
            <Link to="/achieve">
            <Button onClick={onClose} leftIcon={<MdAccountBox />} bgColor={'pink.300'} variant='solid'>
             CAT's Achievements
            </Button>
            </Link> 
            </DrawerHeader>
            
            <DrawerHeader>
            <Link to="/about">
            <Button onClick={onClose} rightIcon={<MdCall />} bgColor={'pink.400'} variant='outline'>
            About CATs
            </Button>
            </Link> 
            </DrawerHeader>
            

          </DrawerBody>
          <DrawerFooter position={"absolute"} left={"0"} bottom={"0"} 
          w={"full"} justifyContent={"space-evenly"}>
            <Link to="/login">
            <Button onClick={onClose} rightIcon={<MdLogin />} bgColor={'purple.400'} >
            Meow In
            </Button>
            </Link> 

            <Link to="/signup">
            <Button onClick={onClose} rightIcon={<MdSignLanguage />} colorScheme='orange' 
            variant='outline'>
            Meow Up
            </Button>
            </Link> 
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>

    </>
  )
}

export default Header



