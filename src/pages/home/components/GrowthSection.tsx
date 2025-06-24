import React from 'react';
import { Flex, Image } from '@chakra-ui/react';
import productLifecycleImage from '@/assets/svgs/product-lifecycle-curve.svg';
import GradientText from '@/components/text/GradientText';
import ReactMarkdown from 'react-markdown';
import { customRenderers } from '@/components/customRenderers/CustomRenderers';

const markdown = `
### لماذا هذا المنحنى مهم لمنظمتك؟

لأن التوقف عن التطور هو العدو الأول للنمو المستقبلي،  
مع سند نساعدك لجعل مؤسستك صامدة ضد الجمود.

- مرونة التكيف مع المتغيرات  
- نمو مؤسسيًا مستدام  
- استمرارية التأثير
`;
const GrowthSection: React.FC = () => {
  return (
    <Flex
      w="100%"
      direction={"column"}
      px={{ base: 0, "2xl": "15%" }}
      py={{ base: 20, md: 32 }}
      position="relative"
      overflow="hidden"
    >
      <Flex w={"100%"} justifyContent={"center"}  align={"center"}>
        <GradientText content={'متى تتوقف المنظمات عن النمو'} />
      </Flex>
      <Flex
        direction="column"
        zIndex={1}
        w="100%"
        pb={{base:"0",md:"64"}}
        align="flex-start"
      >
        <Flex direction={"column"} mt={6} color="#404040" maxW="400px">
          <ReactMarkdown 
            components={customRenderers({
              heading: { fontSize: "21px", color: '#4D4D4D', fontWeight: 700 },
              paragraph: { fontSize: "19px", color: '#404040', fontWeight: 500 },
              text: { fontSize: "19px", color: '#404040', fontWeight: 500 },
            })}
          >
            {markdown}
          </ReactMarkdown>
        </Flex>
      </Flex>

      <Flex w={"100%"} justifyContent={"center"} flex={1}>
        <Image
          src={productLifecycleImage}
          alt="منحنى النمو"
          mt={10}
          w="100%"
          display={{ base: 'block', md: 'none' }}
        />
      </Flex>
      <Image
        src={productLifecycleImage}
        alt="منحنى النمو"
        position="absolute"
        bottom={0}
        left="50%"
        transform="translateX(-50%)"
        w="100%"
        maxW="900px"
        zIndex={0}
        display={{ base: 'none', md: 'block' }}
        pointerEvents="none"
        userSelect="none"
      />

    </Flex>
  );
};

export default GrowthSection;
