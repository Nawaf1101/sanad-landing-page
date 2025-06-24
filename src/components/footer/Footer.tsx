import React from 'react';
import { Flex, Link, Image, useBreakpointValue } from '@chakra-ui/react';
import sanadLogo from "@/assets/sanad-logo.svg";
import powerdBySani from "@/assets/svgs/powerd-by-sani.svg";
import SmallScreensFooter from './SmallScreensFooter';
import MainFooter from './MainFooter';

const Footer: React.FC = () => {
  const isSmallScreen = useBreakpointValue({base:true,md:false});
  if (isSmallScreen) return <SmallScreensFooter />
  else return <MainFooter/>
};

export default Footer; 