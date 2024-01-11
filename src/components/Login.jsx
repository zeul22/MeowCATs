import React from 'react'
import {Box, Heading, Button, Input, Container, VStack, HStack,Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
    <Box bgColor={'blackAlpha.800'}>
    <Container maxW={'container.xl'}  h={'100vh'} p={['16']}>
      <form action="">
      <VStack alignItems={'stretch'} spacing={'8'} w={['','96']} m={'auto'} my={'16'} p={''}>
      <Heading color={'pink'} size={['md','lg']}>Welcome, CatLover</Heading>
        <Input placeholder={'Email'} variant={'Filled'}  type={'Email'} required focusBorderColor='pink' />
        <Input placeholder={'password'} variant={'Filled'}  type={'password'} required focusBorderColor='pink' />
        <HStack display={'flex'} justifyContent={'space-between'} >
        <Button variant={'link'} alignSelf={'flex-start'} size={['sm','md']}> Forgot Password</Button>
        <Link to='/signup'>
        <Button variant={'link'} alignSelf={'flex-end'} size={['sm','md']}> New User? {"  "}</Button>
        </Link>
        </HStack>
        <Button variant={'ghost'} colorScheme='pink' > Login</Button>
      </VStack>

      </form>

    </Container>

    </Box>
    </>
  )
}

export default Login