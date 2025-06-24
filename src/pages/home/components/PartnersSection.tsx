import { useRef, useEffect } from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import norahAlmalahiFoundation from "@/assets/images/partners/naf.png";
import misk from "@/assets/svgs/partners/misk.svg";
import mcit from "@/assets/svgs/partners/mcit.svg";
import moc from "@/assets/svgs/partners/moc.svg";
import mim from "@/assets/svgs/partners/mim.svg";
import sdaia from "@/assets/svgs/partners/sdaia.svg";
import GradientText from '@/components/text/GradientText';

const partners = [
  { id: 1, name: 'اوقاف نورة الملاحي', image: norahAlmalahiFoundation },
  { id: 2, name: 'مؤسسة محمد بن سلمان', image: misk },
  { id: 3, name: 'وزارة الاتصالات وتقنية المعلومات', image: mcit },
  { id: 4, name: 'وزارة الثقافة', image: moc },
  { id: 5, name: 'وزارة الصناعة والثروة المعدنية', image: mim },
  { id: 6, name: 'سدايا', image: sdaia },
];

const ITEM_WIDTH = 300;
const GAP = 5;
const SPEED = 1;
const REPEAT_COUNT = 3;

const PartnersSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);

  const items = Array(REPEAT_COUNT)
    .fill(partners)
    .flat()
    .map((p, i) => ({ ...p, uniq: `${p.id}_${i}` }));

  const TRACK_WIDTH = items.length * (ITEM_WIDTH + GAP) / REPEAT_COUNT;

  useEffect(() => {
    let raf: number;
    let running = true;

    function animate() {
      if (trackRef.current) {
        offsetRef.current -= SPEED;
        if (Math.abs(offsetRef.current) >= TRACK_WIDTH) {
          offsetRef.current = 0;
        }
        trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
      }
      if (running) raf = requestAnimationFrame(animate);
    }

    raf = requestAnimationFrame(animate);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
    };
  }, [TRACK_WIDTH]);

  return (
    <Flex direction="column" as="section" w="100%" textAlign="center" overflow="hidden" pb={20}>
      <GradientText content="شركاؤنا"/>
      <Box
        w="100%"
        overflow="hidden"
        h="120px"
        position="relative"
        bg="transparent"
        style={{ whiteSpace: 'nowrap' }}
      >
        <Box
          ref={trackRef}
          position="absolute"
          left={0}
          top={0}
          display="flex"
          alignItems="center"
          h="100%"
          style={{
            willChange: 'transform',
            transition: 'none',
          }}
        >
          {items.map((partner, idx) => (
            <Box
              key={partner.uniq}
              minW={ITEM_WIDTH + 'px'}
              h="100px"
              mx={GAP / 2 + 'px'}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src={partner.image}
                alt={partner.name}
                h="70%"
                objectFit="contain"
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Flex>
  );
};

export default PartnersSection;
