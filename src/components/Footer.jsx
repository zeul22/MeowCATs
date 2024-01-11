import React from 'react'
import { Box ,VStack, Heading, Stack, HStack, Button, Input,Text} from '@chakra-ui/react'
import { AiOutlineSend, AiFillInstagram, AiFillTwitterCircle,AiFillYoutube } from 'react-icons/ai'
const Footer = () => {
  return (
    <Box bgColor={"pink.400"} minH={'40'} p={'16'} color={'white'} >
    <Stack direction={['column','row']}>
        <VStack alignItems={'stretch'} w={'full'} px={"4"}>
            <Heading size='md' textTransform={'uppercase'} textAlign={['center','left']}>
                Meow's Mailletters
            </Heading>
            <HStack>
                <Input placeholder="MeowMail" color={'black'} bgColor={'white.900'} 
                borderRadius={'4px'} outline={'none'} focusBorderColor={'none'}></Input>
                
                <Button p={"0"} colorScheme='red' borderRadius={"0 20px 20px 0"} >
                <AiOutlineSend size={20}/>
                </Button>
            </HStack>    
        </VStack>

        <VStack w={'full'} 
        borderleft={['none','1px solid white']} 
        borderright={['none','1px solid white']}>

        <Heading textTransform={'uppercase'} textAlign={'center'} >
            MEOW CAT's
        </Heading>
        <Text>All Rights Reserved 2024</Text>
        </VStack>

        <VStack w={'full'} 
        borderleft={['none','1px solid white']} 
        borderright={['none','1px solid white']}>

        <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>
            Social Media
            <HStack>
            <Button colorScheme='red'  p={'2'}><AiFillInstagram/></Button>
            <Button colorScheme='red'  p={'2'}><AiFillTwitterCircle/></Button>
            <Button colorScheme='red'  p={'2'}><AiFillYoutube /></Button>
            </HStack>
        </Heading>
        <Text>All Rights Reserved 2024</Text>
        </VStack>
    </Stack>

    </Box>
  )
}

export default Footer