import DescriptionText from '@/components/text/DescriptionText'
import GradientText from '@/components/text/GradientText'
import { Flex, Image } from '@chakra-ui/react'
import whatIsSanadImage from "@/assets/svgs/what-is-sanad0image.svg"
const WhatIsSanad = () => {
  return (
    <Flex id='whoUs' as="section" w="100%" px={{base:"8px",md:"32px"}} align="center" justifyContent={"center"} direction={{ base: 'column', md: 'row' }}>
      <Flex flex={1} justifyContent="center" alignItems="center" direction={"column"}>
        <GradientText content={'سند لدعمك بتبسيط العمليات ومساعدتك بكفاءة أعلى.'} />
        <DescriptionText 
          content={"سند يسهل مهامك اليومية، البقاء متوافقًا مع الأنظمة، والتركيز على ما يهمك حقًا!"}
          fontSize={"19px"}  
        />
      </Flex>
      <Flex flex={1} direction={"column"} display="flex" justifyContent="center" alignItems="center">
        <Image 
          src={whatIsSanadImage}
          alt="what is sanad"
          objectFit="contain"
          maxW={{ base: "90%", md: "500px" }}
          w={"100%"}
          h="auto"
        />
      </Flex>
    </Flex>
  )
}

export default WhatIsSanad