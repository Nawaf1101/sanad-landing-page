import React from 'react'
import { Text, TextProps, useBreakpointValue } from '@chakra-ui/react';

type GradientTextProps = {
    content:string;
} & TextProps;
const GradientText: React.FC<GradientTextProps> = ( props:GradientTextProps ) => {
  const mainFontSize = useBreakpointValue({base:"30px",md:"40px"})
  const {
    content,
    fontSize = mainFontSize,
    fontWeight = 700,
    style,
    ...rest
  } = props;
  return (
    <Text 
      fontSize={fontSize}
      fontWeight={fontWeight}
      whiteSpace="pre-line" 
      style={{
        background: "linear-gradient(180deg, rgba(20, 32, 11, 0.8) -38.79%, rgba(75, 191, 134, 0.8) 262.92%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        ...style
      }}
      {...rest}
      >
      {content}
    </Text>
  )
}

export default GradientText