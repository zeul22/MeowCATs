import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button
} from '@chakra-ui/react'

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

import { Stack, Heading, Image, Text, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

import { Progress } from '@chakra-ui/react'

const meow_progress=['Total Work Progress','Profitability',' Meow Meow','Rivalry Bhow Bhow']
const portfolios=[` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat.asdasdasfdasfafadfadfdafda`,` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat.`,` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat.`,` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat.`]
const info=[{
  'heads':"The perfect Cushion",
  'text':`Caffè latte is a coffee beverage of Italian origin made with espresso
  and steamed milk.`
},
{
  'heads':"The Perfect PawFood",
  'text':`Caffè latte is a coffee beverage of Italian origin made with espresso
  and steamed milk.`
},
{
  'heads':"The Perfect Toys",
  'text':`Caffè latte is a coffee beverage of Italian origin made with espresso
  and steamed milk.`
}

]
const Portfolio = () => {
  return (
    <>

<TableContainer alignItems={'center'} bgColor={'blackAlpha.800'} color={'white'}
 zIndex={'1'} left={['','20%']} h={'30vh'} w={['100%']}>
  <Table colorScheme='pink' size={['','md']}>
    <TableCaption color={'white'}>Some PawMetrics</TableCaption>
    <Thead>
      <Tr bgColor={'pink'}>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr bgColor={'pink'}>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>  

<Heading p={'20px 0px 20px 0px '} w={'100%'} color={'pink'} bgColor={'blackAlpha.800'} 
alignItems={'center'} justifyContent={'center'} display={'flex'}>
  OUR BEST ASSETS
</Heading>
  {info.map((item,index)=>(

  <Card key={index} bgColor={'blackAlpha.800'}
  color={'white'}
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  >
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
  />

  <Stack >
    <CardBody>
      <Heading size='md'>{item.heads}</Heading>

      <Text py='8'>
      {item.text}
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='pink'>
        MeowMeow Work
      </Button>
    </CardFooter>
  </Stack>
</Card>

  ))}

<Heading p={'20px 0px 20px 0px '}  w={'100%'} color={'pink'} bgColor={'blackAlpha.800'} 
alignItems={'center'} justifyContent={'center'} display={'flex'}>
  OUR PORTFOLIOS
</Heading>

    <Accordion bgColor={'blackAlpha.800'} color={'white'}>
    {portfolios.map((item1,index1)=>(
      <AccordionItem key={index1}>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          <h1>Portfolio {index1+1}</h1>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>    
    <AccordionPanel pb={4}>
      {item1}
      {meow_progress.map((item,index)=>(
        <div>
        <Button key={index} variant={'ghost'} colorScheme='pink'>
          {item}
        </Button>
        <Progress value={50}/>
        </div>

    ))}
    

    </AccordionPanel>
  </AccordionItem>

    ))}
  
</Accordion>
    
    </>


    )
}

export default Portfolio

