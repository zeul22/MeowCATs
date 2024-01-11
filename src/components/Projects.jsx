import React, { useState } from 'react'
import { Stack, HStack, VStack, Heading, Text, Button} from '@chakra-ui/react'


// Can Create a Backend For it
let video_db=['https://www.youtube.com/watch?v=6flJ8pOa3zY',
'https://www.youtube.com/watch?v=6flJ8pOa3zY',
'https://www.youtube.com/watch?v=6flJ8pOa3zY',
'https://www.youtube.com/watch?v=6flJ8pOa3zY'
]

const Projects = () => {
  const [videoSrc,setVideosSrc] =useState(video_db[0])

  return <Stack direction={['column','row']} bgColor={'blackAlpha.800'} h={'100vh'}>
  <VStack w={'full'} >
    <video src={videoSrc} controls controlsList='nodownload' style={{width:'100%',
    }}></video>

  <VStack alignItems={'flex-start'} p={"8"} w={"full"} color={'white'} overflowY={'auto'}>
    <Heading>Sample Video </Heading>
    <Text>This is a Sample Video for Testing and Demo.</Text>
  </VStack>  
  </VStack >
    <VStack w={['full','xl']} alignItems={'stretch'} spacing={'8'} overflow={'auto'}>
    
    {video_db.map((item,index)=>(
    <Button key={index} variant={'ghost'} colorScheme='pink' onClick={()=>setVideosSrc(item)}>
      Project {index+1}
    </Button>

    ))}
    
    </VStack>

  
  </Stack>
  
}

export default Projects