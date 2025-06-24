import { Text, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SlideCardProps {
  title: string;
  description: string;
  image: ReactNode;
  isActive?: boolean;

}

const SlideCard: React.FC<SlideCardProps> = ({ title, description, image }) => {
  return (
    <Flex
      p="1px"
      background={` linear-gradient(268.56deg, rgba(47, 242, 145, 0.2) -14.33%, rgba(87, 155, 39, 0.6) 98.89%), 
                   linear-gradient(0deg, rgba(100, 255, 178, 0.4), rgba(100, 255, 178, 0.4))`}
      // h="100%"
      w="auto"
      borderRadius={24}
      justify="center"
      align="center"
    >
      <Flex
        direction="column"
        textAlign="center"
        // h="full"
        w="100%"
        p={"48px"}
        borderRadius={24}
        bg="white"
        boxShadow="md"
        zIndex={1}
      >
        <Text fontSize="22px" fontWeight={700} color="#141915" >
          {title}
        </Text>
        <Flex h={"24px"}/>
        <Text fontSize="16px" fontWeight={500} color="#328059">
          {description}
        </Text>
        <Flex h={"24px"}/>

        {image}
      </Flex>
    </Flex>
  );
};

export default SlideCard;
