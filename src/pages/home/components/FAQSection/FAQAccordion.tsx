import { Accordion, Text, Flex, Image, Box } from '@chakra-ui/react';
import { useState } from 'react';
import plusIcon from "@/assets/svgs/plus-icon.svg"
import minusIcon from "@/assets/svgs/minus-icon.svg"
import ReactMarkdown from 'react-markdown';
import { customRenderers } from '@/components/customRenderers/CustomRenderers';


const markdown = `
من خلال:

- أتمتة المهام الروتينية لتوفير الوقت  
- تنظيم المستندات وإدارتها إلكترونيًا  
- تقديم إرشادات قانونية محدّثة باستمرار  
- كل ذلك في منصة واحدة سهلة الاستخدام!
`;
const items = [
  { value: 'a', title: 'ماهي منصة سند؟', text: 'سند هو حلٌّ تقني متكامل صُمم خصيصًا لدعم المنظمات غير الربحية في السعودية، حيث يوفر أدوات ذكية لإدارة العمليات اليومية، تخزين المستندات بشكل آمن، والاستشارات القانونية لضمان الامتثال التنظيمي.' },
  { value: 'b', title: 'كيف يمكن لسند تحسين منظمتي؟', text: markdown },
  { value: 'c', title: 'هل سند مناسب للمنظمات الصغيرة؟', text: 'بالطبع! سند صُمم ليناسب جميع أحجام المنظمات غير الربحية، سواءً كانت ناشئة أو كبيرة.' },
  { value: 'd', title: 'ماذا يميز سند عن غيره من المنصات؟', text: 'كونه الأول في السعودية الذي يجمع بين الأدوات التشغيلية والدعم القانوني المتخصص للمنظمات غير الربحية.' },
];

const FAQAccordion = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  return (
    <Accordion.Root spaceY={"24px"} multiple onValueChange={(v) => setOpenItems(v.value)}>
      {items.map((item) => {
        const isOpen = openItems.includes(item.value);
        return (
          <Box
            key={item.value}
            bg="linear-gradient(179.42deg, rgba(47, 242, 145, 0.08) -4.16%, rgba(87, 155, 39, 0.48) 148.71%)"
            borderRadius="16px"
            p="1px"
            transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 20px rgba(47, 242, 145, 0.15)'
            }}
          >
            <Accordion.Item 
              borderRadius="16px"
              value={item.value}
              bg="white"
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            >
              <Accordion.ItemTrigger
                w="100%"
                h="100%"
                justifyContent="space-between"
                alignItems="center"
                padding="1.25rem"
                borderTopRightRadius="16px"
                borderTopLeftRadius="16px"
                borderBottomRadius={isOpen ? "0" : "16px"}
                _hover={{
                  bg: 'rgba(47, 242, 145, 0.03)'
                }}
              >
                <Image 
                  src={isOpen ? minusIcon : plusIcon} 
                  transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  transform={isOpen ? "rotate(180deg)" : "rotate(0deg)"}
                />
                <Text 
                  fontSize="18px" 
                  textAlign="right" 
                  fontWeight={600} 
                  color="#262626"
                  flex="1"
                  mr="16px"
                >
                  {item.title}
                </Text>
              </Accordion.ItemTrigger>
              <Flex
                maxH={isOpen ? "500px" : "0"}
                overflow="hidden"
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                padding={isOpen ? '1.25rem' : '0'}
                borderTopRightRadius="0"
                borderTopLeftRadius="0"
                borderBottomRightRadius="16px"
                borderBottomLeftRadius="16px"
                opacity={isOpen ? 1 : 0}
                bg="rgba(47, 242, 145, 0.02)"
              >
                <Flex
                  dir="rtl"
                  textAlign="right"
                  w="100%"
                  flexDirection="column"
                >
                  <ReactMarkdown
                    components={customRenderers({
                      text: { fontSize: 16, color: '#7F7F7F', fontWeight: 500 },
                      paragraph: { fontSize: 16, color: '#7F7F7F', fontWeight: 500 },
                    })}
                  >
                    {item.text}
                  </ReactMarkdown>
                </Flex>
              </Flex>
            </Accordion.Item>
          </Box>
        )
      })}
    </Accordion.Root>
  );
};

export default FAQAccordion;
