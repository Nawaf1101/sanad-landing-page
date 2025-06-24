import { Box, Button, Flex, Icon, Image, useBreakpointValue } from '@chakra-ui/react';
import SlideCard from './SlideCard';
import complexLegalCompliance from "@/assets/svgs/complex-legal-compliance.svg"
import inefficientInternalProcesses from "@/assets/svgs/inefficient-internal-processes.svg"
import noProfessionalSupportCard from "@/assets/svgs/no-professional-support-card.svg"
import activeIndecator from "@/assets/svgs/active-indecator.svg"
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const slides = [
  {
    id: 1,
    title: 'متطلبات الامتثال القانونية المعقدة',
    description: 'قد يكون من الصعب مواكبة الأنظمة والتشريعات',
    image: <Image src={complexLegalCompliance} />,
  },
  {
    id: 2,
    title: 'عمليات داخلية غير فعالة',
    description: 'الأعمال الإدارية المتكررة تستهلك الوقت وتبطئ الإنتاجية',
    image: <Image src={inefficientInternalProcesses} />,
  },
  {
    id: 3,
    title: 'عدم توفر الدعم المهني',
    description: 'إيجاد الإرشادات القانونية والإدارية المناسبة ليس دائمًا سهلًا',
    image: <Image src={noProfessionalSupportCard} />,
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const leftPosition = useBreakpointValue({ base: "28%",xl: "20%" }); 
  
  const nextSlide = () => {
  setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
    
  return (
    <Flex direction={"column"} position="relative" h="600px" overflow="visible">
        <Flex
          direction="column"
          align="center"
          maxW="1400px"
          mx="auto"
          w="100%"
          h="full"
          position="relative"
        >
          <Flex direction={"column"} flex="1" position="relative" w="full">
            {slides.map((slide, index) => {
            const isActive = index === currentSlide;
            const isPrevious = index === (currentSlide - 1 + slides.length) % slides.length;
            const isNext = index === (currentSlide + 1) % slides.length;

            let left = '0%';
            let scale = 0.8;
            let opacity = 0.6;
            let zIndex = 1;
            let rotate = 'rotateY(0deg)';

            if (isActive) {
                left = "50%";
                scale = 1;
                opacity = 1;
                zIndex = 3;
              } else if (isPrevious) {
                left = `calc(50% - ${leftPosition})`;
                zIndex = 2;
                rotate = 'rotateY(60deg)';
              } else if (isNext) {
                left = `calc(50% + ${leftPosition})`;
                rotate = 'rotateY(-60deg)';
                zIndex = 2;
              }
              
            // For slides that are not the current, previous, or next, keep them off-screen.
            // The default leftPosition = '100%' handles this for slides after the next.
            // For slides before the previous (in the wrap-around), they will also default to 100% initially
            
            return (
                <Flex
                direction={"column"}
                key={slide.id}
                position="absolute"
                top="50%"
                left={left}
                transform={`translate(-50%, -50%) scale(${scale})  ${rotate}`}
                w="60%"
                maxW="500px"
                // h="full"
                opacity={opacity}
                transition="all 0.5s ease"
                zIndex={zIndex}
                >
                {/* Apply overlay only to non-active slides */}
                {!isActive && (
                    <Flex
                      direction={"column"}
                      position="absolute"
                      top={0}
                      left={0}
                      right={0}
                      bottom={0}
                      bg="blackAlpha.600"
                      zIndex={4}
                      borderRadius={24}
                      backdropFilter="blur(2px)"
                      pointerEvents="none"
                    />
                )}
                
                  <SlideCard 
                      title={slide.title}
                      description={slide.description}
                      image={slide.image}
                  />
                </Flex>
            );
            })}
          </Flex>
        </Flex>
        <Flex justify="center" mt={6} gap={2} zIndex={5}>
          {slides.map((_, index) => {
            const isActive = index === currentSlide;
            return (
              <Box key={index}>
                {isActive ? (
                  <Image src={activeIndecator} boxSize="15px" />
                ) : (
                  <Box
                    boxSize="15px"
                    borderRadius="full"
                    bg="gray.300"
                    opacity={0.6}
                  />
                )}
              </Box>
            );
          })}
        </Flex>
        <Button
          position="absolute"
          left={4}
          top="50%"
          transform="translateY(-50%)"
          onClick={prevSlide}
          boxSize={"48px"}
          borderRadius="6px"
          borderWidth={1}
          borderColor={"#C6CCC7"}
          bg="white"
          zIndex={2}
          p={"8px"}
        >
            <Icon as={FaChevronLeft} color={"#4BBF86"} />
        </Button>
        <Button
          position="absolute"
          right={4}
          top="50%"
          transform="translateY(-50%)"
          onClick={nextSlide}
          boxSize={"48px"}
          borderRadius="6px"
          borderWidth={1}
          borderColor={"#C6CCC7"}
          bg="white"
          zIndex={2}
          p={"8px"}
        >
            <Icon as={FaChevronRight}  color={"#4BBF86"}/>
        </Button>
    </Flex>
  )
}

export default Slider