import React from 'react'
import { Box, Heading, Text, Stack, VStack, HStack } from '@chakra-ui/react'
import { Image, Divider, Container } from '@chakra-ui/react'
const About = () => {
  return (
    <>
      <Box h={'auto'} bgColor={'blackAlpha.800'}>
        <Heading p={'6'} color={'pink'}>ABOUT MEOW CATs</Heading>
        <Stack>
        <Divider />
        <div>
          <Stack direction={['column','row']}>
          <Image alignSelf={'center'} p={'4'}
            borderRadius='full'
            boxSize='250px'
            src='https://bit.ly/dan-abramov'
            alt='Cat'
            />
            <Text color={'white'} p={4}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repellendus modi iusto similique magni amet ad, exercitationem ab sit sunt iste pariatur aspernatur impedit accusamus optio maxime enim nisi minus consectetur esse. Sit, alias optio saepe vero repudiandae sed molestiae itaque quam facilis corporis tempore hic quos praesentium minus odio harum dicta? Fugiat dolor accusantium aut pariatur corporis! Voluptatem ad architecto aliquid sint! Perspiciatis sunt nisi aperiam a deleniti adipisci fugiat aliquid amet autem enim maiores ullam quos ab debitis error ratione hic corrupti dolor facere, molestias, illo quia. Explicabo, consequatur possimus! Nemo odio id excepturi quasi in laudantium incidunt.</Text>
          </Stack>
        </div>
        <Divider />
        
        </Stack>
      </Box >
      <Heading  p={'4'} textAlign={'center'} bgColor={'blackAlpha.800'} 
      alignSelf={'center'} w={'100%'} color={'pink'}>Our Founders</Heading>
        
        <Box>
          <Stack alignItems={'center'} color={'pink'} bgColor={'blackAlpha.800'} direction={['column','row']} h={['autoh','auto']}>
          <Container>
            <Image alignSelf={'center'} p={'4'}
              borderRadius='full'
              boxSize='250px'
              src='https://bit.ly/dan-abramov'
              alt='Dan Abramov'
              />
              <Heading textAlign={'center'} size={'md'} alignSelf={'center'} color={'pink'}>Founder</Heading>
              <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur iusto magni delectus esse deleniti provident ab eveniet praesentium quaerat expedita sunt rerum veniam, veritatis iure!</Text>

          </Container>
          <Container>
            <Image alignSelf={'center'} p={'4'}
              borderRadius='full'
              boxSize='250px'
              src='https://bit.ly/dan-abramov'
              alt='Dan Abramov'
              />
              <Heading textAlign={'center'} size={'md'} alignSelf={'center'}>Founder</Heading>
              <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur iusto magni delectus esse deleniti provident ab eveniet praesentium quaerat expedita sunt rerum veniam, veritatis iure!</Text>
          </Container>
            <Container>
            <Image alignSelf={'center'} p={'4'}
              borderRadius='full'
              boxSize='250px'
              src='https://bit.ly/dan-abramov'
              alt='Dan Abramov'
              />
              <Heading textAlign={'center'} size={'md'} alignSelf={'center'}>Founder</Heading>
              <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur iusto magni delectus esse deleniti provident ab eveniet praesentium quaerat expedita sunt rerum veniam, veritatis iure!</Text>

          </Container>
          </Stack>
        </Box>

        <Divider />

      <Heading p={'4'} textAlign={'center'} bgColor={'blackAlpha.800'} alignSelf={'center'} w={'100%'} color={'pink'}>Our Associates</Heading>


        <Box>
        <Stack p={'4'} alignItems={'center'} color={'pink'} bgColor={'blackAlpha.800'} direction={['column','row']} h={['autoh','auto']}>
          <Container>
            <Image alignSelf={'center'} p={'4'}
              borderRadius='full'
              boxSize='250px'
              src='https://bit.ly/dan-abramov'
              alt='Dan Abramov'
              />
              <Heading textAlign={'center'} size={'md'} alignSelf={'center'} color={'pink'}>Founder</Heading>
              <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur iusto magni delectus esse deleniti provident ab eveniet praesentium quaerat expedita sunt rerum veniam, veritatis iure!</Text>

          </Container>
          <Container>
            <Image alignSelf={'center'} p={'4'}
              borderRadius='full'
              boxSize='250px'
              src='https://bit.ly/dan-abramov'
              alt='Dan Abramov'
              />
              <Heading textAlign={'center'} size={'md'} alignSelf={'center'}>Founder</Heading>
              <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur iusto magni delectus esse deleniti provident ab eveniet praesentium quaerat expedita sunt rerum veniam, veritatis iure!</Text>
          </Container>
            <Container>
            <Image alignSelf={'center'} p={'4'}
              borderRadius='full'
              boxSize='250px'
              src='https://bit.ly/dan-abramov'
              alt='Dan Abramov'
              />
              <Heading textAlign={'center'} size={'md'} alignSelf={'center'}>Founder</Heading>
              <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur iusto magni delectus esse deleniti provident ab eveniet praesentium quaerat expedita sunt rerum veniam, veritatis iure!</Text>

          </Container>
          </Stack>
        <Stack p={'4'} alignItems={'center'} color={'pink'} bgColor={'blackAlpha.800'} direction={['column','row']} h={['autoh','auto']}>
          <Container>
            <Image alignSelf={'center'} p={'4'}
              borderRadius='full'
              boxSize='250px'
              src='https://bit.ly/dan-abramov'
              alt='Dan Abramov'
              />
              <Heading textAlign={'center'} size={'md'} alignSelf={'center'} color={'pink'}>Founder</Heading>
              <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur iusto magni delectus esse deleniti provident ab eveniet praesentium quaerat expedita sunt rerum veniam, veritatis iure!</Text>

          </Container>
          <Container>
            <Image alignSelf={'center'} p={'4'}
              borderRadius='full'
              boxSize='250px'
              src='https://bit.ly/dan-abramov'
              alt='Dan Abramov'
              />
              <Heading textAlign={'center'} size={'md'} alignSelf={'center'}>Founder</Heading>
              <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur iusto magni delectus esse deleniti provident ab eveniet praesentium quaerat expedita sunt rerum veniam, veritatis iure!</Text>
          </Container>
            <Container>
            <Image alignSelf={'center'} p={'4'}
              borderRadius='full'
              boxSize='250px'
              src='https://bit.ly/dan-abramov'
              alt='Dan Abramov'
              />
              <Heading textAlign={'center'} size={'md'} alignSelf={'center'}>Founder</Heading>
              <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur iusto magni delectus esse deleniti provident ab eveniet praesentium quaerat expedita sunt rerum veniam, veritatis iure!</Text>

          </Container>
          </Stack>
        <Stack p={'4'} alignItems={'center'} color={'pink'} bgColor={'blackAlpha.800'} direction={['column','row']} h={['autoh','auto']}>
          <Container>
            <Image alignSelf={'center'} p={'4'}
              borderRadius='full'
              boxSize='250px'
              src='https://bit.ly/dan-abramov'
              alt='Dan Abramov'
              />
              <Heading textAlign={'center'} size={'md'} alignSelf={'center'} color={'pink'}>Founder</Heading>
              <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur iusto magni delectus esse deleniti provident ab eveniet praesentium quaerat expedita sunt rerum veniam, veritatis iure!</Text>

          </Container>
          <Container>
            <Image alignSelf={'center'} p={'4'}
              borderRadius='full'
              boxSize='250px'
              src='https://bit.ly/dan-abramov'
              alt='Dan Abramov'
              />
              <Heading textAlign={'center'} size={'md'} alignSelf={'center'}>Founder</Heading>
              <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur iusto magni delectus esse deleniti provident ab eveniet praesentium quaerat expedita sunt rerum veniam, veritatis iure!</Text>
          </Container>
            <Container>
            <Image alignSelf={'center'} p={'4'}
              borderRadius='full'
              boxSize='250px'
              src='https://bit.ly/dan-abramov'
              alt='Dan Abramov'
              />
              <Heading textAlign={'center'} size={'md'} alignSelf={'center'}>Founder</Heading>
              <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur iusto magni delectus esse deleniti provident ab eveniet praesentium quaerat expedita sunt rerum veniam, veritatis iure!</Text>

          </Container>
          </Stack>
        </Box>
    </>
    )
}

export default About