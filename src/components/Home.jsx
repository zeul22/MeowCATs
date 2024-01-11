import { Box, Container, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Image } from '@chakra-ui/react'
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import img5 from '../assets/5.png'


const headingOptions={
    pos:"absolute",
    left:"50%",
    top:"20%",
    transform:"translate(-50%,-50%)",
    textTransform:"uppercase",
    p:"4",
    size:'xl'

}

const Home = () => {
  return (

    <Box>
    <MyCarousel /> 
    <Container maxW={'container.xl'} minH={"100vh"} bgColor={'blackAlpha.800'} color={'white'}>
        <Heading textTransform={"uppercase"} m={"auto"} p={"16"}
        w={'fit-content'} borderBottom={'2px'}>OUR TOP AGENTS
        </Heading>
        <Stack h={"full"} p={"4"} alignItems={"center"} direction={['column','row']}>
        <VStack>
        <Image h={['40','400']} w={['40','40%']} pos={'relative'} textAlign={['center','left']} 
        src={img1} borderRadius={'50%'} filter={'hue-rotate(20deg)'}></Image>    
        <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}> 
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea dolor nihil natus recusandae temporibus, nobis voluptate! Eligendi quos inventore perferendis illum
        provident, facere atque iste fuga. Natus facere voluptatibus tempora aut at temporibus. Corrupti, tempora, provident inventore mollitia repellendus voluptatum odio modi qui doloribus
        ,officia recusandae aspernatur quidem illo. Voluptas quia ipsam, maxime perspiciatis in repellat necessitatibus exercitationem illo tempora mollitia labore aliquam impedit 
        quod quibusdam voluptatum dolor nobis voluptatibus est, debitis delectus numquam ullam at. Beatae ea, commodi corporis odit maxime accusamus consequuntur iure consectetur quas? Dicta error
        iste sit deserunt vero soluta beatae provident et nemo consectetur! Aliquam? Lorem1
        </Text>

        <Image h={['40','400']} w={['40','40%']} pos={'relative'} textAlign={['center','left']} 
        src={img1} borderRadius={'50%'} filter={'hue-rotate(20deg)'}></Image>    
        <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}> 
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea dolor nihil natus recusandae temporibus, nobis voluptate! Eligendi quos inventore perferendis illum
        provident, facere atque iste fuga. Natus facere voluptatibus tempora aut at temporibus. Corrupti, tempora, provident inventore mollitia repellendus voluptatum odio modi qui doloribus
        ,officia recusandae aspernatur quidem illo. Voluptas quia ipsam, maxime perspiciatis in repellat necessitatibus exercitationem illo tempora mollitia labore aliquam impedit 
        quod quibusdam voluptatum dolor nobis voluptatibus est, debitis delectus numquam ullam at. Beatae ea, commodi corporis odit maxime accusamus consequuntur iure consectetur quas? Dicta error
        iste sit deserunt vero soluta beatae provident et nemo consectetur! Aliquam? Lorem1
        </Text>
        </VStack>

        
        </Stack>
    </Container>    
    </Box>

  )
}

const MyCarousel=()=>{
    
    return(
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false}
    showThumbs={false} showArrows={false}>

    <Box w={"full"} h={'100vh'} color={'red'}>
        <Image src={img1} h={'100%'} objectFit={'fill'} />
        <Heading bgColor={'blackAlpha.600'} color={"white"}  {...headingOptions}>
            MY EX LOVES CAT.
        </Heading>

    </Box>
    <Box w={"full"} h={'100vh'} color={'red'}>
        <Image h={'100%'} w={'100%'} src={img2} objectFit={'fill'} />
        <Heading bgColor={'blackAlpha.600'} color={"white"}
        {...headingOptions}>
            BUT I LIKE THEM AS BEING.
        </Heading>

    </Box>
    <Box w={"full"} h={'100vh'} color={'red'}>
        <Image  h={'100%'} w={'100%'} src={img3} objectFit={'fill'}/>
        <Heading bgColor={'blackAlpha.600'} color={"white"} {...headingOptions}>
            CATS ARE FUNNY.
        </Heading>

    </Box>
    <Box w={"full"} h={'100vh'} color={'red'}>
        <Image  h={'100%'} w={'100%'} src={img4} objectFit={'fill'}/>
        <Heading bgColor={'blackAlpha.600'} color={"white"} {...headingOptions}>
            CATS ARE EVIL.
        </Heading>

    </Box>
    <Box w={"full"} h={'100vh'} color={'red'} >
        <Image  h={'100%'} w={'100%'} src={img5}  objectFit={'fill'}/>
        <Heading bgColor={'blackAlpha.600'} color={"white"} {...headingOptions}>
            MEOW MEOW
        </Heading>

    </Box>
    </Carousel>
    )
}

export default Home