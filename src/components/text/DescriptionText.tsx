import React from 'react'
import { Text, TextProps } from '@chakra-ui/react';

type DescriptionTextProps = {
    content:string;
} & TextProps;
const DescriptionText: React.FC<DescriptionTextProps> = ( props:DescriptionTextProps ) => {
  const {
    content,
    fontSize = "24px",
    fontWeight = "500",
    color = "#8E9990",
    style,
    ...rest
  } = props;
  return (
    <Text 
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      {...rest}
      >
      {content}
    </Text>
  )
}

export default DescriptionText