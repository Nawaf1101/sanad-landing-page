import React from 'react';
import { Flex, Image } from '@chakra-ui/react';
import sanadLogo from "@/assets/sanad-logo.svg";
import GradientText from '../../../components/text/GradientText';
import DescriptionText from '@/components/text/DescriptionText';

const HeroSection: React.FC = () => {
  return (
    <Flex w="100%" minH="80vh" justify="center" align="center" direction="column" px={{base:"8px",md:"32px"}} textAlign="center" position={"relative"} overflow={"hidden"}
        bgGradient="linear(to-br, #E0F2F1, #A7FFEB)"
    >
      <Flex
        position="absolute"
        w={{base:"320px",xl:"400px"}}
        h={{base:"320px",xl:"400px"}}
        top="20%"
        right={"3%"}
        transform="rotate(28.13deg)"
        bgImage="radial-gradient(circle, rgba(75, 191, 134, 0.8) 0%, rgba(75, 191, 134, 0) 100%)"
        opacity={1}
        filter="blur(70px)"
        borderRadius="full"
        zIndex={0}
      />
      <Flex mb={"55px"}>
        <Image src={sanadLogo}/>
      </Flex>
      <GradientText lineHeight={{ base: "taller", md: undefined }} content={"منصة ذكية لتمكين المنظمات غير الربحية في المملكة"} />
      <Flex h={"24px"} />
      <DescriptionText fontSize={{base:"18px",md:"24px"}} content={'مع سند راح توفر وقتك، تقلل تكاليفك وترفع كفاءة وجودة عملياتك'}  />
    </Flex>
  );
};

export default HeroSection;
