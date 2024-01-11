import React, { memo } from 'react'
import {Divider,Text,Stack,VStack, Heading, HStack, CircularProgress, CircularProgressLabel } from '@chakra-ui/react'



const Achievements = () => {
  return (
    <>
    {/* <Stack direction={['row','column']}> */}

    <Stack  direction={['column','row']} color={'white'}   bgColor={'blackAlpha.800'} p={'4'} display={'flex'} justifyContent={'space-evenly'}>
    
    <CircularProgress  alignSelf='center' value={40} color='pink.400' size={'200px'}>
    <Heading size={'md'} alignItems={'center'} m={'2px 0px 20px 0px'} 
    display={'flex'} justifyContent={'center'}>
    Team Spirit</Heading>
    </CircularProgress>
    <CircularProgress  alignSelf='center' value={40} color='pink.400' size={'200px'}>
    <Heading size={'md'} alignItems={'center'}  m={'2px 0px 20px 0px'}  
    display={'flex'} justifyContent={'center'}>
    Employee Satisfaction</Heading>
    </CircularProgress>
    <CircularProgress  alignSelf='center' value={40} color='pink.400' size={'200px'}>
    <Heading size={'md'} alignItems={'center'}  m={'2px 0px 20px 0px'}  
    display={'flex'} justifyContent={'center'}>
    Client Satisfaction</Heading>
    </CircularProgress>
    
   
    </Stack>
    {/* </Stack> */}

    <VStack bgColor={'blackAlpha.800'}>
      <Stack direction={['column','row']} p={'2'} bgColor={'blackAlpha.200'} color={'white'} w={'100%'} h={'30vh'}>
        <Heading  size={'4xl'} h={'100%'} w={'100%'} color={'pink'}>
        This is it
        <Heading size={'md'}  h={'60%'} p={4} color={'white'}>
        asdasasdasdasdasdasdasdasddasdasdasdasd
        </Heading>
        </Heading>
        <Heading size={'4xl'} h={'100%'} w={'100%'} color={'pink'}>
        This is it
        <Heading  size={'md'} h={'60%'} p={4} color={'white'}>
        asdasdasdasdasdasd</Heading>
        </Heading>
      </Stack>


      <Stack direction={['column','row']} p={'2'} bgColor={'blackAlpha.200'} color={'white'} w={'100%'} h={'30vh'}>
        <Heading  size={'4xl'} h={'100%'} w={'100%'} color={'pink'}>
        This is it
        <Heading size={'md'}  h={'60%'} p={4} color={'white'}>
        asdasasdasdasdasdasdasdasddasdasdasdasd
        </Heading>
        </Heading> 
        <Heading size={'4xl'} h={'100%'} w={'100%'} color={'pink'}>
        This is it
        <Heading  size={'md'} h={'60%'} p={4} color={'white'}>
        asdasdasdasdasdasd</Heading>
        </Heading>
      </Stack>


      <Stack direction={['column','row']} p={'2'} bgColor={'blackAlpha.200'} color={'white'} w={'100%'} h={'30vh'}>
        <Heading  size={'4xl'} h={'100%'} w={'100%'} color={'pink'}>
        This is it
        <Heading size={'md'}  h={'60%'} p={4} color={'white'}>
        asdasasdasdasdasdasdasdasddasdasdasdasd
        </Heading>
        </Heading>
        <Heading size={'4xl'} h={'100%'} w={'100%'} color={'pink'}>
        This is it
        <Heading  size={'md'} h={'60%'} p={4} color={'white'}>
        asdasdasdasdasdasd</Heading>
        </Heading>
      </Stack>
    
    </VStack>

    <Stack direction={['column','row']}  color={'white'}   bgColor={'blackAlpha.800'} p={'10'} display={'flex'} justifyContent={'space-evenly'}>
    <CircularProgress alignSelf={'center'} value={40} color='pink.400' size='200px'>
    <Heading size={'md'} alignItems={'center'}  m={'2px 0px 20px 0px'} 
    display={'flex'} justifyContent={'center'}>
    Team Spirit</Heading>
    </CircularProgress>
    <CircularProgress alignSelf={'center'} value={60} color='pink.400' size='200px'>
    <Heading size={'md'} alignItems={'center'}  m={'2px 0px 20px 0px'} 
    display={'flex'} justifyContent={'center'}>
    Client Associations</Heading>
    </CircularProgress>
    <CircularProgress alignSelf={'center'} value={80} color='pink.400' size='200px'>
    <Heading size={'md'} alignItems={'center'}  m={'2px 0px 20px 0px'} 
    display={'flex'} justifyContent={'center'}>
    Client Satisfaction</Heading>
    </CircularProgress>
    </Stack>


    </>
  )
}

export default Achievements