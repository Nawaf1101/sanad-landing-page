import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import GradientText from '@/components/text/GradientText';
import DescriptionText from '@/components/text/DescriptionText';

const EmpowermentSection: React.FC = () => {
  return (
    <Flex
      as="section"
      position="relative"
      w="100%"
      minH="80vh"
      px={{ base: 4, md: "32px" }}
      py="16"
      align="center"
      justify="center"
      overflow="hidden"
      bg="white"
    >
      <Box
        position="absolute"
        w="1500px"
        h="1500px"
        top="40%"
        right={"40%"}
        transform="rotate(28.13deg)"
        bgImage="radial-gradient(circle, rgba(75, 191, 134, 0.8) 0%, rgba(75, 191, 134, 0) 100%)"
        opacity={0.2}
        borderRadius="full"
        zIndex={0}
      />
      <Box
        position="absolute"
        w="100%"
        h="100%"
        top="60%"
        left="10%"
        transform="rotate(28.13deg)"
        bgImage="radial-gradient(circle, rgba(75, 191, 134, 0.8) 0%, rgba(75, 191, 134, 0) 100%)"
        opacity={0.7}
        borderRadius="full"
        filter="blur(120px)"
        zIndex={0}
      />
      <Box
        position="absolute"
        w="100%"
        h="100%"
        top="40%"
        right="40%"
        transform="rotate(169.76deg)"
        bgImage="radial-gradient(circle, rgba(222, 243, 233, 0.4) 0%, rgba(222, 243, 233, 0) 100%)"
        opacity={0.7}
        borderRadius="full"
        filter="blur(100px)"
        zIndex={0}
      />

      <Box textAlign="center" maxW="800px" zIndex={1}>
        <GradientText fontSize={{base:"30px",md:"50px"}} content="تمكين المنظمات من خلال عمليات سلسة ورؤية واضحة." />
        <Flex h={"8px"}/>
        <DescriptionText
          content="إدارة أي مؤسسة يمكن أن تكون معقدة. بين المتطلبات القانونية، سير العمل، والوثائق، غالبًا ما تجد المنظمات نفسها غارقة في الأعمال الإدارية. في سند، نؤمن بأن المنظمات يجب أن تصب تركيزها على تحقيق أهدافها وليس على الأعمال الورقية."
          fontSize={{base:"16px",md:"19px"}}
          fontWeight={500}
        />
      </Box>
    </Flex>
  );
};

export default EmpowermentSection;
