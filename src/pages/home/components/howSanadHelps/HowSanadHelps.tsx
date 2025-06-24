import React from 'react';
import { Box, SimpleGrid , Flex } from '@chakra-ui/react';
import FeatureCard from './FeatureCard';
import iconSafeDoc from '@/assets/svgs/icon-safe-doc.svg';
import iconOperations from '@/assets/svgs/icon-operations.svg';
import iconVision from '@/assets/svgs/icon-vision.svg';
import GradientText from '@/components/text/GradientText';
import DescriptionText from '@/components/text/DescriptionText';

const HowSanadHelps: React.FC = () => {
  return (
    <Box py={20} w={"100%"} px={{base:0,md:"32px"}} bg="#FAFAFA" textAlign="center">
      <GradientText fontSize={{base:"40px",md:"50px"}} content={"كيف يساعدك سند؟"} />
      <DescriptionText fontSize={"19px"} fontWeight={500} content={"مساعدك الشامل في العمليات والامتثال"} />
      <Flex h={"48px"}/>
      <SimpleGrid w={"100"} minChildWidth={"340px"} alignItems={"stretch"} justifyItems={"center"} gap={4}>
        <FeatureCard
          icon={iconSafeDoc}
          title="تخزين مستندات آمن"
          subtitle="حافظ على مستنداتك بأمان وسهولة"
          description="مع سند يمكنك تخزين جميع مستنداتك بأمان، وبإمكانية الوصول إليها في أي وقت ومن أي مكان."
        />
        <FeatureCard
          icon={iconOperations}
          title="إدارة العمليات اليومية بسرعة وكفاءة"
          subtitle="نحو عمليات أسرع وأكثر سلاسة"
          description="باستخدام أدوات سند الذكية، يمكنك إدارة المهام اليومية وتنظيم سير العمل بسهولة. وفر الوقت وارفع كفاءة منظمتك بنظام مصمم خصيصاً لتبسيط عملياتك اليومية."
        />
        <FeatureCard
          icon={iconVision}
          title="رؤية واضحة ودعم متخصص"
          subtitle="سهولة الوصول إلى الأنظمة والمستجدات"
          description="سند يقدم لك إرشادات واضحة ومحدثة تتماشى مع أحدث المتطلبات في المملكة العربية السعودية. سواء كنت بحاجة إلى توجيه سريع أو متابعة مستمرة، سند هنا لدعمك."
        />
      </SimpleGrid >
    </Box>
  );
};

export default HowSanadHelps;
