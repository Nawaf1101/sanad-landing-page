import React from 'react';
import { Flex, Link, Image } from '@chakra-ui/react';
import sanadLogo from "@/assets/sanad-logo.svg";
import powerdBySani from "@/assets/svgs/powerd-by-sani.svg";

const SmallScreensFooter: React.FC = () => {
  return (
    <Flex 
      as="footer" 
      w="100%" 
      py="6" 
      px="4" 
      gap={4}
      justifyContent="space-between" 
      alignItems="center" 
      bg="white"
      borderTopWidth={"0.5px"}
      borderColor={"#C6CCC7"}
      flexDirection={"column"}
    >
      <Image src={sanadLogo} alt="Sanad Logo" h={35}/>
      <Link href="mailto:sanad_ai@sani.dev" fontSize="18px" color={"#000000"} fontWeight={500}>
        sanad_ai@sani.dev
      </Link>
    <Image src={powerdBySani} alt="Powerd By Sani" h="20px" />
    </Flex>
  );
};

export default SmallScreensFooter; 