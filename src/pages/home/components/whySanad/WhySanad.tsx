import { Flex } from '@chakra-ui/react';
import Slider from './Slider';
import GradientText from '@/components/text/GradientText';


const WhySanad = () => {

  return (
    <Flex id='whySanad' direction={"column"} gap={2}>
        <Flex w={"100%"} alignItems={"center"} justifyContent={"center"}>
          <GradientText content={'لماذا سند؟'}  />
        </Flex>
        <Slider />
    </Flex>
  );
};

export default WhySanad