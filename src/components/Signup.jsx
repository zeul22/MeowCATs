import React from 'react'
import { Box,VStack, HStack, Container, Input, Heading, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <>
      <Box h={'100vh'} bgColor={'blackAlpha.800'}>
      <Container maxW={'container.xl'}  h={'100vh'} p={['16']}>
      <form action="">
      <VStack alignItems={'stretch'} spacing={'8'} w={['','96']} m={'auto'} my={'16'} p={''}>
      <Heading color={'pink'} size={['md','lg']}>Welcome, CatLover</Heading>
        <HStack>
        <Input placeholder={'First Name'} variant={'Filled'}  type={'text'} required focusBorderColor='pink' />
        <Input placeholder={'Last Name'} variant={'Filled'}  type={'text'} required focusBorderColor='pink' />

        </HStack>
        <Input placeholder={'Email'} variant={'Filled'}  type={'Email'} required focusBorderColor='pink' />
        <Input placeholder={'password'} variant={'Filled'}  type={'password'} required focusBorderColor='pink' />
        <Button variant={'ghost'} colorScheme='pink' >SignUp</Button>
      </VStack>

      </form>

    </Container>


      </Box>
    </>
  )
}

export default Signup