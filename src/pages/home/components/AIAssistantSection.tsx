import React, { useEffect, useState } from 'react';
import { Box, Flex, Text, Image, chakra } from '@chakra-ui/react';
import Decoration from '@/assets/svgs/decoration.svg';
import SanadAiAssistant from '@/assets/videos/sanadAiAssistant.mp4';

const words = ['أذكى', 'أبسط', 'أسهل'];

const AIAssistantSection: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentWord.length - 1) {
          setCharIndex((prev) => prev + 1);
          setDisplayedText('أ' + currentWord.slice(1, charIndex + 2));
        } else {
          setIsDeleting(true);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1);
          setDisplayedText('أ' + currentWord.slice(1, charIndex));
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, 150);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <Flex
      id='product'
      w="100%" 
      pt={{base:20,md:"32px"}} 
      px={{base:0,md:"32px"}} 
      borderRadius={24}
      justifyContent="center" 
      alignItems="center"
      bg={{base:"linear-gradient(143.94deg, #7BC3A2 40.59%, #B8E1CF 80.16%)",lg:"linear-gradient(143.94deg, #34A56F 1.2%, #7BC3A2 35.59%, #B8E1CF 80.16%)"}}
      position="relative"
      overflow="hidden"
    >
      <Box position="absolute" top="8" right="8" w={{base:"60px",md:"122px"}} h={{base:"60px",md:"122px"}}>
        <Image src={Decoration} alt="Decoration" />
      </Box>

      <Flex 
        direction={{ base: 'column', lg: 'row' }} 
        align="center" 
        w="100%" 
      >
        <Box flex="1" textAlign={{ base: 'center', md: 'right' }} mt={{ base: 8, md: 40 }} mb={{ base: 8, md: 20 }}>
          <Text minH={"3lh"} fontSize={{base:30,md:44}} color="white" fontWeight={600}>
            مساعدك الشخصي بالذكاء الاصطناعي هنا ليجعل حياتك
            <Text as="span" color="#4BBF86">
              {" "} {displayedText}|
            </Text>
          </Text>
        </Box>
        <Flex flex={1} alignItems={"flex-end"} w={"100%"} justifyContent={"center"}>
          <Flex 
            justifyContent={"center"}
            maxW={{ base: '80%', md: '600px' }}
            minH={{base:"0px",md:"500px"}}
            h={"100%"}
            w={"100%"}
            bg={"white"}
            borderTopRadius={13}
          >
            <chakra.video
              src={SanadAiAssistant}
              autoPlay
              loop
              muted
              playsInline
              direction={"column"}
              bg={"white"}
              borderTopRadius={13}
              h={"100%"}
              w={"100%"}
              justifyContent="center"
              objectFit="contain"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AIAssistantSection;
