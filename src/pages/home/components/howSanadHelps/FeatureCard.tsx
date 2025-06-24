import { Flex, Text, Image } from '@chakra-ui/react';
import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, subtitle, description }) => {
  return (
    <Flex
      p="1px"
      background={` linear-gradient(179.42deg, rgba(47, 242, 145, 0.08) -4.16%, rgba(87, 155, 39, 0.48) 148.71%)`}
      w={"100%"}
      borderRadius={8}
      justify="center"
      align="center"
      maxW={"360px"}
      minH={{base:"100px",md:"400px"}}
    >
      <Flex
        borderRadius={8}
        bg={"white"}
        p={6}
        direction={"column"}
        w="100%"
        h={"100%"}
        py={"24px"}
        textAlign="center"
        justifyContent={"space-between"}
      >
        <Flex flexDirection={"column"} flex={1}>
          <Flex
            borderRadius="md"
            justifyContent={"center"}
            p={2}
            mb={4}
          >
            <Image src={icon} alt="feature icon" boxSize="65px" />
          </Flex>

          <Text fontSize="27px" fontWeight={700} color="#434C45" mb={2}>
            {title}
          </Text>
        </Flex>
        <Flex flexDirection={"column"} flex={1} justifyContent={"start"}>
          <Text fontWeight={700} color="#7F7F7F" fontSize="14px" mb={1}>
            {subtitle}
          </Text>

          <Text fontSize="14px" color="#7F7F7F" fontWeight={400}>
            {description}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FeatureCard;
