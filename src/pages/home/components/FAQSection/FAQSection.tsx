import React from 'react';
import {
  Box,
  Flex,
} from '@chakra-ui/react';
import GradientText from '@/components/text/GradientText';
import FAQAccordion from './FAQAccordion';

const FAQSection: React.FC = () => {
  return (
    <Flex
      id='faq'
      direction={{ base: 'column', md: 'row' }}
      justify="space-between"
      align="center"
      py={12}
      gap={12}
      bg="white"
    >
      <Box flex={1} textAlign={{ base: 'center', md: 'right' }}>
        <GradientText textAlign={"center"} content={"لديك استفسار؟ \n لدينا الإجابة."}/>
      </Box>
      <Box flex={1} w="100%">
        <FAQAccordion />
      </Box>
    </Flex>
  );
};

export default FAQSection;
