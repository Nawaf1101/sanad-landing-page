import React from 'react';
import HeroSection from './components/HeroSection';
import PartnersSection from './components/PartnersSection';
import GrowthSection from './components/GrowthSection';
import WhySanad from './components/whySanad/WhySanad';
import AIAssistantSection from './components/AIAssistantSection';
import EmpowermentSection from './components/EmpowermentSection';
import { Box, Flex, useBreakpointValue } from '@chakra-ui/react';
import WhatIsSanad from './components/WhatIsSanad';
import HowSanadHelps from './components/howSanadHelps/HowSanadHelps';
import FAQSection from './components/FAQSection/FAQSection';
import ContactUs from './components/ContactUs';
import mainPattern from '@/assets/patterns/main.svg?url';
import patternFilled from '@/assets/patterns/patteren-filled.svg?url';
import CircleEffect from '@/components/circleEffect/CircleEffect';

interface SectionWrapperProps {
  children: React.ReactNode
  patternSrc?: string
  patternDirection?: 'left' | 'right'
  patternRepeat?: boolean
  showPattern?: boolean
  showBlur?: boolean
  showBlurCircle?: boolean
  blurPosition?: 'left' | 'right'
  isPatternCoverComponent?:boolean
  customPaternWidth?:string
  disablePadding?:boolean
  bluerH?:string
  bluerTop?:string
  bluerW?:string
  blurCircleColorThick?:string
  customRightForFaq?:string
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  patternSrc,
  patternDirection = 'right',
  // patternRepeat = true,
  showPattern = true,
  showBlur = true,
  showBlurCircle = false,
  blurPosition = 'right',
  isPatternCoverComponent=false,
  customPaternWidth="100%",
  disablePadding=false,
  bluerH="50%",
  bluerTop="50%",
  bluerW="40%",
  blurCircleColorThick="100%",
  customRightForFaq
}) => {
  return (
    <Box position="relative" w="100%" overflow={"visible"}>
      {showPattern && patternSrc && (
        <Box
          position="absolute"
          top={0}
          bottom={0}
          left={patternDirection === 'left' ? 0 : undefined}
          right={ customRightForFaq? customRightForFaq : patternDirection === 'right' ? 0 : undefined}
          w={customPaternWidth}
          h="100%"
          opacity={0.08}
          backgroundImage={`url(${patternSrc})`}
          backgroundRepeat={customPaternWidth !== '100%' ? "no-repeat" : "repeat"}
          backgroundSize={customPaternWidth !== '100%' ? "cover" : "auto"}
          backgroundPosition={customPaternWidth !== '100%' ? "center" : (patternDirection === 'left' ? "-15% 80%" : "115% 80%")}
          zIndex={5}
          pointerEvents="none"
          userSelect="none"
          css={customRightForFaq? {
            maskImage: 'linear-gradient(to left, black 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to left, black 60%, transparent 100%)',
          } : undefined}
        />
      )}

      {showBlur && (
        <Box
          position="absolute"
          top={bluerTop}
          left={blurPosition === 'left' ? 0 : undefined}
          right={blurPosition === 'right' ? 0 : undefined}
          transform="translateY(-50%)"
          w={bluerW}
          h={bluerH}
          bg="rgba(75, 191, 134, 0.3)"
          filter="blur(120px)"
          zIndex={4}
          pointerEvents="none"
        />
      )}

      {showBlurCircle && (
        <Box
          position="absolute"
          top={bluerTop}
          left={blurPosition === 'left' ? 0 : undefined}
          right={blurPosition === 'right' ? 0 : undefined}
          transform="translateY(-50%)"
          w={bluerW}
          h={bluerH}
          bgImage={`radial-gradient(circle, rgba(75, 191, 134, 0.8) 0%, rgba(75, 191, 134, 0) ${blurCircleColorThick})`}
          filter="blur(120px)"
          zIndex={4}
          borderRadius="full"
          pointerEvents="none"
        />
      )}

      <Box position="relative" px={disablePadding? 0:{base:"8px",md:"32px"}} zIndex={isPatternCoverComponent? 1:10}>
        {children}
      </Box>
    </Box>
  );
};
const Home: React.FC = () => {
  const customFAQPaternWidth = useBreakpointValue({ base: '0%', md: '100%' }); 
  return (
    <Flex direction="column" w="100%" gap={12}>
      <SectionWrapper 
        patternSrc={mainPattern}
        patternDirection="right"
        showBlur={false}
        blurPosition="right"
        bluerW='30%'
        bluerTop='65%'
        customPaternWidth='100%'
        showBlurCircle={true}
        blurCircleColorThick='60%'
        disablePadding
      >
        <Flex flexDirection={"column"} position={"relative"} overflowX={"clip"}>
          <CircleEffect  w={"1500px"} h={"1500px"} opacity={0.09} disableFilter top={"80%"} left='10%' transformValue="translate(-50%, -50%)"  />
          <Flex flexDirection={"column"}>
            <HeroSection />
            <PartnersSection />
            <WhatIsSanad />
          </Flex>
        </Flex>
      </SectionWrapper>
      <SectionWrapper 
        patternSrc={mainPattern}
        patternDirection="left"
        showPattern={true}
        showBlur={true}
        blurPosition="left"
        disablePadding
        bluerH='70%'
        bluerTop={"70%"}
      >
        <Flex flexDirection={"column"} position={"relative"} overflow={"hidden"}>
          <CircleEffect  w={"1800px"} h={"1800px"} disableFilter top={"100%"} left='65%' transformValue="translate(-50%, -50%)"  />
          <Flex flexDirection={"column"} px={{base:"8px",md:"32px"}}>
            <WhySanad />
            <GrowthSection />
          </Flex>
        </Flex>
      </SectionWrapper>
      <Flex w={"100%"} px={{base:"8px",md:"32px"}}>
        <AIAssistantSection />
      </Flex>
      <Flex w={"100%"} flexDirection={"column"}>
        <Flex w={"100%"} minH={"80vh"}>
          <EmpowermentSection />
        </Flex>
        <Flex w={"100%"}>
          <HowSanadHelps />
        </Flex>
        <Flex overflow={"hidden"}>
          <SectionWrapper
            patternSrc={patternFilled}
            patternDirection="right"
            showPattern={true}
            showBlur={false}
            blurPosition="right"
            isPatternCoverComponent
            customPaternWidth={customFAQPaternWidth}
            customRightForFaq='-60%'
          >
            <FAQSection />
          </SectionWrapper>
        </Flex>
        <Flex w={"100%"} mb={6}>
          <ContactUs />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
